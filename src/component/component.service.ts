import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateComponentDto } from '../dto/component/create-component.dto';
import { UpdateComponentDto } from '../dto/component/update-component.dto';
import { Component } from '../entities/Component.entity';
import { ComponentWithGroupDto } from '../dto/component/component-with-group.dto';

@Injectable()
export class ComponentService {

  constructor(
    @InjectRepository(Component)
    private readonly componentRepository: Repository<Component>,
  ) { }

  async create(createComponentDto: CreateComponentDto): Promise<Component> {
    const component = this.componentRepository.create(createComponentDto);
    return await this.componentRepository.save(component);
  }

  async findAll(): Promise<Component[]> {
    return await this.componentRepository.find();
  }

  async findOneByGroupName(groupName: string): Promise<Component | null> {
    return this.componentRepository
      .createQueryBuilder('component')
      .leftJoinAndSelect('component.componentGroup', 'componentGroup')
      .where('componentGroup.name = :groupName', { groupName })
      .getOne();
  }


  async findOne(id: number): Promise<Component> {
    const component = await this.componentRepository.findOne({
      where: { id },
    });

    if (!component) {
      throw new NotFoundException(`Component with id ${id} not found`);
    }

    return component;
  }

  async update(id: number, updateComponentDto: UpdateComponentDto): Promise<Component> {
    await this.findOne(id); // Check if component exists
    await this.componentRepository.update(id, updateComponentDto);
    return await this.findOne(id);
  }

  async updateTimestamp(id: any): Promise<Component> {
    const component = await this.componentRepository.findOne({
      where: { id },
    });
  
    if (!component) {
      throw new NotFoundException(`Component with id ${id} not found`);
    }
  
    // Atualiza apenas o campo `updated_at`
    component.deleted_at = new Date();
  
    return await this.componentRepository.save(component);
  }

  async remove(id: number): Promise<void> {
    const component = await this.findOne(id); // Check if component exists
    await this.componentRepository.remove(component);
  }

  async findByName(name: string): Promise<Component[]> {
    return await this.componentRepository.find({ where: { name } });
  }

  async findOneWithGroupByName(name: string): Promise<ComponentWithGroupDto | undefined> {
    const component = await this.componentRepository
      .createQueryBuilder('component')
      .innerJoinAndSelect('component.group', 'group')
      .where('group.name = :name', { name })
      .getOne();

    if (component) {
      const { name } = component.componentGroup;
      return { name, /* Outros campos necessários */ };
    }

    return undefined;
  }
  async findComponentById(id: number): Promise<Component | undefined> {
    return this.componentRepository.findOne({ where: { id } });
  }
}
