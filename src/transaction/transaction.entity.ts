import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export enum TransactionStatus {
  REJECTED = 'REJECTED',
  APPROVED = 'APPROVED',
}

@Entity()
@ObjectType()
export class Transaction {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    example: 111111,
    description: 'Numero que identifica la transaccion',
  })
  @Field(() => Int)
  @Column({ type: 'int' })
  identificador: number;

  @ApiProperty({
    example: '400.35',
    description: 'Monto de la transaccion',
  })
  @Field({ nullable: true })
  @Column({ type: 'float' })
  amount: number;

  @Field({ nullable: true })
  @Column({ length: 450 })
  account: string;

  @Field()
  @Column({
    type: 'enum',
    enum: TransactionStatus,
    default: TransactionStatus.APPROVED,
  })
  status: TransactionStatus;
}
