import { getCurrentUser } from "@/actions/shared";
import db from "@/db";
import { icons } from "@/constants";

export const getSocialLinks = async (visible?: boolean) => {
  const { user } = await getCurrentUser();
  try {
    return await db.icons.findFirst({
      where: {
        pageUsername: user?.username,
      },
      select: {
        position: true,
        SmLinks: {
          where: {
            visible,
          },
        },
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const getLinks = async (visible?: boolean) => {
  const { user } = await getCurrentUser();
  try {
    return await db.links.findMany({
      where: {
        pageUsername: user?.username,
        visible,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const getFormattedLinks = async (visible?: boolean) => {
  "use server";
  const links: any = await getSocialLinks(visible);
  const formattedLinks = links?.SmLinks?.map((linkA: any) => {
    const icon = icons?.find((linkB) => linkB?.name == linkA?.name);
    return {
      id: linkA.id,
      url: linkA.url,
      name: icon?.name,
      icon: icon?.Icon,
      visible: linkA?.visible,
    };
  });
  return formattedLinks;
};
