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
    // const transaction = new Transaction(createTransactionDto);
    this.transactionRepository.save(createTransactionDto);
    return `${createTransactionDto.account}`;
  }

  async findAll(): Promise<Transaction[]> {
    return await this.transactionRepository.find();
  }
}
