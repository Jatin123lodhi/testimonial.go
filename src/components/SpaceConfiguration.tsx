import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import LivePreviewComponent from "./LivePreviewComponent";
import SpaceCreationForm from "./SpaceCreationForm";
import { defaultQuestions } from "@/constants";
import { SpaceSchemaType } from "@/types";
import { spaceSchema } from "@/schema";
import { X } from "lucide-react";

interface ISpaceConfigurationProps {
  spaceConfigurationType: string;
  onCrossClick: ()=>void;
  onSubmit: ()=>void;
}

const SpaceConfiguration = (props: ISpaceConfigurationProps) => {
  const { spaceConfigurationType, onCrossClick, onSubmit } = props;

  const form = useForm<SpaceSchemaType>({
    resolver: zodResolver(spaceSchema),
    defaultValues: {
      spaceName: "",
      spaceLogo: "",
      headerTitle: "",
      message: "",
      questions: defaultQuestions,
      collectionType: "Text and Video",
      rating: false,
    },
  });

  const { watch } = form;
  const headerTitle = watch("headerTitle");
  const message = watch("message");
  const questions = watch("questions");
  const collectionType = watch("collectionType");
  const spaceLogo = watch("spaceLogo");

  return (
    <div className="m-[4%]">
      {/* top cancel btn  */}
      <div className="flex justify-end items-center">
        <button
          type="button"
          className="text-gray-600 font-semibold mb-6"
          // onClick={() => setCurrentViewState("initial")}
          onClick={onCrossClick}
        >
          <X/>
        </button>
      </div>

      {/* main left and right sections  */}
      <div className="flex flex-col items-center gap-8 lg:flex-row justify-center lg:items-start  lg:gap-16">
        {/* left section  */}
        <LivePreviewComponent
          spaceLogo={spaceLogo}
          headerTitle={headerTitle}
          message={message}
          questions={questions}
          collectionType={collectionType}
        />

        {/* right section  */}
        <div className="w-full py-8 px-4">
          <div className="mb-8">
            {spaceConfigurationType === "new" && (
              <>
                <div className="text-3xl font-semibold text-center">
                  Create a new Space
                </div>
                <div className="text-center text-gray-600 mt-4">
                  After the Space is created, it will generate a dedicated page
                  for collecting testimonials.
                </div>
              </>
            )}
            {spaceConfigurationType === "edit" && (
              <div className="text-3xl font-semibold text-center">
                Edit Space
              </div>
            )}
          </div>
          {/* form  */}
          <SpaceCreationForm
            form={form}
            spaceConfigurationType={spaceConfigurationType}
            onSubmit={onSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default SpaceConfiguration;
