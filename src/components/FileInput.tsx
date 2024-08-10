"use client";
import React, { useRef } from "react";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface FileInputProps {
  imageUrl: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onRemove: () => void;
}

const FileInput: React.FC<FileInputProps> = ({
  imageUrl,
  onChange,
  onRemove,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="flex items-center gap-6">
      {imageUrl ? (
        <Image
          src={imageUrl}
          width={48}
          height={48}
          alt="logo"
          className="w-12 h-12 object-cover rounded-full bg-gray-200 flex-shrink-0"
        />
      ) : (
        <div className="w-12 h-12 rounded-full bg-gray-200 flex-shrink-0"></div>
      )}
      <Button
        type="button"
        onClick={() => fileInputRef.current?.click()}
        variant={"outline"}
      >
        Change
        <Input
          ref={fileInputRef}
          onChange={onChange}
          className="cursor-pointer hidden"
          type="file"
          accept=".jpg,.jpeg,.png,.gif,.bmp,.svg"
        />
      </Button>
      {imageUrl && (
        <Button
          variant={"outline"}
          type="button"
          className="text-sm text-gray-600"
          onClick={onRemove}
        >
          Remove
        </Button>
      )}
    </div>
  );
};

export default FileInput;
