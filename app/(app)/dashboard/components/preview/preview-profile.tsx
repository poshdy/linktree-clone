import Title from "@/components/shared/title";
import Image from "next/image";
import { Page } from "@/types";
type ProfileInfoProps = {
  page: Page;
};

export const ProfileInfoPreview = ({ page }: ProfileInfoProps) => {
  return (
    <div className="flex items-center flex-col space-y-3">
      <div className="relative w-36 aspect-square rounded-full">
        <Image
          alt={page?.username!!}
          src={page?.profile_photo!!}
          fill
          className="object-cover rounded-full"
          sizes="100vw,100vh"
        />
      </div>
      <div
        className="flex flex-col space-y-2 items-center"
        style={{ color: page?.textColor!! }}
      >
        <Title
          title={page?.title as string}
          className="text-base font-extrabold"
        />
        <Title title={page?.bio as string} className="text-sm font-normal" />
      </div>
    </div>
  );
};
