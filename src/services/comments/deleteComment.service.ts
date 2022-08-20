import { User } from "../../entities";
import { AppError } from "../../errors";
import { commentRepository } from "../../repositories";

const deleteCommentSVC = async (
  comment_id: string,
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

  await commentRepository.delete(comment.id);

  return {
    message: "Comment succesfully removed.",
  };
};

export default deleteCommentSVC;
