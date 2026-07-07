import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthService } from './auth.service';

// @UsePipes(ValidationPipe)
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(@Body() body: unknown) {
    // this.authService.register();
    console.log(body);
    return 'Success';
  }

  // @HttpCode(200)
  @HttpCode(HttpStatus.OK)
  @Post('login')
  login(@Body() body: unknown, @Body('email') email: string) {
    console.log(body);
    console.log(email);
    return 'Access token';
  }
}

// // PLAIN JS OBJECT
// const a = {
//   email: 'a@mail.com',
//   password: '123456',
// };

// class User {
//   email: string;
//   password: string;

//   constructor(e: string, p: string) {
//     this.email = e;
//     this.password = p;
//   }
// }
// // INSTANCE OF USER
// const b = new User('a@mail.com', '123456');
