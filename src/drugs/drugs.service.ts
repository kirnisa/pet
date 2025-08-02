/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDrugDto } from './dto/create-drug.dto';
import { UpdateDrugDto } from './dto/update-drug.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DrugEntity } from './entities/drug.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DrugsService {
  constructor(
    @InjectRepository(DrugEntity)
    private readonly drugRepository: Repository<DrugEntity>,
  ) {}

  async findAll(): Promise<DrugEntity[]> {
    return await this.drugRepository.find();
  }

  async create(createDrugDto: CreateDrugDto): Promise<DrugEntity> {
    const drug = this.drugRepository.create(createDrugDto);
    return await this.drugRepository.save(drug);
  }

  async findById(id: number): Promise<DrugEntity> {
    const drug = await this.drugRepository.findOne({
      where: {
        id,
      },
    });
    if (!drug) throw new NotFoundException('Не найдено');
    return drug;
  }

  async update(id: number, updateDrugDto: UpdateDrugDto): Promise<DrugEntity> {
    const drug = await this.findById(id);
    Object.assign(drug, updateDrugDto);
    await this.drugRepository.save(drug);
    return drug;
  }
  
  async delete(id: number): Promise<number> {
    const drug = await this.findById(id);
    await this.drugRepository.remove(drug);
    return drug.id;
  }
}
