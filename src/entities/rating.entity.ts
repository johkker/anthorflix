import {
  Entity,
  Column,
  Unique,
  PrimaryGeneratedColumn,
  ManyToOne,
  ManyToMany,
} from "typeorm";
import { User } from ".";
import { Movie } from ".";

@Entity()
export class Rating {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ name: "likes", type: "int" })
  likes: number;

  @Column({ name: "dislikes", type: "int" })
  dislikes: number;

  @ManyToMany(() => User, (user) => user.ratings)
  users: User[];

  @ManyToOne(() => Movie, (movie) => movie.ratings)
  movie: Movie;
}
