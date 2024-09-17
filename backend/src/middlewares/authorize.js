import { JWT_SECRET } from "../constants/config.js";
import HttpError from "../utils/HttpError.js";
import jwt from "jsonwebtoken";
import { HTTP_STATUS_CODES } from "../constants/httpStatusCodes.js";

export default (req, res, next) => {
  const bearerToken = req.headers.authorization;

  if (!bearerToken)
    return next(
      new HttpError("Bearer token is missing", HTTP_STATUS_CODES.UNAUTHORIZED)
    );

  const jwtToken = bearerToken.slice(7);

  jwt.verify(jwtToken, JWT_SECRET, (err, decoded) => {
    if (err)
      return next(
        new HttpError("Invalid token", HTTP_STATUS_CODES.UNAUTHORIZED)
      );
    req.user = decoded;
    next();
  });
};
