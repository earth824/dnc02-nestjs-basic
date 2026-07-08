import { Injectable } from '@nestjs/common';
import { PrismaClient } from './generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { ConfigService } from '@nestjs/config';
import { EnvVariable } from '../config/env.validate';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor(
    private readonly configService: ConfigService<EnvVariable, true>,
  ) {
    const adapter = new PrismaPg({
      connectionString: configService.get('DATABASE_URL', { infer: true }),
    });
    super({ adapter });
  }
}

// const adapter = new PrismaPg({ connectionString: '' })
// const prisma = new PrismaClient({ adapter })
