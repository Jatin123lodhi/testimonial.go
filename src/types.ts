import { z } from "zod";
import { formSchema, questionSchema } from "./schema";

export type FormSchemaType = z.infer<typeof formSchema>;
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
