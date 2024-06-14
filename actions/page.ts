"use server";
import db from "@/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getCurrentUser } from "./shared";
import { v2 } from "cloudinary";
import { action } from "@/lib/action-client";
import { ProfileSchema } from "@/lib/schema";

type ProfileData = {
  bio: string;
  title: string;
  username: string;
  location: string | undefined;
};

export const createPage = async (prevState: any, formData: FormData) => {
  try {
    const { user, session } = await getCurrentUser();
    const username = formData.get("username");
    const profileTitle = formData.get("profile-title");
    const bio = formData.get("bio");

    const isUnique = await db.page.findFirst({
      where: {
        username: username as string,
      },
    });
    if (isUnique) {
      return {
        message: "Already Exists Try another one!",
      };
    }
    if ((bio?.toString?.length as number) > 100) {
      return {
        message: "your bio is too long",
      };
    }
    await db.page.create({
      data: {
        username: username as string,
        bio: bio as string,
        title: profileTitle as string,
        user: { connect: { id: session?.user?.id } },
      },
    });
  } catch (error) {
    console.log(error);
  }
  redirect("/dashboard/links");
};

export const updateProfilePhoto = async (image: string, username: string) => {
  await db.page.update({
    data: {
      profile_photo: image,
    },
    where: {
      username,
    },
  });
  revalidatePath("/dashboard");
};

export const updateProfileInfo = action(
  ProfileSchema,
  async ({ bio, profileTitle, username, location }) => {
    const data: ProfileData = {
      bio,
      title: profileTitle,
      username,
      location,
    };
    await updateProfileDb(data);
  }
);

export const updateProfileDb = async (data: ProfileData) => {
  const { bio, location, title, username } = data;
  await db.page.update({
    where: {
      username,
    },
    data: {
      bio,
      location,
      title,
    },
  });
  revalidatePath("/dashboard");
};

export const applyTheme = async (id: string) => {
  const { user, session } = await getCurrentUser();
  try {
    await db.page.update({
      where: {
        username: user?.username,
      },
      data: {
        styleType: "Theme",
        templatesId: id as string,
      },
    });
    revalidatePath("/dashboard");
  } catch (error) {
    console.log(error);
  }
};

export const applyBackGround = async (formData: FormData) => {
  const { user } = await getCurrentUser();

  await db.page.update({
    where: {
      username: user?.username,
    },
    data: {
      styleType: "Custom",
      bgColor: formData.get("bgColor") as string,
      textColor: formData.get("textColor") as string,
    },
  });
  revalidatePath("/dashboard");
};
export const applyButton = async (buttonId: string) => {
  const { user } = await getCurrentUser();
  await db.page.update({
    where: {
      username: user?.username,
    },
    data: {
      styleType: "Custom",
      button: {
        connect: { id: buttonId },
      },
    },
  });
  revalidatePath("/dashboard");
};
export const applyButtonStyle = async (
  btn: string,
  type: string,
  formData: FormData
) => {
  const { user } = await getCurrentUser();
  if (type === "Outline") {
    const textColor = formData.get("textColor");
    const BorderColor = formData.get("borderColor");
    await db.page.update({
      where: {
        username: user?.username as string,
      },
      data: {
        button: {
          update: {
            data: {
              textColor: textColor as string,
              borderColor: BorderColor as string,
            },
          },
        },
      },
    });
  }
  if (type == "Fill") {
    const textColor = formData.get("textColor");
    const Backgound = formData.get("BgbtnColor");
    await db.page.update({
      where: {
        username: user?.username as string,
      },
      data: {
        button: {
          update: {
            data: {
              textColor: textColor as string,
              color: Backgound as string,
            },
          },
        },
      },
    });
  }
  if (type == "Shadow") {
    const textColor = formData.get("textColor");
    const Backgound = formData.get("BgbtnColor");
    const Shadow = formData.get("shadowColor");
    await db.page.update({
      where: {
        username: user?.username as string,
      },
      data: {
        button: {
          update: {
            data: {
              textColor: textColor as string,
              color: Backgound as string,
              shadowColor: Shadow as string,
            },
          },
        },
      },
    });
  }
  revalidatePath("/dashboard");
};
