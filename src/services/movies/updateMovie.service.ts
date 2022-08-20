import { Movie } from "../../entities";
import { movieRepository } from "../../repositories";
import { IMovieUpdate } from "../../interfaces";
import { AppError } from "../../errors";

const createMovieSVC = async (data: IMovieUpdate, id: string, adm: boolean) => {
  const { title, overview, releaseDate, runtime } = data;

  const movie = await movieRepository.findOne({
    where: { id: id },
  });

  if (!movie) {
    throw new AppError("Movie not found", 400);
  }
  if (!adm) throw new AppError("Not Authorized", 401);

  title ? (movie.title = title) : movie.title;
  overview ? (movie.overview = overview) : movie.overview;
  releaseDate ? (movie.releaseDate = releaseDate) : movie.releaseDate;
  runtime ? (movie.runtime = runtime) : movie.runtime;
  data.genres ? (movie.genres = data.genres) : movie.genres;

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
    updatedAt: movie.updatedAt,
  };
};

export default createMovieSVC;
