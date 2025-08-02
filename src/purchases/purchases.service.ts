import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePurchaseDto } from './dto/create-purchase.dto';
import { UpdatePurchaseDto } from './dto/update-purchase.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PurchaseEntity } from './entities/purchase.entity';

@Injectable()
export class PurchasesService {
  constructor(
    @InjectRepository(PurchaseEntity)
    private readonly purchaseRepository: Repository<PurchaseEntity>,
  ) {}

  async findAll(): Promise<PurchaseEntity[]> {
    return await this.purchaseRepository.find();
  }

  async create(createPurchaseDto: CreatePurchaseDto): Promise<PurchaseEntity> {
    const purchase = this.purchaseRepository.create(createPurchaseDto);
    return await this.purchaseRepository.save(purchase);
  }

  async findById(id: number): Promise<PurchaseEntity> {
    const purchase = await this.purchaseRepository.findOne({
      where: {
        id,
      },
    });
    if (!purchase) throw new NotFoundException('Не найдено');
    return purchase;
  }

  async update(id: number, updatePurchaseDto: UpdatePurchaseDto): Promise<PurchaseEntity> {
    const purchase = await this.findById(id);
    Object.assign(purchase, updatePurchaseDto);
    await this.purchaseRepository.save(purchase);
    return purchase;
  }
  
  async delete(id: number): Promise<number> {
    const purchase = await this.findById(id);
    await this.purchaseRepository.remove(purchase);
    return purchase.id;
  }
}