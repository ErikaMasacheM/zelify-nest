import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Transaction, TransactionStatus } from './transaction.entity';
@Injectable()
export class TransactionService {
  constructor(
    @Inject('TRANSACTION_REPOSITORY')
    private transactionRepository: Repository<Transaction>,
  ) {}
  createTransaction(description: string, status: TransactionStatus) {
    return `${description} ${status}`;
  }

  async findAll(): Promise<Transaction[]> {
    return await this.transactionRepository.find();
  }
}
