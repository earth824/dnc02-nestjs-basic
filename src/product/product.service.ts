import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dtos/create-product.dto';
import { PrismaService } from '../database/prisma.service';

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService) {}

  async createProduct(dto: CreateProductDto) {
    await this.prisma.product.create({ data: dto });
    // INSERT NEW PRODUCT INTO DATABASE
  }
}
