import { PurchaseEntity } from 'src/purchases/entities/purchase.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('customers')
export class CustomerEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fio: string;

  @Column()
  email: string;

  @OneToMany(() => PurchaseEntity, purchase => purchase.customer)
  purchases: PurchaseEntity[]

  @CreateDateColumn()
  createdDate: Date;
  
  @UpdateDateColumn()
  updatedDate: Date;
}
