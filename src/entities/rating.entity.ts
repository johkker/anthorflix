import {
  Entity,
  Column,
  Unique,
  PrimaryGeneratedColumn,
  ManyToOne,
  ManyToMany,
  JoinTable,
  JoinColumn,
  OneToOne,
} from "typeorm";
import { User } from ".";
import { Movie } from ".";

@Entity()
export class Rating {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ name: "likes", type: "int", default: 0 })
  likes: number;

  @Column({ name: "dislikes", type: "int", default: 0 })
  dislikes: number;

  @ManyToMany(() => User, (user) => user.ratings)
  @JoinTable({ name: "users" })
  users: User[];

  @OneToOne(() => Movie, (movie) => movie.rating)
  movie: Movie;
}
