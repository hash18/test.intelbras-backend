import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateComponentGroupDto } from '../dto/component-group/create-component-group.dto';
import { UpdateComponentGroupDto } from '../dto/component-group/update-component-group.dto';
import { ComponentGroup } from '../entities/ComponentGroup.entity';

@Injectable()
export class ComponentGroupService {
  constructor(
    @InjectRepository(ComponentGroup)
    private readonly componentGroupRepository: Repository<ComponentGroup>,
  ) {}

  async create(createComponentGroupDto: CreateComponentGroupDto): Promise<ComponentGroup> {
    const newComponentGroup = this.componentGroupRepository.create(createComponentGroupDto);
    return this.componentGroupRepository.save(newComponentGroup);
  }

  async findAll(): Promise<ComponentGroup[]> {
    return this.componentGroupRepository.find();
  }

  async findOne(id: number): Promise<ComponentGroup> {
    const componentGroup = await this.componentGroupRepository.findOne({
      where: { id },
    });
  
    if (!componentGroup) {
      throw new NotFoundException(`Component with id ${id} not found`);
    }
  
    return componentGroup;
  }
  
  async updateTimestamp(id: any): Promise<ComponentGroup> {
    const component = await this.componentGroupRepository.findOne({
      where: { id },
    });
  
    if (!component) {
      throw new NotFoundException(`Component with id ${id} not found`);
    }
  
    // Atualiza apenas o campo `updated_at`
    component.deleted_at = new Date();
  
    return await this.componentGroupRepository.save(component);
  }

  async update(id: number, updateComponentGroupDto: UpdateComponentGroupDto): Promise<ComponentGroup> {
    await this.findOne(id); // Check if the componentGroup exists
    await this.componentGroupRepository.update(id, updateComponentGroupDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.findOne(id); // Check if the componentGroup exists
    await this.componentGroupRepository.delete(id);
  }
}
