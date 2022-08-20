import {
  Entity,
  Column,
  Unique,
  PrimaryGeneratedColumn,
  ManyToMany,
} from "typeorm";
import { Movie } from ".";

@Entity()
@Unique(["name"])
export class Genre {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ name: "name", type: "varchar" })
  name: string;

  @ManyToMany(() => Movie, (movie) => movie.genres)
  movies: Movie[];
}
