import Title from "@/components/shared/title";
import React from "react";
import { getPage } from "@/data-access/page";
import SectionWrapper from "@/components/shared/SectionWrapper";
import UpdateProfile from "@/components/forms/update-profile";
import Image from "next/image";
import UploadProfilePhoto from "../components/upload-profile-photo";

const Profile = async () => {
  const page = await getPage();
  return (
    <section className=" space-y-3">
      <Title className="text-2xl font-semibold" title="Profile" />
      <SectionWrapper className="space-y-4">
        <div className="flex items-center gap-2">
          <div className="relative w-32 aspect-square rounded-full">
            <Image
              src={page?.profile_photo!!}
              alt={page?.title!!}
              fill
              sizes="100vw,100vh"
              className="rounded-full object-cover"
            />
          </div>

          <UploadProfilePhoto username={page?.username!!} />
        </div>
        <UpdateProfile page={page} />
      </SectionWrapper>
    </section>
  );
};

export default Profile;
