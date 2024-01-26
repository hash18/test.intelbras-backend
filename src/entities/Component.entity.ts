import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { ComponentGroup } from "./ComponentGroup.entity";
import { SegmentType } from "./SegmentType.entity";

@Index("fk_component_segment_type_idx", ["segment_type_id"], {})
@Index("fk_component_component_group1_idx", ["component_group_id"], {})
@Entity("component", { schema: "intelbras" })
export class Component {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("int", { name: "component_group_id", unsigned: true })
  component_group_id: number;

  @Column("int", { name: "segment_type_id", unsigned: true })
  segment_type_id: number;

  @Column("varchar", { name: "name", nullable: true, length: 100 })
  name: string | null;

  @Column("varchar", { name: "gtin", nullable: true, length: 100 })
  gtin: string | null;

  @Column("varchar", { name: "component_code", nullable: true, length: 100 })
  component_code: string | null;

  @Column("varchar", { name: "height", nullable: true, length: 45 })
  height: number | null;

  @Column("varchar", { name: "width", nullable: true, length: 45 })
  width: number | null;

  @Column("varchar", { name: "depth", nullable: true, length: 45 })
  depth: number | null;

  @Column("varchar", { name: "gross_weight", nullable: true, length: 45 })
  gross_weight: number | null;

  @Column("varchar", { name: "net_weight", nullable: true, length: 45 })
  net_weight: number | null;

  @Column("timestamp", {
    name: "created_at",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  created_at: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updated_at: Date | null;

  @Column("timestamp", { name: "deleted_at", nullable: true })
  deleted_at: Date | null;

  @Column("tinyint", {
    name: "active",
    nullable: true,
    width: 1,
    default: () => "'1'",
  })
  active: boolean | null;

  @Column({ nullable: true })
  tare: number | null;

  @ManyToOne(
    () => ComponentGroup,
    (componentGroup) => componentGroup.components,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([{ name: "component_group_id", referencedColumnName: "id" }])
  componentGroup: ComponentGroup;

  @ManyToOne(() => SegmentType, (segmentType) => segmentType.components, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "segment_type_id", referencedColumnName: "id" }])
  segmentType: SegmentType;
}
