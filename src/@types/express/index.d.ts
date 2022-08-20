import * as express from "express";
import { jwt } from "jsonwebtoken";
import { Genre, Movie, User } from "../../entities";

declare global {
  namespace Express {
    interface Request {
      newInput: any;
      decoded: string | jwt.JwtPayload | undefined;
      adm: boolean;
      user: User;
      movie: Movie;
      genre: Genre;
      self: boolean;
    }
  }
}
