import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SegmentTypeService } from './segment-type.service';
import { CreateSegmentTypeDto } from '../dto/segment-type/create-segment-type.dto';
import { UpdateSegmentTypeDto } from '../dto/segment-type/update-segment-type.dto';
import { SegmentType } from '../entities/SegmentType.entity';

@Controller('segment-type')
export class SegmentTypeController {
  constructor(private readonly segmentTypeService: SegmentTypeService) {}

  @Post()
  create(@Body() createSegmentTypeDto: CreateSegmentTypeDto) {
    return this.segmentTypeService.create(createSegmentTypeDto);
  }

  @Get()
  findAll() {
    return this.segmentTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.segmentTypeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSegmentTypeDto: UpdateSegmentTypeDto) {
    return this.segmentTypeService.update(+id, updateSegmentTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.segmentTypeService.remove(+id);
  }
  @Patch('soft-delete/:id')
  async updateTimestamp(@Param('id') id: string): Promise<SegmentType> {
    return this.segmentTypeService.updateTimestamp(+id);
  }
}
