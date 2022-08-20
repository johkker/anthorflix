import { Genre, Comment, Rating } from "../entities";

export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUserRegister extends IUserLogin {
  name: string;
  isAdm: boolean;
}

export interface IUserUpdate {
  email?: string;
  password?: string;
  name?: string;
  isAdm?: boolean;
}

export interface IMovieCreate {
  title: string;
  overview: string;
  releaseDate: string;
  runtime: number;
  genres?: Genre[];
}

export interface IMovieUpdate {
  title?: string;
  overview?: string;
  releaseDate?: string;
  runtime?: number;
  genres?: Genre[];
}

export interface ICommentCreate {
  text: string;
}

export interface IRatingCreate {
  value: number;
}

export interface IGenreRegister {
  name: string;
}
