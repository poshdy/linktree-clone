import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SocialLinksPreview from "./social-links-preview";
import { Products, links } from "@/types";
import StorePreview from "./store-preview";
import { PreviewLinks } from "./preview-links";
type Props = {
  page: any;
  socialIcons: any;
  type: string;
  products: Products[];
  links: links[];
};

export const PreviewTabs = ({
  page,
  socialIcons,
  products,
  type,
  links,
}: Props) => {
  return (
    <Tabs defaultValue="links" className="w-[400px] space-y-6">
      <TabsList className="grid mx-auto grid-cols-2 rounded-full w-[50%]">
        <TabsTrigger value="links">Links</TabsTrigger>
        <TabsTrigger value="store">Store</TabsTrigger>
      </TabsList>
      <TabsContent
        className="flex flex-col items-center space-y-4"
        value="links"
      >
        <PreviewLinks
          button={page?.button!!}
          theme={page?.theme!!}
          type={type!!}
          links={links}
        />
        <SocialLinksPreview
          page={page!!}
          LinksPosition={socialIcons?.position!!}
          position="Bottom"
        />
      </TabsContent>
      <TabsContent value="store">
        <div className="grid grid-cols-2 gap-2 justify-items-center content-center">
          {products?.map((pro) => (
            <StorePreview product={pro} key={pro?.id} />
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
};
