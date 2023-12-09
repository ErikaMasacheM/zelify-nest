import {
  IsDecimal,
  IsEnum,
  IsNumber,
  Max,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';
import { TransactionStatus } from '../transaction.entity';
// import { TransactionStatus } from '../transaction.entity';

export class CreateTransactionDto {
  @IsNumber()
  @Min(111111)
  @Max(999999)
  identificador: number;

  @IsNumber()
  amount: number;

  @MinLength(10, {
    message: 'Número de cuenta incorrecto',
  })
  @MaxLength(50, {
    message: 'Número de cuenta incorrecto',
  })
  account: string;

  @IsEnum(TransactionStatus)
  status: TransactionStatus;
}
