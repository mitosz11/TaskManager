import HttpError from "../utils/HttpError.js";
import bcrypt from "bcrypt";
import prisma from "../db/prisma.js";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../constants/config.js";
import { HTTP_STATUS_CODES } from "../constants/httpStatusCodes.js";

const authService = {
  register: async ({ email, password, firstName, lastName }) => {
    try {
      const dbUser = await prisma.user.findUnique({
        where: { email },
      });

      if (dbUser) {
        throw new HttpError("Email already in use", HTTP_STATUS_CODES.CONFLICT);
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = await prisma.user.create({
        data: {
          email,
          password: hashedPassword,
          firstName,
          lastName,
        },
      });

      return {
        message: "User registered successfully",
        id: newUser.id,
        email: newUser.email,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
      };
    } catch (err) {
      if (err instanceof HttpError) {
        throw err;
      }

      console.error("Error in register service:", err.message);
      throw new HttpError(
        "An error occurred, try again later",
        HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR
      );
    }
  },

  login: async ({ email, password }) => {
    try {
      const dbUser = await prisma.user.findUnique({
        where: { email },
      });

      if (!dbUser) {
        throw new HttpError(
          "Invalid email/password.",
          HTTP_STATUS_CODES.BAD_REQUEST
        );
      }

      const passwordValid = await bcrypt.compare(password, dbUser.password);
      if (passwordValid) {
        const token = jwt.sign(
          {
            id: dbUser.id,
            email,
            firstName: dbUser.firstName,
            lastName: dbUser.lastName,
          },
          JWT_SECRET,
          { expiresIn: "24h" }
        );
        return { message: "User logged in successfully", token };
      } else {
        throw new HttpError(
          "Invalid email/password",
          HTTP_STATUS_CODES.BAD_REQUEST
        );
      }
    } catch (err) {
      if (err instanceof HttpError) {
        throw err;
      }
      throw new HttpError(
        "Something went wrong.",
        HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR
      );
    }
  },
};

export default authService;
