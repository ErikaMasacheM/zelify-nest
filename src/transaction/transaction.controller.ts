import { Body, Controller, Get, Post } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { CreateTransactionDto } from './dto/transaction.dto';

@Controller('transaction')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}
  @Get()
  getAllTransactions() {
    return this.transactionService.findAll();
  }
  @Post()
  createTransaction(@Body() newTranaction: CreateTransactionDto) {
    console.log(newTranaction.amount);
    this.transactionService.createTransaction(newTranaction);
    return 'nueva transaccion';
  }
}
