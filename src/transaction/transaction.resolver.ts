import { Query, Resolver } from '@nestjs/graphql';
import { TransactionService } from './transaction.service';
import { Transaction } from './transaction.entity';

@Resolver(() => Transaction)
export class TransactionResolver {
  constructor(private readonly transactionService: TransactionService) {}
  @Query(() => [Transaction], {
    description: 'Lista de transacciones',
    name: 'transactions',
  })
  async transactions(): Promise<Transaction[]> {
    return this.transactionService.findAll();
  }
}
