import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BaseModule } from '../base/base.module';
import { DynamoDbModule } from '../base/dynamo-db/dynamo-db.module';

@Module({
  imports: [BaseModule, DynamoDbModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
