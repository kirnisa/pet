import { DrugEntity } from 'src/drugs/entities/drug.entity';
import { PurchaseEntity } from 'src/purchases/entities/purchase.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('subscribes')
export class SubscribeEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  price: number

  @ManyToOne(() => DrugEntity, drug => drug.subscribe,
   {cascade: true, onDelete: 'CASCADE'})
  @JoinColumn({ name: 'drugId' })
  drug: DrugEntity;

  @OneToMany(() => PurchaseEntity, purchase => purchase.subscribe)
  purchases: PurchaseEntity[];

  @Column()
  drugsId: number;

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  updatedDate: Date;
}
