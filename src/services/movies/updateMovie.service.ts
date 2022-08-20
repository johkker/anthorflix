import { Genre, Movie } from "../../entities";
import { genreRepository, movieRepository } from "../../repositories";
import { IMovieUpdate } from "../../interfaces";
import { AppError } from "../../errors";

const updateMovieSVC = async (data: IMovieUpdate, id: string, adm: boolean) => {
  const { title, overview, releaseDate, runtime } = data;

  const movie = await movieRepository.findOne({
    where: { id: id },
    relations: ["genres"],
  });

  if (!movie) {
    throw new AppError("Movie not found", 400);
  }

  if (!adm) throw new AppError("Not Authorized", 401);

  let genres: Genre[] = [];
  if (data.genres) {
    data.genres.map(async (genreId) => {
      const dbGenre = await genreRepository.findOne({ where: { id: genreId } });
      if (!dbGenre) throw new AppError("Genre not found", 404);
      genres.push(dbGenre);
    });
  }

  title ? (movie.title = title) : movie.title;
  overview ? (movie.overview = overview) : movie.overview;
  releaseDate ? (movie.releaseDate = releaseDate) : movie.releaseDate;
  runtime ? (movie.runtime = runtime) : movie.runtime;
  movie.genres = genres;

  await movieRepository.save(movie);

  return {
    movie,
  };
};

export default updateMovieSVC;
