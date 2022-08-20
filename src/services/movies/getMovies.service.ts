import { movieRepository } from "../../repositories";

const getMoviesSVC = async () => {
  return await movieRepository.find();
};

export default getMoviesSVC;
