import { Injectable } from '@nestjs/common';
import { DocumentClient } from 'aws-sdk/clients/dynamodb';

@Injectable()
export class AppService {
  constructor(private readonly db: DocumentClient) {}
  async getHello(): Promise<{ data: any; status: number; success: boolean }> {
    const res = await this.db.scan({ TableName: 'TestTable' }).promise();

    return { data: res.Items, status: 200, success: true };
  }
}
