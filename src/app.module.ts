import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginModule } from './login/login.module';
import { UserRepository } from './login/login.repository';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [UserRepository, LoginModule, TasksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
