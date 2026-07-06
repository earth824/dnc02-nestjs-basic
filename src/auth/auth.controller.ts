import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

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
