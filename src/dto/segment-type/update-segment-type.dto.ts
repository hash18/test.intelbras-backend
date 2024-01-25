import { PartialType } from '@nestjs/swagger';
import { CreateSegmentTypeDto } from './create-segment-type.dto';

export class UpdateSegmentTypeDto extends PartialType(CreateSegmentTypeDto) {}
