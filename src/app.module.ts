import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { DogsController } from './dogs/dogs.controller';
import { AdminController } from './admin/admin.controller';

@Module({
  imports: [],
  controllers: [AppController, CatsController, DogsController, AdminController],
  providers: [AppService],
})
export class AppModule {}
