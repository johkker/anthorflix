import { Movie } from "../../entities";
import { movieRepository } from "../../repositories";
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

  const movie = new Movie();
  movie.title = title;
  movie.overview = overview;
  movie.releaseDate = releaseDate;
  movie.runtime = runtime;
  movie.genres ? data.genres : [];

  movieRepository.create(movie);
  await movieRepository.save(movie);

  return {
    id: movie.id,
    title: movie.title,
    overview: movie.overview,
    releaseDate: movie.releaseDate,
    runtime: movie.runtime,
    genres: movie.genres,
    ratings: movie.ratings,
    comments: movie.comments,
    createdAt: movie.createdAt,
  };
};

export default createMovieSVC;
