import React from "react";
import Links from "./components/Links";
import Title from "@/components/shared/title";
import {
  getLinks,
  getSocialLinks,
  getFormattedLinks,
} from "@/data-access/links";
import SocialIcons from "./components/socialIcons/social-icons";
import SectionWrapper from "@/components/shared/SectionWrapper";
import Modal from "@/components/shared/modal";
import CreateLink from "@/components/forms/create-link";
import CreateSocialIcon from "@/components/forms/create-social-icon";
import { styles } from "@/styles";

const Link = async () => {
  const links = await getLinks();
  const SocialLinks = await getSocialLinks();
  const IconsList: any = await getFormattedLinks();

  return (
    <section className="space-y-6 w-full">
      <div className="flex items-center justify-between">
        <Title className="text-2xl font-semibold" title="Links" />
        <Modal
          className="w-fit px-6 py-3"
          btnStyle={styles.button}
          trigger="Add link"
          title="Add a Link"
        >
          <CreateLink />
        </Modal>
      </div>
      <section className="grid grid-cols-1  justify-items-center md:grid-cols-3 gap-3 w-full">
        {links?.map((link) => (
          <Links key={link.id} link={link} />
        ))}
      </section>

      <div className="space-y-3">
        <Title className="text-2xl font-semibold" title="Social Icons" />
        <SectionWrapper className="w-full space-y-8 px-10 py-8">
          <Title
            title="Be Iconic!"
            className="text-lg font-medium"
            subTitle="Add icons linking to your social profiles, email and more"
          />
          <Modal btnStyle={styles.button} trigger="Add" title="Add Social Icon">
            <CreateSocialIcon links={SocialLinks?.SmLinks!!} />
          </Modal>

          <SocialIcons
            position={SocialLinks?.position!!}
            IconsList={IconsList}
          />
        </SectionWrapper>
      </div>
    </section>
  );
};

export default Link;
