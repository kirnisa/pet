import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSubscribeDto } from './dto/create-subscribe.dto';
import { UpdateSubscribeDto } from './dto/update-subscribe.dto';
import { SubscribeEntity } from './entities/subscribe.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class SubscribesService {
  constructor(
    @InjectRepository(SubscribeEntity)
    private readonly subscribeRepository: Repository<SubscribeEntity>,
  ) {}

  async findAll(): Promise<SubscribeEntity[]> {
    return await this.subscribeRepository.find();
  }

  async create(
    createSubscribeDto: CreateSubscribeDto,
  ): Promise<SubscribeEntity> {
    const subscribe = this.subscribeRepository.create(createSubscribeDto);
    return await this.subscribeRepository.save(subscribe);
  }

  async findById(id: number): Promise<SubscribeEntity> {
    const subscribe = await this.subscribeRepository.findOne({
      where: {
        id,
      },
    });
    if (!subscribe) throw new NotFoundException('Не найдено');
    return subscribe;
  }

  async update(
    id: number,
    updateSubscribeDto: UpdateSubscribeDto,
  ): Promise<SubscribeEntity> {
    const subscribe = await this.findById(id);
    Object.assign(subscribe, updateSubscribeDto);
    await this.subscribeRepository.save(subscribe);
    return subscribe;
  }
  
  async delete(id: number): Promise<number> {
    const subscribe = await this.findById(id);
    await this.subscribeRepository.remove(subscribe);
    return subscribe.id;
  }
}
