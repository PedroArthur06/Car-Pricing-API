import { Module } from '@nestjs/common';
import { UsersModule } from './users/modules/users.module';
import { ReportsModule } from './reports/modules/reports.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
@Module({
  imports: [UsersModule, ReportsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
