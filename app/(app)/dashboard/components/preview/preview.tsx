import {
  getFormattedLinks,
  getLinks,
  getSocialLinks,
} from "@/data-access/links";
import { getPage } from "@/data-access/page";
import { getProducts } from "@/data-access/products";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { FaEye } from "react-icons/fa";

import SocialLinksPreview from "./social-links-preview";
import { PreviewTabs } from "./tabs";
import { PreviewLinks } from "./preview-links";
import { ProfileInfoPreview } from "./preview-profile";

const Preview = async () => {
  const links = await getLinks(true);
  const page = await getPage();
  const socialIcons = await getSocialLinks(true);
  const products = await getProducts();
  const IconsList: any = await getFormattedLinks(true);
  const type = page?.styleType;
  return (
    <Dialog>
      <DialogTrigger className="bg-blue p-2 rounded-full">
        <FaEye className="w-8 h-8" />
      </DialogTrigger>
      <DialogContent
        style={{
          backgroundColor:
            type === "Theme" ? page?.theme?.bgColor : page?.bgColor!!,
        }}
        className="w-full h-screen  overflow-x-hidden border-none outline-none flex flex-col items-center justify-start py-24 text-white"
      >
        <ProfileInfoPreview page={page!!} />
        <SocialLinksPreview
          page={page!!}
          IconsList={IconsList}
          LinksPosition={socialIcons?.position!!}
          position="Top"
        />

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
              type={type!!}
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
      </DialogContent>
    </Dialog>
  );
};

export default Preview;
