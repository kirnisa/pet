import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomerEntity } from './entities/customer.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(CustomerEntity)
    private readonly customerRepository: Repository<CustomerEntity>,
  ) {}

  async findAll(): Promise<CustomerEntity[]> {
    return await this.customerRepository.find();
  }

  async create(createCustomerDto: CreateCustomerDto): Promise<CustomerEntity> {
    const customer = this.customerRepository.create(createCustomerDto);
    return await this.customerRepository.save(customer);
  }

  async findById(id: number): Promise<CustomerEntity> {
    const customer = await this.customerRepository.findOne({
      where: {
        id,
      },
    });
    if (!customer) throw new NotFoundException('Не найдено');
    return customer;
  }

  async update(
    id: number,
    updateCustomerDto: UpdateCustomerDto,
  ): Promise<CustomerEntity> {
    const customer = await this.findById(id);
    Object.assign(customer, updateCustomerDto);
    await this.customerRepository.save(customer);
    return customer;
  }
  
  async delete(id: number): Promise<number> {
    const customer = await this.findById(id);
    await this.customerRepository.remove(customer);
    return customer.id;
  }
}
