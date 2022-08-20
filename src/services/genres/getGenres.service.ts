import { genreRepository } from "../../repositories";
import { AppError } from "../../errors";

const getGenresSVC = async () => {
  const genres = await genreRepository.find();
  if (!genres) {
    throw new AppError("Genres not found. Contact an admin.", 400);
  }
  return genres;
};

export default getGenresSVC;
