import { HTTP_STATUS_CODES } from "../constants/httpStatusCodes.js";
import authService from "../services/authService.js";

const authController = {
  register: async (req, res, next) => {
    try {
      const message = await authService.register(req.body);
      res.status(HTTP_STATUS_CODES.CREATED).json(message);
    } catch (err) {
      next(err);
    }
  },

  login: async (req, res, next) => {
    try {
      const token = await authService.login(req.body);
      res.status(HTTP_STATUS_CODES.ACCEPTED).json(token);
    } catch (err) {
      next(err);
    }
  },
  confirm: async (req, res, next) => {
    try {
      const response = await authService.confirm(req.params.token);
      res.status(HTTP_STATUS_CODES.ACCEPTED).json(response);
    } catch (err) {
      next(err);
    }
  },
};

export default authController;
