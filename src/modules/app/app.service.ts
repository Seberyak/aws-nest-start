import { Injectable } from '@nestjs/common';
import { DocumentClient } from 'aws-sdk/clients/dynamodb';
import { Connection } from '@typedorm/core';

@Injectable()
export class AppService {
  constructor(private readonly db: DocumentClient) {}
  async getHello(): Promise<any> {
    const res = await this.db.scan({ TableName: 'TestTable' }).promise();
    return res.Items;

    // return 'Hello World!';
  }

  async test() {}
}
