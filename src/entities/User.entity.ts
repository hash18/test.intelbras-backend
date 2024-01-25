import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("user", { schema: "intelbras" })
export class User {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "name", nullable: true, length: 150 })
  name: string | null;

  @Column("varchar", { name: "username", nullable: true, length: 100 })
  username: string | null;

  @Column("varchar", { name: "pwd", nullable: true, length: 455 })
  pwd: string | null;

  @Column("varchar", { name: "email", nullable: true, length: 455 })
  email: string | null;

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
}
