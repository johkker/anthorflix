import {
  Entity,
  Column,
  Unique,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { Movie, User } from ".";

@Entity()
export class Comment {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ name: "content", type: "varchar" })
  content: string;

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;

  @ManyToOne(() => Movie, (movie) => movie.comments)
  movie: Movie;

  @ManyToOne(() => User, (user) => user.comments)
  user: User;
}
