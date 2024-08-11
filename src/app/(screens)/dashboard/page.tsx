"use client";
import OverviewCards from "@/components/OverviewCards";
import React, { useState } from "react";
import { SpaceCard } from "@/components/SpaceCard";
import SpaceSuccessCard from "@/components/SpaceSuccessCard";
import SpaceConfiguration from "@/components/SpaceConfiguration";
import { ViewState } from "@/types";

const Dashboard = () => {
  const [currentViewState, setCurrentViewState] =
    useState<ViewState>("initial");

  return (
    <div className="px-4 mb-12">
      {/* initial dashboard view */}
      {currentViewState === "initial" && (
        <div>
          <div className="text-3xl font-semibold mt-[5%]">Overview</div>
          <div className="sm:flex sm:flex-row sm:gap-5 w-full">
          <OverviewCards title="Videos" count={0} />
          <OverviewCards title="Video credits" count={0} />
          <OverviewCards title="Plan" description="Free plan" />
          </div>

          <div className="mt-12 flex justify-between items-center">
            <div className="text-3xl font-semibold">Spaces</div>
            <div>
              <button
                onClick={() => setCurrentViewState("creating")}
                className="bg-indigo-700 text-base w-52 p-2  text-white"
              >
                + Create a new space
              </button>
            </div>
          </div>
          {/* list of created space  */}
          <div className="mt-8 sm:grid sm:grid-cols-3 sm:gap-5">
            {new Array(2).fill("").map((item, idx) => {
              return (
                <SpaceCard
                  key={idx}
                  spaceLogo=""
                  spaceName=""
                  textCount={0}
                  videosCount={0}
                />
              );
            })}
          </div>
        </div>
      )}

      {/* space creation view  */}
      {currentViewState === "creating" && (
        <SpaceConfiguration
          onCrossClick={() => setCurrentViewState("initial")}
          spaceConfigurationType="new"
          onSubmit={() => setCurrentViewState("created")}
        />
      )}

      {/* when new space created  */}
      {currentViewState === "created" && (
        <SpaceSuccessCard onClose={() => setCurrentViewState("initial")} />
      )}
    </div>
  );
};

export default Dashboard;
