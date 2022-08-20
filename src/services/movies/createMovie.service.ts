import { Movie, Rating } from "../../entities";
import { movieRepository, ratingRepository } from "../../repositories";
import { IMovieCreate } from "../../interfaces";
import { AppError } from "../../errors";

const createMovieSVC = async (data: IMovieCreate, adm: boolean) => {
  const { title, overview, releaseDate, runtime } = data;

  const existingMovie = await movieRepository.findOne({
    where: { title: title },
  });

  if (existingMovie) {
    throw new AppError("Movie already registered", 400);
  }

  if (!adm) throw new AppError("Not Authorized", 401);

  const rating = new Rating();
  ratingRepository.create(rating);
  await ratingRepository.save(rating);

  const movie = new Movie();
  movie.title = title;
  movie.overview = overview;
  movie.releaseDate = releaseDate;
  movie.runtime = runtime;
  movie.genres ? data.genres : [];
  movie.rating = rating;

  movieRepository.create(movie);
  await movieRepository.save(movie);

  return {
    movie,
  };
};

export default createMovieSVC;
