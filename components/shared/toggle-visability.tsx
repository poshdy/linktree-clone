"use client";
import React from "react";
import { Switch } from "../ui/switch";
import { updatevisibility } from "@/actions/shared";
type Props = {
  IsVisiable: boolean;
  id: string;
  name: string;
};

const ToggleVisability = ({ IsVisiable, id, name }: Props) => {
  return (
    <Switch
      onCheckedChange={(e) => updatevisibility(name, e, id)}
      defaultChecked={IsVisiable}
    />
  );
};

export default ToggleVisability;
