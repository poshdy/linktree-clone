"use server";
import db from "@/db";
import { revalidatePath } from "next/cache";
import { getCurrentUser } from "./shared";
import { RedirectType, redirect } from "next/navigation";
import { Position } from "@/types";
import { LinkSchema } from "@/lib/schema";
import { action } from "@/lib/action-client";

type LinkData = {
  pageUsername: string;
  title: string;
  url: string;
  id?: string;
};

export const addLinkAction = action(
  LinkSchema,
  async ({ title, url }, { user }) => {
    const pageUsername = user?.username;
    const data: LinkData = {
      pageUsername,
      title,
      url,
    };
    await createLink(data);
    revalidatePath("/dashboard/links");
  }
);

export const updateLink = action(
  LinkSchema,
  async ({ title, url, id }, { user }) => {
    if (!id) {
      return { error: "ID is Required" };
    }
    const data: LinkData = {
      pageUsername: user?.username,
      id,
      title,
      url,
    };
    await updateLinkDb(data);
    revalidatePath("/dashboard");
  }
);

const createLink = async (data: LinkData) => {
  await db.links.create({
    data,
  });
};
export const updateLinkDb = async (data: LinkData) => {
  const { pageUsername, title, url, id } = data;
  await db.links.update({
    where: {
      id,
      pageUsername,
    },
    data: {
      title,
      url,
    },
  });
};

export const deleteLink = async (id: string) => {
  const { user } = await getCurrentUser();
  try {
    await db.links.delete({
      where: {
        id,
        pageUsername: user?.username,
      },
    });
    revalidatePath("/dashboard");
  } catch (error) {
    console.log(error);
  }
};

export const addSocialLink = async (formData: FormData) => {
  const { user } = await getCurrentUser();
  const IsCreatedBefore = await db.icons.findFirst({
    where: {
      pageUsername: user?.username,
    },
  });
  if (IsCreatedBefore) {
    await db.smLinks.create({
      data: {
        name: formData.get("name") as string,
        url: formData.get("url") as string,
        Icons: {
          connect: {
            pageUsername: user?.username,
          },
        },
      },
    });
  } else {
    await db.icons.create({
      data: {
        pageUsername: user?.username,
        SmLinks: {
          create: {
            name: formData.get("name") as string,
            url: formData.get("url") as string,
          },
        },
      },
    });
  }
  revalidatePath("/dashboard");
};


export const changeIconsPosition = async (formData: FormData) => {
  const { user } = await getCurrentUser();
  try {
    await db.icons.update({
      where: {
        pageUsername: user?.username,
      },
      data: {
        position: formData.get("position") as Position,
      },
    });
    revalidatePath("/dashboard");
  } catch (error) {
    console.log(error);
  }
};

export const updateSocialLink = async (id: string, formData: FormData) => {
  const { user } = await getCurrentUser();
  await db.icons.update({
    where: {
      pageUsername: user?.username,
    },
    data: {
      SmLinks: {
        update: {
          where: {
            id,
          },
          data: {
            url: formData.get("url") as string,
          },
        },
      },
    },
  });
  revalidatePath("/dashboard");
};
export const deleteSocialLink = async (id: string) => {
  const { user } = await getCurrentUser();
  try {
    ("use server");
    await db.smLinks.delete({
      where: {
        id,
        Icons: {
          pageUsername: user?.username,
        },
      },
    });
  } catch (error) {
    console.log(error);
  }
  revalidatePath("/dashboard");
};
