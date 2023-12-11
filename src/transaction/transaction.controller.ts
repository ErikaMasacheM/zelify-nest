import { Body, Controller, Get, Post } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { CreateTransactionDto } from './dto/transaction.dto';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Transaction } from './transaction.entity';
@ApiBearerAuth()
@ApiTags('transaction')
@Controller('transaction')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}
  @Get()
  @ApiOperation({ summary: 'Transacciones' })
  @ApiResponse({
    status: 201,
    description: 'Lista de transacciones',
    type: Transaction,
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden.',
    // type: Transaction,
  })
  getAllTransactions() {
    return this.transactionService.findAll();
  }
  @Post()
  @ApiOperation({ summary: 'Create transaction' })
  @ApiResponse({
    status: 201,
    description: 'Transaccion creada',
    // type: Transaction,
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden.',
    // type: Transaction,
  })
  createTransaction(@Body() newTranaction: CreateTransactionDto) {
    this.transactionService.createTransaction(newTranaction);
    return newTranaction;
  }
}
