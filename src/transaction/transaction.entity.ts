import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export enum TransactionStatus {
  REJECTED = 'REJECTED',
  APPROVED = 'APPROVED',
}

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'float' })
  amount: number;

  @Column({ length: 450 })
  account: string;

  @Column({
    type: 'enum',
    enum: TransactionStatus,
    default: TransactionStatus.APPROVED,
  })
  status: TransactionStatus;
}
