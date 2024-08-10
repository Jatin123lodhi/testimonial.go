import React from "react";

interface OverviewCardsProps{
    title: string,
    count?: string | number,
    description?: string
}
const OverviewCards = (props: OverviewCardsProps) => {
  const {title,count,description} = props;
  return (
    <div className=" border p-4 my-4 rounded-md bg-slate-100">
      <div>{title}</div>
      <div className="font-semibold text-xl">{count}</div>
      <div className="font-semibold text-lg">{description}</div>
    </div>
  );
};

export default OverviewCards;
