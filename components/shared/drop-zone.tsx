"use client";
import "dotenv/config.js";
import { getSignUrl } from "@/actions/shared";
import { Upload } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Input } from "./forms";

type ImageUploadProps = {
  onChange: (data: any) => void;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const ImageUpload = ({ onChange, setLoading }: ImageUploadProps) => {
  const [ImageUrl, setImageUrl] = useState<string | undefined>(undefined);
  const [files, setFiles] = useState<File | undefined>(undefined);

  const handleFileUpload = async (file: File) => {
    const { timestamp, signature } = await getSignUrl();
    const formData = new FormData();
    formData.append("file", file!!);
    formData.append("api_key", process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY!!);
    formData.append("signature", signature);
    formData.append("timestamp", timestamp as any);
    formData.append("folder", "reach_me");

    setLoading(true);
    const endpoint = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_URL as string;
    const data = await fetch(endpoint, {
      method: "POST",
      body: formData,
    }).then((res) => res.json());

    if (data) {
      console.log(data);
      onChange(data?.secure_url);
      setLoading(false);
      return data;
    }
  };

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e?.target?.files?.[0];
    setFiles(file);
    if (ImageUrl) {
      URL.revokeObjectURL(ImageUrl);
    }

    if (file) {
      const url = URL.createObjectURL(file);
      setImageUrl(url);
      const data = await handleFileUpload(file);
    } else {
      setImageUrl(undefined);
    }
  };

  return (
    <>
      <label className="border-dashed w-full flex flex-col items-center justify-center border-2 py-5 h-24 border-neutral-300 rounded-lg cursor-pointer">
        <Upload />
        {/* {loading ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag & drop files here, or click to select files</p>
        )} */}
        <Input
          className="bg-transparent border-none outline-none flex-1 hidden"
          type="file"
          onChange={handleChange}
        />
      </label>

      <>
        {files && ImageUrl && (
          <section className="mt-10">
            <Image
              src={ImageUrl!!}
              alt={"a"}
              width={30}
              height={30}
              className="rounded-md object-cover"
            />
          </section>
        )}
      </>
    </>
  );
};

export default ImageUpload;
