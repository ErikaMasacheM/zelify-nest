export class CreateTransactionDto {
  amount: number;
  date: Date;
  description: string;
  status: TransactionStatus;
}
