import db from "@/db";
import { EventEmitter } from "events";

export const clickEvents = new EventEmitter();

clickEvents.on("linkClicked", async (linkId) => {
  await db.links.update({
    data: {
      clicks: { increment: 1 },
    },
    where: {
      id: linkId,
    },
  });
});
clickEvents.on("IconClicked", async (linkId) => {
  await db.smLinks.update({
    data: {
      clickes: { increment: 1 },
    },
    where: {
      id: linkId,
    },
  });
});
