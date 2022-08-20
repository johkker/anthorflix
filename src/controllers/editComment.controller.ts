import { Request, Response } from "express";

import { editCommentSVC } from "../services";

const editCommentCTRL = async (req: Request, res: Response) => {
  const { commentId } = req.params;
  const message = await editCommentSVC(
    commentId,
    req.newInput,
    req.user,
    req.adm
  );
  return res.status(204).json(message);
};

export default editCommentCTRL;
