import bcryptjs from "bcryptjs";
import User from "../database/models/User";
import { ServiceResponse } from "../constants/serviceResponse";
const slatRound = process.env.saltNumber
  ? parseInt(process.env.saltNumber)
  : 10;

export const registerUserService = async (
  email: string,
  password: string
): Promise<ServiceResponse> => {
  const pass = bcryptjs.hashSync(password, slatRound);

  const data = await User.create({
    email,
    password: pass,
  });

  return {
    status: 200,
    message: "User is registered Successfully",
    body: data,
  };
};

export const loginUserService = async (
  username: string | undefined,
  email: string | undefined,
  password: string
): Promise<ServiceResponse> => {
  let userFound;
  if (username === undefined)
    userFound = await User.findOne({
      where: { email },
    });
  else {
    userFound = await User.findOne({
      where: { username },
    });
  }
  if (userFound === null) {
    return {
      status: 400,
      message: "User Not Found",
    };
  }
  const hashedPassword = userFound.password === null ? "" : userFound.password;
  if (!bcryptjs.compareSync(password, hashedPassword)) {
    return {
      status: 400,
      message: "Wrong Password",
    };
  }

  return {
    status: 200,
    message: "User Logged In",
    body: userFound,
  };
};
