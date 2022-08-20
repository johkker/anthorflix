import { User, Comment } from "../../entities";
import { ICommentCreate } from "../../interfaces";
import { movieRepository, commentRepository } from "../../repositories";

const addCommentSVC = async (
  movie_id: string,
  data: ICommentCreate,
  user: User
) => {
  const movie = await movieRepository.findOne({ where: { id: movie_id } });
  if (!movie) throw new Error("Movie not found");

  const comment = new Comment();
  comment.movie = movie;
  comment.user = user;
  comment.content = data.text;

  commentRepository.create(comment);
  await commentRepository.save(comment);

  return {
    message: "Comment added successfully",
  };
};

export default addCommentSVC;
