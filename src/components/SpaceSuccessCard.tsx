import Image from 'next/image'
import React from 'react'

interface ISpaceSuccessCardProps {
  onClose:()=>void
}
const SpaceSuccessCard = (props:ISpaceSuccessCardProps) => {
  const {
    onClose
  } = props
    const spaceName = 'hihihiSpace'
  return (
    <div className="mt-8 flex justify-center w-full">
          <div className="relative  rounded-md  border border-gray-300 shadow-md p-4 md:p-6  md:w-[400px]">
            <div className="flex justify-center mt-8 ">
              <Image
                alt="gif"
                src={"/giphy.gif"}
                width={100}
                height={100}
                className="rounded-md w-full h-full "
              />
            </div>
            <div className="text-center  font-semibold text-gray-700 my-2">
              {`Added ${spaceName} successfully 🥳`}
            </div>
            <div className="text-center my-2 text-sm text-gray-500">
              {"Here is the link for your customers"}
            </div>
            <div className="text-center my-2 text-sm text-indigo-600">
              {`https://testimonial.to/${spaceName}`}
            </div>

            <div className="flex flex-col gap-4 my-4">
              <button
                onClick={onClose}
                className="bg-indigo-600 text-white p-2 rounded-md"

              >
                Close
              </button>
            </div>
          </div>
        </div>
  )
}

export default SpaceSuccessCard