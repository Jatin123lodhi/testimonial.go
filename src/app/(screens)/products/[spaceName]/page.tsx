"use client";
import SpaceConfiguration from "@/components/SpaceConfiguration";
import Testimonial from "@/components/Testimonial";
import { Button } from "@/components/ui/button";
import { ViewState } from "@/types";

import {
  ChevronDownIcon,
  CodeXml,
  Dot,
  FilePenIcon,
  Heart,
  LucideLink,
  MessageSquareText,
  Pen,
  Star,
  Tags,
  Video,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const testimonialData = {
  name: "Ritik",
  email: "jatin@mailinator.com",
  submittedAt: "Jul 18, 2024, 6:25:19 AM",
  rating: 4,
  isRatingPresent: true,
  type: "Video",
  text: "This is the best course I have seen so far, I love to share it helped me a lot, keep doing this Harkirat Bhai. 1000X dev cohort is the next best you will do I know.",
};

const SpacePage = () => {
  const [currentViewState, setCurrentViewState] =
    useState<ViewState>("initial");
  return (
    <>
      {currentViewState === "initial" && (
        <div>
          {/* card  */}
          <div className="py-4 px-2 lg:px-4 bg-gray-100 flex flex-col gap-4 lg:flex-row lg:justify-between lg:items-center">
            <div className="flex justify-center items-center gap-4">
              <div className="border border-gray-400">
                <Image src={""} width={100} height={100} alt="space-logo" />
              </div>
              <div className=" ">
                <div className="flex items-center gap-2">
                  <div className="font-semibold text-lg">Space Name</div>
                  <ChevronDownIcon />
                </div>
                <div className="text-sm text-gray-700">
                  Space public URL:{" "}
                  <Link
                    className="underline"
                    href={`https://testimonial.to/spaceName`}
                  >
                    https://testimonial.to/spaceName
                  </Link>
                </div>
              </div>
            </div>
            <div className="  flex justify-center gap-4 sm:gap-8">
              <div>
                <div className="flex gap-2 items-center">
                  <Video /> Video credits
                </div>
                <div>2</div>
              </div>
              <div>
                <div className="flex gap-2 items-center">
                  <MessageSquareText /> Text credits
                </div>
                <div>10</div>
              </div>
              <div>
                <Button
                  onClick={() => setCurrentViewState("edit")}
                  variant={"outline"}
                >
                  <Pen width={14} className="mr-2" /> Edit Space
                </Button>
              </div>
            </div>
          </div>
          <div className=" lg:flex">
            <div className=" lg:min-w-[300px]">
              {/* inbox section  */}
              <div className=" p-4">
                <div className="text-gray-500 font-bold p-2">INBOX</div>
                {/* list of options  */}
                <div className=" flex flex-col gap">
                  <div className="hover:bg-gray-300 rounded cursor-pointer  flex items-center">
                    <Dot size={40} className=" " /> All
                  </div>
                  <div className="hover:bg-gray-300 rounded cursor-pointer  flex items-center">
                    <Dot size={40} className=" " /> Video
                  </div>
                  <div className="hover:bg-gray-300 rounded cursor-pointer  flex items-center">
                    <Dot size={40} className=" " /> Text
                  </div>
                </div>
              </div>

              {/* Embeds and metrics section  */}
              <div className="  p-4">
                <div className="text-gray-500 font-bold p-2">
                  EMBEDS & METRICS
                </div>
                {/* list of options  */}
                <div className=" flex flex-col gap-1">
                  <div className="hover:bg-gray-300 rounded cursor-pointer p-2 flex items-center gap-2">
                    <Heart /> Wall of Love
                  </div>
                  <div className="hover:bg-gray-300 rounded cursor-pointer p-2 flex items-center gap-2">
                    <CodeXml /> Single testimonial{" "}
                  </div>
                  <div className="hover:bg-gray-300 rounded cursor-pointer p-2 flex items-center gap-2">
                    <Star /> Badge
                  </div>
                </div>
              </div>

              {/* LINKS  */}
              <div className="  p-4">
                <div className="text-gray-500 font-bold p-2">LINKS</div>
                {/* list of options  */}
                <div className=" flex flex-col gap-1">
                  <div className="hover:bg-gray-300 rounded cursor-pointer p-2 flex items-center gap-2">
                    <LucideLink /> Public landing page
                  </div>
                  <div className="hover:bg-gray-300 rounded cursor-pointer p-2 flex items-center gap-2">
                    <LucideLink /> Wall of Love page
                  </div>
                </div>
              </div>

              {/* Space Settings */}
              <div className="p-4">
                <div className="text-gray-500 font-bold p-2">
                  SPACE SETTINGS
                </div>
                {/* list of options  */}
                <div className=" flex flex-col gap-1">
                  <div
                    onClick={() => setCurrentViewState("edit")}
                    className="hover:bg-gray-300 rounded cursor-pointer p-2 flex items-center gap-2"
                  >
                    <FilePenIcon /> Edit the space
                  </div>
                  <div className="hover:bg-gray-300 rounded cursor-pointer p-2 flex items-center gap-2">
                    <Tags /> Manage tags
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 lg:p-8 lg:flex-grow flex flex-col gap-4">
              <Testimonial data={testimonialData} />
              <Testimonial data={testimonialData} />
            </div>
          </div>
        </div>
      )}
      {currentViewState === "edit" && (
        <SpaceConfiguration
          spaceConfigurationType="edit"
          onCrossClick={() => setCurrentViewState("initial")}
          onSubmit={()=>setCurrentViewState("initial")}
        />
      )}
    </>
  );
};

export default SpacePage;
