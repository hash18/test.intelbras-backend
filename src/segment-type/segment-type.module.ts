import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SegmentType } from '../entities/SegmentType.entity';
import { SegmentTypeService } from './segment-type.service';
import { SegmentTypeController } from './segment-type.controller';

@Module({
  imports: [TypeOrmModule.forFeature([SegmentType])],
  controllers: [SegmentTypeController],
  providers: [SegmentTypeService],
  exports: [SegmentTypeService],
})
export class SegmentTypeModule {}
