import { Injectable } from '@nestjs/common';
import { PrismaClient } from './generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    const adapter = new PrismaPg({
      connectionString:
        'postgres://postgres:123456@localhost:5432/dnc02_nestjs_basic',
    });
    super({ adapter });
  }
}

// const adapter = new PrismaPg({ connectionString: '' })
// const prisma = new PrismaClient({ adapter })
