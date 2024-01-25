import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ComponentService } from './component.service';
import { CreateComponentDto } from '../dto/component/create-component.dto';
import { UpdateComponentDto } from '../dto/component/update-component.dto';

@Controller('component')
export class ComponentController {
  constructor(private readonly componentService: ComponentService) {}

  @Post()
  create(@Body() createComponentDto: CreateComponentDto) {
    return this.componentService.create(createComponentDto);
  }

  @Get()
  findAll() {
    return this.componentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.componentService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateComponentDto: UpdateComponentDto) {
    return this.componentService.update(+id, updateComponentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.componentService.remove(+id);
  }

  @Get('search')
  findByName(@Query('name') name: string) {
    return this.componentService.findByName(name);
  }
}
