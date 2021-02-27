import { Module } from '@nestjs/common';
import { LoginController } from './login.controller';
import { UserRepository } from './login.repository';
import { LoginService } from './login.service';

@Module({
  imports: [UserRepository],
  controllers: [LoginController],
  providers: [UserRepository, LoginService],
  exports: [LoginService, UserRepository],
})
export class LoginModule {}
