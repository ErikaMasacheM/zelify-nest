import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Transaction } from './transaction.entity';
import { CreateTransactionDto } from './dto/transaction.dto';
@Injectable()
export class TransactionService {
  constructor(
    @Inject('TRANSACTION_REPOSITORY')
    private transactionRepository: Repository<Transaction>,
  ) {}
  createTransaction(createTransactionDto: CreateTransactionDto) {
    const transaction = new Transaction();
    transaction.amount = createTransactionDto.amount;
    transaction.account = createTransactionDto.account;
    this.transactionRepository.save(transaction);
    return `${createTransactionDto.account}`;
  }

  async findAll(): Promise<Transaction[]> {
    return await this.transactionRepository.find();
  }
}
