import { type IBaseEntity } from './IBaseEntity'

type ISoftDeletableEntity = IBaseEntity & { deletedAt: Date | null }

export type { ISoftDeletableEntity }