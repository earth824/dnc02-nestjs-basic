import { Controller, Delete, Get, Param, Query } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('/products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  getAllProducts(@Query('page') page: string, @Query() query: unknown) {
    console.log(page);
    return query;
  }

  @Delete(':id')
  deleteProduct(@Param() param: unknown, @Param('id') productId: string) {
    console.log(param);
    return productId;
  }
}
