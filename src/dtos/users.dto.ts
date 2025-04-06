import { body } from "express-validator";

export const registerUserDTO = [
  body("email").isEmail().withMessage("Must Be a Valid Email"),
  body("password")
    .notEmpty()
    .isLength({ min: 6 })
    .withMessage("Password Must Be 6 Letter Long"),
];

export const loginUserDTO = [
  body("email").optional().isEmail().withMessage("Must Be a Valid Email"),
  body("username")
    .optional()
    .notEmpty()
    .withMessage("Must Be a Valid Username"),
  body("password")
    .notEmpty()
    .isLength({ min: 6 })
    .withMessage("Password Must Be 6 Letter Long"),
];
