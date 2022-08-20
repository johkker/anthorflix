import { Request, Response } from "express";

import { deleteCommentSVC } from "../services";

const deleteCommentCTRL = async (req: Request, res: Response) => {
  const { commentId } = req.params;
  const message = await deleteCommentSVC(commentId, req.user, req.adm);
  return res.status(204).json(message);
};

export default deleteCommentCTRL;
