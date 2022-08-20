import { Request, Response } from "express";
import { Rating, Movie, User } from "../../entities";
import { AppError } from "../../errors";
import { ratingRepository } from "../../repositories";

const rateSVC = async (rating_id: string, user: User, type: string) => {
  const rating = await ratingRepository.findOne({
    where: { id: rating_id },
    relations: ["users"],
  });

  if (!rating) throw new AppError("Rating not found", 404);

  if (rating.users.some((user) => user.id === user.id)) {
    throw new AppError("User already rated", 400);
  }

  if (type === "like") rating.likes++;
  if (type === "dislike") rating.dislikes++;

  rating.users.push(user);
  await ratingRepository.save(rating);

  return {
    message: "Rating counted!",
  };
};

export default rateSVC;
