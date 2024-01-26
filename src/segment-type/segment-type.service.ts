import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SegmentType } from '../entities/SegmentType.entity';
import { CreateSegmentTypeDto } from '../dto/segment-type/create-segment-type.dto';
import { UpdateSegmentTypeDto } from '../dto/segment-type/update-segment-type.dto';

@Injectable()
export class SegmentTypeService {
  constructor(
    @InjectRepository(SegmentType)
    private readonly segmentTypeRepository: Repository<SegmentType>,
  ) {}

  async create(createSegmentTypeDto: CreateSegmentTypeDto): Promise<SegmentType> {
    const segmentType = this.segmentTypeRepository.create(createSegmentTypeDto);
    return await this.segmentTypeRepository.save(segmentType);
  }

  async findAll(): Promise<SegmentType[]> {
    return await this.segmentTypeRepository.find();
  }

  async findOne(id: number): Promise<SegmentType> {
    const segmentType = await this.segmentTypeRepository.findOne({
      where: { id },
    });
  
    if (!segmentType) {
      throw new NotFoundException(`Component with id ${id} not found`);
    }
  
    return segmentType;
  }

  async updateTimestamp(id: any): Promise<SegmentType> {
    const component = await this.segmentTypeRepository.findOne({
      where: { id },
    });
  
    if (!component) {
      throw new NotFoundException(`Component with id ${id} not found`);
    }
  
    // Atualiza apenas o campo `updated_at`
    component.deleted_at = new Date();
  
    return await this.segmentTypeRepository.save(component);
  }

  async update(id: number, updateSegmentTypeDto: UpdateSegmentTypeDto): Promise<SegmentType> {
    await this.findOne(id); // Check if exists
    await this.segmentTypeRepository.update(id, updateSegmentTypeDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.findOne(id); // Check if exists
    await this.segmentTypeRepository.delete(id);
  }
}
