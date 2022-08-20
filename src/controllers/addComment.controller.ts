import { Request, Response } from "express";
import { addCommentSVC } from "../services";

const addCommentCTRL = async (req: Request, res: Response) => {
  const { id } = req.params;
  const message = await addCommentSVC(id, req.newInput, req.user);
  return res.status(201).json(message);
};

export default addCommentCTRL;
