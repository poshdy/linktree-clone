import { getCurrentUser } from "@/actions/shared";
import { createSafeActionClient } from "next-safe-action";

export const action = createSafeActionClient({
  async middleware() {
    const { user, session } = await getCurrentUser();
    if (!user || !session) {
      throw Error("There is no user logged in");
    }
    return { user };
  },
});
