import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ComponentService } from './component.service';
import { ComponentController } from './component.controller';
import { Component } from '../entities/Component.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Component])],
  controllers: [ComponentController],
  providers: [ComponentService],
  exports: [ComponentService],
})
export class ComponentModule {}

