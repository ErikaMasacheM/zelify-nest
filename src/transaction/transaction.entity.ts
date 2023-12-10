import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export enum TransactionStatus {
  REJECTED = 'REJECTED',
  APPROVED = 'APPROVED',
}
@Entity()
@ObjectType()
export class Transaction {
  @Field((type) => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field((type) => Int)
  @Column({ type: 'int' })
  identificador: number;

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
