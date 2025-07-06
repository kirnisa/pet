import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { RoleEntity } from './entities/role.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class RolesService {
  roleRepository: any;
  constructor(
    @InjectRepository(RoleEntity) roleRepository: Repository<RoleEntity>,
  ) {}
  async findAll(): Promise<RoleEntity[]> {
    return await this.roleRepository.find();
  }
  async create(createRoleDto: CreateRoleDto): Promise<RoleEntity> {
    const role = this.roleRepository.create(createRoleDto);
    return await this.roleRepository.save(role);
  }
  async findById(id: number): Promise<RoleEntity> {
    const role = await this.roleRepository.findOne({
      where: {
        id,
      },
    });
    if (!role) throw new NotFoundException('Не найдено');
    return role;
  }
  async update(id: number, updateRoleDto: UpdateRoleDto): Promise<RoleEntity> {
    const role = await this.findById(id);
    Object.assign(role, updateRoleDto);
    await this.roleRepository.save(role);
    return role;
  }
  async delete(id: number): Promise<number> {
    const role = await this.findById(id);
    await this.roleRepository.remove(role);
    return role.id;
  }
}
