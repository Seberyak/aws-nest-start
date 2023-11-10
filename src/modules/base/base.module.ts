import { Module } from '@nestjs/common';
import { DynamoDbModule } from './dynamo-db/dynamo-db.module';

@Module({
  imports: [DynamoDbModule],
})
export class BaseModule {}
