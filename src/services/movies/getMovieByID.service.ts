import { AppError } from "../../errors";
import { movieRepository } from "../../repositories";

const getMovieByIDSVC = async (id: string) => {
  const movie = await movieRepository.findOne({
    where: { id: id },
    relations: ["genres", "rating", "comments"],
  });

  if (!movie) {
    throw new AppError("Movie not found", 404);
  }

  return movie;
};

export default getMovieByIDSVC;
