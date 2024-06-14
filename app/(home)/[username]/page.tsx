import {
  getFormattedLinks,
  getLinks,
  getSocialLinks,
} from "@/data-access/links";
import { getProducts } from "@/data-access/products";
import { getUserByUsername } from "@/actions/shared";
import SocialLinksPreview from "@/app/(app)/dashboard/components/preview/social-links-preview";
import { PreviewTabs } from "@/app/(app)/dashboard/components/preview/tabs";
import React, { Suspense } from "react";
import { ProfileInfoPreview } from "@/app/(app)/dashboard/components/preview/preview-profile";
import { PreviewLinks } from "@/app/(app)/dashboard/components/preview/preview-links";

const ProfilePage = async ({ params }: { params: { username: string } }) => {
  const page = await getUserByUsername(params?.username);
  const links = await getLinks(true);
  const socialIcons = await getSocialLinks(true);
  const IconsList: any = await getFormattedLinks(true);
  const products = await getProducts();
  const type = page?.styleType;
  return (
    <section
      style={{
        backgroundColor:
          page?.styleType === "Theme" ? page?.theme?.bgColor : page?.bgColor!!,
      }}
      className="w-full min-h-screen flex flex-col items-center justify-center"
    >
      <div className="w-[90%] mx-auto flex space-y-8 py-20 items-center flex-col">
        <div className="space-y-6">
          <ProfileInfoPreview page={page!!} />

          <SocialLinksPreview
            page={page!!}
            IconsList={IconsList}
            LinksPosition={socialIcons?.position!!}
            position="Top"
          />
        </div>
        {products?.products?.length > 0 ? (
          <PreviewTabs
            links={links!!}
            socialIcons={socialIcons!!}
            page={page!!}
            type={type!!}
            products={products?.products}
          />
        ) : (
          <>
            <PreviewLinks
              button={page?.button!!}
              theme={page?.theme!!}
              type={page?.styleType!!}
              links={links!!}
            />

            <SocialLinksPreview
              page={page!!}
              IconsList={IconsList}
              LinksPosition={socialIcons?.position!!}
              position="Bottom"
            />
          </>
        )}
      </div>
    </section>
  );
};

export default ProfilePage;
