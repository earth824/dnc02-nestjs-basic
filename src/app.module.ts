import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { validate } from './config/env.validate';

@Module({
  imports: [
    ProductModule,
    AuthModule,
    UserModule,
    DatabaseModule,
    ConfigModule.forRoot({
      isGlobal: true,
      validate,
    }),
  ],
})
export class AppModule {}
