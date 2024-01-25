import { IsEmail } from 'class-validator';
import { Timestamp } from 'typeorm';

export class CreateUserDto {
  readonly id?: number;

  readonly name?: string;

  @IsEmail()
  readonly username?: string;

  readonly pwd?: string;

  readonly email?: string;

  readonly created_at?: Timestamp;

  readonly updated_at?: Timestamp;

  readonly deleted_at?: Timestamp;

  readonly active?: boolean;
}
