import { AllowedStatus, ApiResponse, ErrorDetail } from "@/types";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { SafeParseError } from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function successResponse(
  success: boolean,
  message: string,
  status: AllowedStatus,
  data?: object
) {
  const responseObj: ApiResponse = {
    success,
    message,
    data,
  };
  return Response.json(responseObj, { status });
}
export function errorResponse(
  success: boolean,
  message: string,
  status: AllowedStatus,
  errors?: ErrorDetail[]
) {
  const responseObj: ApiResponse = {
    success,
    message,
    errors,
  };
  return Response.json(responseObj, { status });
}

export function getValidationErrorMessages<T>(parsedResult: SafeParseError<T>): ErrorDetail[] {
  const errors = parsedResult.error.errors.map((err) => ({
    field: err.path.join("."),
    message: err.message,
  }));

  return errors;
}
