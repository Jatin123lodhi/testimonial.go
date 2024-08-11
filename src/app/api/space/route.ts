import dbConnect from "@/lib/dbConnect";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/options";
import { spaceSchema } from "@/schema";
import { Space } from "@/model/Space";
import { errorResponse, successResponse } from "@/lib/utils";

export const POST = async (request: Request) => {
  await dbConnect();
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return Response.json({ message: "Unauthorized" }, { status: 401 });
    }

    const payload = await request.json();
    const result = spaceSchema.safeParse(payload);
    if (!result.success) {
      console.log(result.error);
      return Response.json(
        { message: "Validation failed", errors: result.error },
        { status: 400 }
      );
    }

    // save into the database
    const newSpace = new Space(payload);
    await newSpace.save();
    return successResponse(
      true,
      "New space Created successfully",
      200,
      newSpace
    );
  } catch (error) {
    console.error(error);
    if (error instanceof Error) {
        console.error('Error saving new space:', error.message);
        return errorResponse(false,error.message,500);
    }

    // Handle unexpected error types
    console.error('Unexpected error:', error);
    return errorResponse(false,'Internal Server Error : '+ String(error),500);
  }
};

export const GET = async (request: Request) => {
  await dbConnect();

  const spacesWithTestimonialCounts = await Space.aggregate([
    {
      $unwind: {
        path: "$testimonials",
        preserveNullAndEmptyArrays: true, // Keep spaces with no testimonials
      },
    },
    {
      $group: {
        _id: "$_id", // Group by Space ID
        spaceName: { $first: "$spaceName" }, // Preserve spaceName
        spaceLogo: { $first: "$spaceLogo" }, // Preserve spaceLogo
        textCount: {
          $sum: {
            $cond: [{ $eq: ["$testimonials.contentType", "Text"] }, 1, 0],
          },
        },
        videoCount: {
          $sum: {
            $cond: [{ $eq: ["$testimonials.contentType", "Video"] }, 1, 0],
          },
        },
      },
    },
    {
      $project: {
        _id: 1,
        spaceName: 1,
        spaceLogo: 1,
        textCount: 1,
        videoCount: 1,
      },
    },
  ]);
  
  
  console.log(spacesWithTestimonialCounts, 'spaceList');
  return successResponse(true,'Spaces reterived Successfully',200,spacesWithTestimonialCounts)
}