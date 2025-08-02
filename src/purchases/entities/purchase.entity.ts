import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { SubscribeEntity } from 'src/subscribes/entities/subscribe.entity';
import { CustomerEntity } from 'src/customers/entities/customer.entity';

@Entity('purchases')
export class PurchaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => SubscribeEntity, subscribe => subscribe.purchases,
  {cascade: true, onDelete: 'CASCADE'})
  @JoinColumn({ name: 'subscribeId' })
  subscribe: SubscribeEntity;

  @Column()
  subscribeId:number;

 @ManyToOne(() => CustomerEntity, customer => customer.purchases,
   {cascade: true, onDelete: 'CASCADE'})
 @JoinColumn({ name: 'customerId' })
 customer: CustomerEntity;

  @Column()
  customerId: number;

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  updatedDate: Date;
}