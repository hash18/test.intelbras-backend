import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("token", { schema: "intelbras" })
export class Token {
  @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
  id: number;

  @Column("varchar", { name: "hash", nullable: true, length: 450 })
  hash: string | null;

  @Column("varchar", { name: "username", nullable: true, length: 255 })
  username: string | null;
}
