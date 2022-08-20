import { User } from "../../entities";
import { AppError } from "../../errors";
import { ICommentCreate } from "../../interfaces";
import { commentRepository } from "../../repositories";

const editCommentSVC = async (
  comment_id: string,
  data: ICommentCreate,
  user: User,
  adm: boolean
) => {
  const comment = await commentRepository.findOne({
    where: { id: comment_id },
    relations: ["movie", "user"],
  });

  if (!comment) throw new AppError("Comment not found", 404);

  if (comment.user.id !== user.id && !adm) {
    throw new AppError("Not Authorized", 401);
  }

  comment.content = data.text ? data.text : comment.content;

  await commentRepository.save(comment);

  return {
    message: "Comment content succesfully edited",
  };
};

export default editCommentSVC;
