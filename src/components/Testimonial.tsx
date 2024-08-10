import React from "react";
import ToolTipComp from "./ToolTipComp";
import { CircleCheck, Heart, StarIcon } from "lucide-react";
import { Button } from "./ui/button";
import { EmbedTestimonialDialog } from "./EmbedTestimonialDialog";
interface ITestimonialProps {
  data: {
    name: string;
    email: string;
    submittedAt: string;
    rating?: number;
    isRatingPresent: boolean;
    type: string;
    text?: string;
  };
}

const Testimonial = (props: ITestimonialProps) => {
  const {
    name,
    email,
    submittedAt,
    rating = 0,
    isRatingPresent,
    type,
    text = "Video",
  } = props.data;
  return (
    <div className="bg-gray-100 rounded-md hover:shadow-lg p-4 border flex flex-col gap-2 lg:p-8">
      <div className=" flex justify-between items-center">
        <div className="relative">
          <ToolTipComp content="User gave the permission">
            <div className="absolute -top-1 -left-2">
              <CircleCheck size={16} color="green" className="cursor-pointer" />
            </div>
          </ToolTipComp>
          <div className="rounded-full bg-yellow-200 text-red-400 font-semibold p-1 px-3 text-sm">
            {type}
          </div>
        </div>
        <div>
          <Heart className="stroke-red-400 cursor-pointer" />
        </div>
      </div>
      {/* ratings  */}
      {isRatingPresent && (
        <div className=" flex gap-1">
          {new Array(5).fill("").map((val, idx) => {
            return (
              <StarIcon
                key={idx}
                stroke="0px"
                className={`${
                  idx + 1 <= rating ? "fill-yellow-400" : "fill-gray-300"
                } `}
              />
            );
          })}
        </div>
      )}
      {/* text  */}
      {type === "Text" && <div className="border border-gray-400">{text}</div>}
      {/* video  */}
      {type === "Video" && (
        <div className="border border-gray-400 w-[150px] h-[100px]">Video</div>
      )}

      {/* info */}
      <div className="flex flex-col gap-2 ">
        <div>
          <div className="text-gray-500 font-semibold text-sm">Name</div>
          <div className="text-sm">{name}</div>
        </div>
        <div>
          <div className="text-gray-500 font-semibold text-sm">Email</div>
          <div className="text-sm">{email}</div>
        </div>
        <div>
          <div className="text-gray-500 font-semibold text-sm">
            Submitted At
          </div>
          <div className="text-sm">{submittedAt}</div>
        </div>
        <div>
          <EmbedTestimonialDialog/>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
