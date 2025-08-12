import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Unique,
  Index,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("user")
export class User {
  @Index()
  @PrimaryGeneratedColumn({ type: "number" })
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  @Unique(["email"])
  email: string;

  @Column({ name: "password_hash", select: false })
  password: string;

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn({ select: false })
  createdAt: Date;

  @UpdateDateColumn({ select: false })
  updatedAt: Date;
}
