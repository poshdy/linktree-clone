import { getCurrentUser } from "@/actions/shared";
import db from "@/db";

export const getProducts = async () => {
  const { user } = await getCurrentUser();
  const store = await db.store.findUnique({
    where: {
      pageUsername: user?.username,
    },
  });
  const products = await db.products.findMany({
    where: {
      store: {
        pageUsername: user?.username as string,
      },
    },
  });
  return {
    store:store?.pageUsername,
    products,
  };
};
