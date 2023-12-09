import { Module } from '@nestjs/common';
import { TransactionModule } from './transaction/transaction.module';
import { TransactionController } from './transaction/transaction.controller';
import { TransactionService } from './transaction/transaction.service';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [TransactionModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
