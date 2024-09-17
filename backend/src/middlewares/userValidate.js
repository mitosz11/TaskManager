import { HTTP_STATUS_CODES } from "../constants/httpStatusCodes.js";
import HttpError from "../utils/HttpError.js";

export default (req, res, next) => {

  if (req.user.id != req.params.userId) {
    next(new HttpError("Request denied", HTTP_STATUS_CODES.UNAUTHORIZED));
  }

  next();
};
