import { Prisma } from '@prisma/client'
import { CheckInsRepository } from '../check-ins-repository'

export class PrismaCheckInsRepository implements CheckInsRepository {
  async create(data: Prisma.CheckInUncheckedCreateInput) {
    throw new Error('Method not implemented.')
  }

  async findByUserIdOnDate(userId: string, date: Date) {
    throw new Error('Method not implemented.')
  }
}
