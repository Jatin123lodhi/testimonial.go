import { z } from "zod";
import { spaceSchema, questionSchema, signInSchema, signupSchema } from "./schema";

export type SpaceSchemaType = z.infer<typeof spaceSchema>;
export type questionSchemaType = z.infer<typeof questionSchema>;
export type ViewState = "initial" | "creating" | "created" | "edit";
export type AllowedStatus = 200 | 201 | 400 | 401 | 403 | 404 | 500;

export type ErrorDetail = {
  field: string;
  message: string;
};

 
export interface ApiResponse {
  success: boolean;
  message: string;
  data?: object;
  errors?: ErrorDetail[]  
}

export type signInFormType = z.infer<typeof signInSchema>
export type signupFormType = z.infer<typeof signupSchema>