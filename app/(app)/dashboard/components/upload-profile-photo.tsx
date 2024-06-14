"use client";
import { updateProfilePhoto } from "@/actions/page";
import { getSignUrl } from "@/actions/shared";
import { Input } from "@/components/ui/input";
import { Upload } from "lucide-react";
import React, { useState } from "react";

type Props = {
  username: string;
};

const UploadProfilePhoto = ({ username }: Props) => {
  const [files, setFiles] = useState<File | undefined>(undefined);

  const handleFileUpload = async (file: File) => {
    const { timestamp, signature } = await getSignUrl();
    const formData = new FormData();
    formData.append("file", file!!);
    formData.append("api_key", process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY!!);
    formData.append("signature", signature);
    formData.append("timestamp", timestamp as any);
    formData.append("folder", "reach_me");

    const endpoint = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_URL as string;
    const data = await fetch(endpoint, {
      method: "POST",
      body: formData,
    }).then((res) => res.json());

    if (data) {
      console.log(data);
      await updateProfilePhoto(data.secure_url, username);
      return data;
    }
  };

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e?.target?.files?.[0];
    setFiles(file);
    if (file) {
      await handleFileUpload(file);
    }
  };
  return (
    <label className="border-dashed space-y-1 flex  items-center justify-center border-2 px-6 py-3 gap-2 border-neutral-300 rounded-lg cursor-pointer">
      <Upload />
      <p className="text-xs text-neutral-500">Upload a Photo</p>

      <Input
        className="bg-transparent border-none outline-none flex-1 hidden"
        type="file"
        onChange={handleChange}
      />
    </label>
  );
};

export default UploadProfilePhoto;
