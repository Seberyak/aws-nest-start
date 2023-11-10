import { Module, Provider } from '@nestjs/common';
import { DocumentClient } from 'aws-sdk/clients/dynamodb';

const dynamoDB: Provider = {
  provide: DocumentClient,
  useValue: new DocumentClient(),
};

@Module({
  providers: [dynamoDB],
  exports: [dynamoDB],
})
export class DynamoDbModule {}
