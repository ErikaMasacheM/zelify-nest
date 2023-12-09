import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export enum TransactionStatus {
  REJECTED = 'REJECTED',
  APPROVED = 'APPROVED',
}

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  amount: number;

  @Column({ length: 450 })
  description: string;

  @Column()
  status: TransactionStatus;
}
