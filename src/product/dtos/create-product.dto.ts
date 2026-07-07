import {
  IsIn,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateProductDto {
  @MinLength(3)
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsPositive()
  @IsNumber({ maxDecimalPlaces: 2 })
  @IsNotEmpty()
  price: number;

  @IsIn(['food', 'drink'])
  @IsOptional()
  category?: 'food' | 'drink';
}
