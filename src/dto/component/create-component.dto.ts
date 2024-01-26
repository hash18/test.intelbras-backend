export class CreateComponentDto {
    component_group_id: number;
    segment_type_id: number;
    name: string;
    gtin: string;
    component_code: string;
    height: number;
    width: number;
    depth: number;
    gross_weight: number;
    net_weight: number;
    tare: number;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
    active: boolean;
  }
  