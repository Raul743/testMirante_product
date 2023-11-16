import { randomUUID } from 'node:crypto'

import { FieldError } from '~/shared/errors/fieldError'
import { type IBaseEntity } from '../interfaces/IBaseEntity'

abstract class BaseEntity<Properties = unknown> {
  protected _id: string
  protected _createdAt: Date
  protected _updatedAt: Date | undefined

  constructor(public properties?: Properties, base?: IBaseEntity) {
    if (properties) {
      Object.assign(this, properties)
    }

    if (base) {
      this._id = base.id
      this._createdAt = base.createdAt
      this.updatedAt = base.updatedAt

      return
    }

    this._id = randomUUID()
    this._createdAt = this._updatedAt = new Date()
  }

  public get id(): string {
    return this._id
  }

  public get createdAt(): Date {
    return this._createdAt
  }

  public get updatedAt(): Date | undefined {
    return this._updatedAt
  }

  public set updatedAt(value: Date | undefined) {

    if(value)
    if (value < this.createdAt) {
      const entityName = this.constructor.name.replace('Entity', '')
      throw new FieldError(entityName, 'updatedAt')
    }

    this._updatedAt = value
  }

  toJSON(): Required<{ id: string, createdAt: Date | null, updatedAt: Date | null } & Properties> {
    return {
      id: this.id,
      ...this.properties,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
      
    } as Required<{ id: string, createdAt: Date | null, updatedAt: Date | null } & Properties>;
  }
}

export { BaseEntity, type IBaseEntity }