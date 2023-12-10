import { Module } from '@nestjs/common';
import { TransactionController } from './transaction.controller';
import { TransactionService } from './transaction.service';
import { transactionProviders } from './transaction.providers';
import { DatabaseModule } from 'src/database/database.module';
import { TransactionResolver } from './transaction.resolver';
@Module({
  imports: [DatabaseModule],
  controllers: [TransactionController],
  providers: [...transactionProviders, TransactionService, TransactionResolver],
})
export class TransactionModule {}
