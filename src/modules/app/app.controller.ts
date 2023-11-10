import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags()
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiResponse({ status: 200, description: 'Returns hello world' })
  @Get()
  getHello(): Promise<any> {
    return this.appService.getHello();
  }
}
