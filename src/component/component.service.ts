import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateComponentDto } from '../dto/component/create-component.dto';
import { UpdateComponentDto } from '../dto/component/update-component.dto';
import { Component } from '../entities/Component.entity';

@Injectable()
export class ComponentService {
  constructor(
    @InjectRepository(Component)
    private readonly componentRepository: Repository<Component>,
  ) {}

  async create(createComponentDto: CreateComponentDto): Promise<Component> {
    const component = this.componentRepository.create(createComponentDto);
    return await this.componentRepository.save(component);
  }

  async findAll(): Promise<Component[]> {
    return await this.componentRepository.find();
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

  async remove(id: number): Promise<void> {
    const component = await this.findOne(id); // Check if component exists
    await this.componentRepository.remove(component);
  }

  async findByName(name: string): Promise<Component[]> {
    return await this.componentRepository.find({ where: { name } });
  }
}
