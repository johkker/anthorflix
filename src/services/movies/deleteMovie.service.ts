import { AppError } from "../../errors";
import { movieRepository } from "../../repositories";

const deleteMovieSVC = async (id: string, adm: boolean) => {
  const movie = await movieRepository.findOne({
    where: { id: id },
  });

  if (!movie) {
    throw new AppError("Movie not found", 404);
  }

  if (!adm) throw new AppError("Not Authorized", 401);

  movieRepository.remove(movie);
  await movieRepository.save(movie);

  return {
    message: `The movie ${movie.id} was succesfully deleted.`,
  };
};

export default deleteMovieSVC;
