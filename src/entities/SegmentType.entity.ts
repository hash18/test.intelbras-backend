import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Component } from "./Component.entity";

@Entity("segment_type", { schema: "intelbras" })
export class SegmentType {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "segment_name", nullable: true, length: 45 })
  segment_name: string | null;

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

  @OneToMany(() => Component, (component) => component.segmentType)
  components: Component[];
}
