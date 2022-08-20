import createUserSVC from "./users/createUser.service";
import userLoginSVC from "./users/userLogin.service";
import getUserByIDSVC from "./users/getUserByID.service";
import getUsersSVC from "./users/getUsers.service";
import deleteUserSVC from "./users/deleteUser.service";
import updateUserSVC from "./users/updateUser.service";

import createMovieSVC from "./movies/createMovie.service";
import updateMovieSVC from "./movies/updateMovie.service";
import deleteMovieSVC from "./movies/deleteMovie.service";
import getMoviesSVC from "./movies/getMovies.service";
import getMovieByIDSVC from "./movies/getMovieByID.service";

import createGenreSVC from "./genres/createGenre.service";
import deleteGenreSVC from "./genres/deleteGenre.service";

export {
  createUserSVC,
  userLoginSVC,
  createMovieSVC,
  createGenreSVC,
  updateMovieSVC,
  deleteMovieSVC,
  getMoviesSVC,
  getMovieByIDSVC,
  getUserByIDSVC,
  getUsersSVC,
  deleteGenreSVC,
  deleteUserSVC,
  updateUserSVC,
};
