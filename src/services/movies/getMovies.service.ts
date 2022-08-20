import { movieRepository } from "../../repositories";

const getMoviesSVC = async () => {
  return await movieRepository.find({
    relations: ["genres", "rating", "comments"],
  });
};

export default getMoviesSVC;
