import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ComponentGroupService } from './component-group.service';
import { CreateComponentGroupDto } from '../dto/component-group/create-component-group.dto';
import { UpdateComponentGroupDto } from '../dto/component-group/update-component-group.dto';
import { ComponentGroup } from '../entities/ComponentGroup.entity';

@Controller('component-group')
export class ComponentGroupController {
  constructor(private readonly componentGroupService: ComponentGroupService) {}

  @Post()
  async create(@Body() createComponentGroupDto: CreateComponentGroupDto) {
    return this.componentGroupService.create(createComponentGroupDto);
  }

  @Get()
  async findAll() {
    return this.componentGroupService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.componentGroupService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateComponentGroupDto: UpdateComponentGroupDto) {
    return this.componentGroupService.update(+id, updateComponentGroupDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.componentGroupService.remove(+id);
  }
  @Patch('soft-delete/:id')
  async updateTimestamp(@Param('id') id: string): Promise<ComponentGroup> {
    return this.componentGroupService.updateTimestamp(+id);
  }
}
