import { Module } from '@nestjs/common';
import { ComponentGroupService } from './component-group.service';
import { ComponentGroupController } from './component-group.controller';
import { ComponentGroup } from '../entities/ComponentGroup.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ComponentGroup])],
  controllers: [ComponentGroupController],
  providers: [ComponentGroupService],
  exports: [ComponentGroupService],
})
export class ComponentGroupModule {}
