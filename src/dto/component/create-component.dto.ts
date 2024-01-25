export class CreateComponentDto {
    component_group_id: number;
    segment_type_id: number;
    name: string;
    gtin: string;
    component_code: string;
    height: string;
    width: string;
    depth: string;
    gross_weight: string;
    net_weight: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
    active: boolean;
  }
  