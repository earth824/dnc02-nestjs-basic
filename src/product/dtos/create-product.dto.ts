export class CreateProductDto {
  name: string;

  price: number;

  category: 'food' | 'drink';
}
