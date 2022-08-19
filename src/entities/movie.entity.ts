import {
  Entity,
  Column,
  Unique,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { Comment, Rating, Genre } from ".";

@Entity()
@Unique(["title"])
export class Movie {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ name: "title", type: "varchar" })
  title: string;

  @Column({ name: "imdb_id", type: "varchar" })
  overview: string;

  @Column({ name: "release_date", type: "date" })
  releaseDate: string;

  @Column({ name: "runtime", type: "int" })
  runtime: number;

  @ManyToMany(() => Genre, (genre) => genre.movies)
  genres: Genre[];

  @OneToMany(() => Rating, (rating) => rating.movie)
  ratings: Rating[];

  @OneToMany(() => Comment, (comment) => comment.movie)
  comments: Comment[];

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;
}
