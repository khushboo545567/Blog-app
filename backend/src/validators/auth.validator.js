import { verifyEmail } from "../controllers/verifyEmail.controller";

const registerUserValidator = () => {
  return [
    body("userName")
      .trim()
      .notEmpty()
      .withMessgae("username is required !")
      .isLength({ min: 3 })
      .withMessgae("user name must be atleast of 3 character"),
    body("email")
      .trim()
      .notEmpty()
      .withMessgae("Email is required")
      .isEmail()
      .withMessgae("Email is invalid"),

    body("password")
      .notEmpty()
      .withMessgae("password is required")
      .isLength({ min: 6 })
      .withMessgae("passowrd should be of min 6 char"),

    body("bio")
      .isLength({ min: 5 })
      .withMessgae("bio should be of minimum 5 character long "),
  ];
};

const loginUserValidator = () => {
  return [
    body("email").isEmail().withMessgae("Email is invalid"),
    body("password")
      .notEmpty()
      .withMessgae("password is required")
      .isLength({ min: 6 })
      .withMessgae("passowrd should be of min 6 char"),
  ];
};
export { registerUserValidator, loginUserValidator };
