import { Cog } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface SpaceCardProps {
  spaceLogo: string;
  spaceName: string;
  videosCount: number;
  textCount: number;
}

export const SpaceCard = (props: SpaceCardProps) => {
  const { spaceLogo, spaceName, videosCount, textCount } = props;
  const router = useRouter();
  return (
    <div
      onClick={() => {
        console.log("navigate");
        router.push('/products/abc')
      }}
      className="cursor-pointer hover:shadow-lg flex my-4 bg-slate-200 rounded-md"
    >
      <div className="">
        <Image
          src={spaceLogo?.length > 0 ? spaceLogo : "/logo.svg"}
          width={100}
          height={100}
          alt="spaceImage"
        />
      </div>
      <div className="p-2 flex flex-grow justify-between items-center">
        {/* left  */}
        <div className=" flex-grow">
          <div className="py-2 font-semibold">
            {spaceName.length > 0 ? spaceName : "My Space"}
          </div>
          <div className="flex justify-between">
            <div className=" flex-grow text-gray-600">Video: {videosCount}</div>
            <div className=" flex-grow text-gray-600">Text: {textCount}</div>
          </div>
        </div>
        {/* right  */}
        <div
          className=" cursor-pointer"
          onClick={(e) => {
            console.log("hihi");
            e.stopPropagation();
          }}
        >
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Cog />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mr-12">
              <DropdownMenuRadioGroup>
                <DropdownMenuRadioItem value={"Delete"}>
                  Delete
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value={"Edit"}>
                  Edit
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};
