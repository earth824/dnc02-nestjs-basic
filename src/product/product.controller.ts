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
  Put,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dtos/create-product.dto';
import { UpdateProductDto } from './dtos/update-product.dto';

// @UsePipes(ValidationPipe)
@Controller('/products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  getAllProducts(@Query('page') page: string, @Query() query: unknown) {
    console.log(page);
    return query;
  }

  // @UsePipes(ValidationPipe) // APPLY PIPE at METHOD LEVEL
  @Post()
  async createProduct(@Body() createProductDto: CreateProductDto) {
    await this.productService.createProduct(createProductDto);
  }

  // @UsePipes(ValidationPipe) // APPLY PIPE at METHOD LEVEL
  @Put(':id')
  updateProduct(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateProductDto: UpdateProductDto,
  ) {}

  @Delete(':id')
  deleteProduct(
    @Param() param: unknown,
    // @Param('id', ParseIntPipe) productId: number,
    @Param(
      'id',
      new ParseIntPipe({
        exceptionFactory() {
          throw new NotAcceptableException('Param: ID must be an integer');
          // throw new Error('ABCD');
        },
      }),
    )
    productId: number,
  ) {
    console.log(typeof productId);
    return productId;
  }
}
