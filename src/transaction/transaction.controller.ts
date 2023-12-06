import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('transaction')
export class TransactionController {
  @Get()
  createTransaction() {
    return 'hola mundo';
  }
}
