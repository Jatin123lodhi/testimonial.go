import { FormSchemaType, questionSchemaType } from "@/types";
import Image from "next/image";
import React from "react";
import { UseFormReturn } from "react-hook-form";

interface ILivePreviewComponentProps {
  spaceLogo: string;
  headerTitle: string;
  message: string;
  questions: questionSchemaType[];
  collectionType: string;
}
const LivePreviewComponent = (props: ILivePreviewComponentProps) => {
  const { headerTitle, message, questions, collectionType, spaceLogo } = props;

  return (
    <div className=" ">
      <div className="relative  rounded-md  border border-gray-300 shadow-md p-4 md:p-6 md:min-h-[600px] md:w-[430px]">
        <div className="px-4 rounded-full py-1 absolute -top-3 left-8 text-sm  font-medium bg-emerald-300 text-emerald-800">
          Live Preview - Testimonial Page
        </div>
        <div className="flex justify-center mt-8 ">
          <Image
            alt="logo"
            src={spaceLogo || "/logo.svg"}
            width={100}
            height={100}
            className="rounded-md"
          />
        </div>
        <div className="text-center text-3xl font-semibold text-gray-700 my-4">
          {headerTitle || "Header goes here..."}
        </div>
        <div className="text-center my-4 text-lg">
          {message || "Your custom message goes here..."}
        </div>
        <div className="p-4">
          <div className="text-gray-700 text-xl  font-semibold">QUESTIONS</div>
          <div className="bg-indigo-700 w-10 border-2 my-2 border-indigo-500"></div>
          <div className="text-gray-600 mt-4 list-disc">
            {questions?.map((question) => {
              return <li key={question.id}>{question.text}</li>;
            })}
          </div>
        </div>

        <div className="flex flex-col gap-4 my-8">
          {(collectionType === "Text and Video" ||
            collectionType === "Only Video") && (
            <button className="bg-indigo-600 text-white p-2">
              Record a video
            </button>
          )}
          {(collectionType === "Text and Video" ||
            collectionType === "Only Text") && (
            <button className="bg-gray-800 text-white p-2">Send in text</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default LivePreviewComponent;
