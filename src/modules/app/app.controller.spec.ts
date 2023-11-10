import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DocumentClient } from 'aws-sdk/clients/dynamodb';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService, DocumentClient],
    }).compile();

    appController = app.get(AppController);
  });
  it('should be defined', () => {
    expect(appController).toBeDefined();
  });
});
