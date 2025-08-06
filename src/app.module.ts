import { Module } from '@nestjs/common';
import { UsersModule } from './users/modules/users.module';
import { ReportsModule } from './reports/modules/reports.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'sqlite',
    database: 'db.sqlite',
    entities: [],
    synchronize: true
  }), UsersModule, ReportsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
