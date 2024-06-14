import { getCurrentUser } from "@/actions/shared";
import db from "@/db";

export const getButtonStyles = async () => {
  return await db.button.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const getPage = async () => {
  const { user } = await getCurrentUser();
  const page = await db.page.findUnique({
    where: {
      username: user?.username,
    },
    include: {
      theme: true,
      button: true,
    },
  });

  return page;
};

export const getThemes = async () => {
  return await db.templates.findMany();
};
