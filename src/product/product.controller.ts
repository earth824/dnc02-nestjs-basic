import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  NotAcceptableException,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('/products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  getAllProducts(@Query('page') page: string, @Query() query: unknown) {
    console.log(page);
    return query;
  }

  @Post()
  createProduct(@Body() body: unknown) {}

  @Delete(':id')
  deleteProduct(
    @Param() param: unknown,
    // @Param('id', ParseIntPipe) productId: number,
    @Param(
      'id',
      new ParseIntPipe({
        exceptionFactory() {
          throw new NotAcceptableException('Param: ID must be an integer');
        },
      }),
    )
    productId: number,
  ) {
    console.log(typeof productId);
    return productId;
  }
}
