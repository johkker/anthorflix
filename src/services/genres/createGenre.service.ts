import { Genre } from "../../entities";
import { genreRepository } from "../../repositories";
import { IGenreRegister } from "../../interfaces";
import { AppError } from "../../errors";

const createGenreSVC = async (data: IGenreRegister) => {
  const { name } = data;

  const existingGenre = await genreRepository.findOne({
    where: { name: name },
  });

  if (existingGenre) {
    throw new AppError("Genre already exists", 400);
  }

  const genre = new Genre();
  genre.name = name;

  genreRepository.create(genre);
  await genreRepository.save(genre);

  return {
    name: genre.name,
    id: genre.id,
  };
};

export default createGenreSVC;
