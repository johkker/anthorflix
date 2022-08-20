import {
  Entity,
  Column,
  Unique,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToMany,
  CreateDateColumn,
  UpdateDateColumn,
  JoinTable,
  JoinColumn,
  OneToOne,
} from "typeorm";
import { Comment, Rating, Genre } from ".";

@Entity()
@Unique(["title"])
export class Movie {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ name: "title", type: "varchar" })
  title: string;

  @Column({ name: "overview", type: "varchar" })
  overview: string;

  @Column({ name: "release_date", type: "date" })
  releaseDate: string;

  @Column({
    name: "image_url",
    type: "varchar",
    default: "https://source.unsplash.com/random",
  })
  imageUrl: string;

  @Column({ name: "runtime", type: "int" })
  runtime: number;

  @ManyToMany(() => Genre, (genre) => genre.movies)
  @JoinTable({ name: "genres" })
  genres: Genre[];

  @OneToOne(() => Rating, (rating) => rating.movie)
  @JoinColumn({ name: "rating" })
  rating: Rating;

  @OneToMany(() => Comment, (comment) => comment.movie)
  comments: Comment[];

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;
}
