import { EntityAlreadyDeletedError } from '~/shared/errors/entityAlreadyDeletedError'
import { ISoftDeletableEntity } from '../interfaces/ISoftDeletableEntity'
import { BaseEntity } from './baseEntity'

abstract class SoftDeletableEntity<Properties = null> extends BaseEntity<Properties> {
  private _deletedAt: Date | null = null

  constructor(properties: Properties, base?: ISoftDeletableEntity) {
    super(properties, base)

    if (base) {
      this._deletedAt = base.deletedAt
    }
  }

  public get deletedAt(): Date | null {
    return this._deletedAt
  }

  public set deletedAt(value: Date | null) {
    this._deletedAt = value
  }

  public get isDeleted(): boolean {
    return !!this._deletedAt
  }

  public delete(): void {
    if (this._deletedAt) {
      throw new EntityAlreadyDeletedError()
    }

    this._deletedAt = new Date()
  }

  public restore(): void {
    this._deletedAt = null
  }
  
}

export { SoftDeletableEntity }