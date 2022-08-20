import { AppError } from "../../errors";
import { genreRepository } from "../../repositories";

const deleteGenreSVC = async (id: string, adm: boolean) => {
  if (!adm) throw new AppError("Not Authorized", 401);
  const genre = await genreRepository.findOne({ where: { id: id } });
  if (!genre) {
    throw new AppError("Genre not found", 400);
  }
  await genreRepository.remove(genre);

  return {
    message: `The genre ${genre.name} was succesfully deleted`,
  };
};

export default deleteGenreSVC;
