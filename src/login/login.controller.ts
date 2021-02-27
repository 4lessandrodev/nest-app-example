import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { LoginService } from './login.service';

@Controller('/login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Get('/example')
  getExample(): string {
    return this.loginService.getExample();
  }

  @Post('/example')
  setExample(@Body(ValidationPipe) loginDto: LoginDto): Promise<string> {
    return this.loginService.setExample(loginDto);
  }
}
