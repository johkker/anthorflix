import { Database } from "../data-source";
import { Comment, Genre, Movie, Rating, User } from "../entities";

const userRepository = Database.getRepository(User);
const movieRepository = Database.getRepository(Movie);
const ratingRepository = Database.getRepository(Rating);
const commentRepository = Database.getRepository(Comment);
const genreRepository = Database.getRepository(Genre);

export {
  userRepository,
  movieRepository,
  ratingRepository,
  commentRepository,
  genreRepository,
};
