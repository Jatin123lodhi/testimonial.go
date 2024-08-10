import dbConnect from "@/lib/dbConnect";
import {
  errorResponse,
  getValidationErrorMessages,
  succesResponse,
} from "@/lib/utils";
import UserModel from "@/model/User";
import { signupSchema } from "@/schema";
import bcrypt from "bcryptjs";

export const POST = async (request: Request) => {
  await dbConnect();
  try {
    const { username, email, password } = await request.json();
    const parsedResult = signupSchema.safeParse({ email, password });

    if (!parsedResult.success) {
      const errorMessages = getValidationErrorMessages(parsedResult);
      return errorResponse(false, "Validation Failed", 400, errorMessages);
    }

    //check if the user with this email exits or not
    const user = await UserModel.findOne({
      $or: [{ username }, { email }],
    });
    console.log(user, " hihi user");
    if (user) {
      return errorResponse(
        false,
        "User already exists with this email",
        400,
        []
      );
    }

    // let's first create a user
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new UserModel({
      username,
      email,
      password: hashedPassword,
    });
    await newUser.save();

    return succesResponse(true, "User created Successfully", 400, newUser);
  } catch (error) {
    console.error(`Error registering user ${error}`);
    return errorResponse(false, "Error registering user", 500);
  }
};
