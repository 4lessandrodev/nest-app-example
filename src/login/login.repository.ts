import { EntityRepository, Repository } from 'typeorm';
import { LoginDto } from './dto/login.dto';
import { User } from './entities/user.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async setExample(loginDto: LoginDto): Promise<string> {
    return await `Hello Post From Service ${JSON.stringify(loginDto)}`;
  }
}
