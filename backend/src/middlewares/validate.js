import { HTTP_STATUS_CODES } from "../constants/httpStatusCodes.js";
import HttpError from "../utils/HttpError.js";

const yupValidate = (schema) => async (req, res, next) => {
  const body = req.body;

  try {
    await schema.validate(body);
    next();
  } catch (err) {
    next(new HttpError(err.errors, HTTP_STATUS_CODES.BAD_REQUEST));
  }
};

export default yupValidate;
