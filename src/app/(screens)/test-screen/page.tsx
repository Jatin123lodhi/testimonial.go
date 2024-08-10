"use client";
import React, { useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import FileInput from "@/components/FileInput";

const TestScreen = () => {
  const [imageUrl, setImageUrl] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e?.target?.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleRemove = () => {
    setImageUrl("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };
  return (
    <div className="p-8">
      <FileInput
        imageUrl={imageUrl}
        onChange={handleFileChange}
        onRemove={handleRemove}
      />
      {/* <div className="flex items-center  gap-6">
        {imageUrl ? (
          <Image
            src={imageUrl}
            width={12}
            height={12}
            alt="logo"
            className="w-12 h-12 object-cover rounded-full bg-gray-200 flex-shrink-0"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-gray-200 flex-shrink-0"></div>
        )}
        <Button
          onClick={() => fileInputRef.current?.click()}
          variant={"outline"}
        >
          Change
          <Input
            ref={fileInputRef}
            onChange={handleFileChange}
            className="cursor-pointer hidden"
            type="file"
            placeholder="Change"
            accept=".jpg,.jpeg,.png,.gif,.bmp,.svg"
          />
        </Button>
        {imageUrl && (
          <Button
            variant={"outline"}
            type="button"
            className="text-sm text-gray-600"
            onClick={handleRemove}
          >
            Remove
          </Button>
        )}
      </div> */}
    </div>
  );
};

export default TestScreen;
