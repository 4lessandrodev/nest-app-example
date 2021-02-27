import { Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { UserRepository } from './login.repository';

@Injectable()
export class LoginService {
  constructor(private userRepository: UserRepository) {}

  getExample(): string {
    return 'Example';
  }

  async setExample(loginDto: LoginDto): Promise<string> {
    return this.userRepository.setExample(loginDto);
  }
}
