import { z } from "zod";
import { collectionTypeValues } from "./constants";

export const questionSchema = z.object({
  id: z.number(),
  text: z.string(),
});

export const formSchema = z.object({
  spaceName: z.string().min(1, {
    message: "Required",
  }),
  spaceLogo: z.string().min(1, { message: "Required" }),
  headerTitle: z.string().min(1, {
    message: "Required",
  }),
  message: z.string().min(1, {
    message: "Required",
  }),
  questions: z.array(questionSchema),
  collectionType: z.enum(collectionTypeValues),
  rating: z.boolean(),
});

export const signupSchema = z.object({
  username: z.string().min(4),
  email: z.string().email(),
  password: z.string().min(6),
});

export const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});
