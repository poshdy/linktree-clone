"use server";

import { clickEvents } from "@/events/click-events";

export const incrementLink = async (linkId: string) => {
  clickEvents.emit("linkClicked", linkId);
};
export const incrementSocialIcon = async (linkId: string) => {
  clickEvents.emit("IconClicked", linkId);
};
