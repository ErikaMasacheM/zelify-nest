import {
  IsEnum,
  IsNumber,
  Max,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';
import { TransactionStatus } from '../transaction.entity';
import { ApiProperty } from '@nestjs/swagger';
// import { TransactionStatus } from '../transaction.entity';

export class CreateTransactionDto {
  @ApiProperty({
    example: 111111,
    description: 'Numoero que identifica la transaccion',
  })
  @IsNumber()
  @Min(111111)
  @Max(999999)
  identificador: number;

  @ApiProperty({
    example: '400.35',
    description: 'Monto de la transaccion',
  })
  @IsNumber()
  amount: number;

  @ApiProperty({
    example: '1234567890',
    description: 'Numero de cuenta, minimo 10 caracteres y maximo 50',
  })
  @MinLength(10, {
    message: 'Número de cuenta incorrecto',
  })
  @MaxLength(50, {
    message: 'Número de cuenta incorrecto',
  })
  account: string;

  @ApiProperty({
    example: 'APPROVED',
    description: 'APPROVED | REJECTED',
  })
  @IsEnum(TransactionStatus)
  status: TransactionStatus;
}
