import { Controller, Get, Post, Body, Patch, Param, Delete, Query, NotFoundException } from '@nestjs/common';
import { ComponentService } from './component.service';
import { CreateComponentDto } from '../dto/component/create-component.dto';
import { UpdateComponentDto } from '../dto/component/update-component.dto';
import { CubagemInputDto } from '../dto/component/cubagem-input.dto';
import { Component } from '../entities/Component.entity';
import { ComponentWithGroupDto } from '../dto/component/component-with-group.dto';


@Controller('component')
export class ComponentController {
  constructor(private readonly componentService: ComponentService) { }

  @Post()
  create(@Body() createComponentDto: CreateComponentDto) {
    return this.componentService.create(createComponentDto);
  }

  @Get()
  findAll() {
    return this.componentService.findAll();
  }

  @Get('by-group/:groupName')
  async findOneByGroupName(@Param('groupName') groupName: string) {
    const component = await this.componentService.findOneByGroupName(groupName);

    if (!component) {
      // Retorne uma resposta adequada quando o componente não for encontrado.
      throw new NotFoundException('Component not found for the given group name');
    }

    return component;
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
  @Post('cubagem')
  async calcularCubagem(@Body() cubagemInput: CubagemInputDto[]) {
    const resultados = [];

    for (const input of cubagemInput) {
      const componente = await this.componentService.findComponentById(input.id);

      if (componente) {
        const cubagem = this.calcularCubagemComponente(componente, input.quantidade);
        const pesoBruto = componente.gross_weight * input.quantidade;
        const pesoLiquido = pesoBruto - (componente.tare || 0);

        resultados.push({
          cubagem,
          pesoBruto,
          pesoLiquido,
        });
      }
    }

    return resultados;
  }

  private calcularCubagemComponente(componente: Component, quantidade: number): number {
    const cubagem = (componente.height * componente.width * componente.depth) * quantidade;
    return cubagem;
  }
  @Patch('soft-delete/:id')
  async updateTimestamp(@Param('id') id: string): Promise<Component> {
    return this.componentService.updateTimestamp(+id);
  }
}
