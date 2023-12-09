import { Module } from '@nestjs/common';
import { TransactionController } from './transaction.controller';
import { TransactionService } from './transaction.service';
import { transactionProviders } from './transaction.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [TransactionController],
  providers: [...transactionProviders, TransactionService],
})
export class TransactionModule {}
