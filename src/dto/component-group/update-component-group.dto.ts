import { PartialType } from '@nestjs/swagger';
import { CreateComponentGroupDto } from './create-component-group.dto';

export class UpdateComponentGroupDto extends PartialType(CreateComponentGroupDto) {}

