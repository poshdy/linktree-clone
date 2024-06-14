import { changeIconsPosition } from "@/actions/links";
import Title from "@/components/shared/title";
import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import SubmitButton from "@/components/shared/submit-button";
const POSITIONS = [
  { key: "Top", value: "Top" },
  { key: "Bottom", value: "Bottom" },
];
const IconsPosition = ({ position }: { position: string }) => {
  return (
    <div className="space-y-3 w-full">
      <Title
        title="Position"
        subTitle="Display Icons at:"
        className="text-xl font-medium"
      />
      <form action={changeIconsPosition} className="space-y-3">
        <RadioGroup
          name="position"
          className="space-y-2 text-white "
          defaultValue={position}
        >
          {POSITIONS.map((pos) => (
            <div className="flex items-center space-x-2 " key={pos.key}>
              <RadioGroupItem
                className="w-5 text-neutral-300"
                defaultChecked={position == pos.value}
                value={pos.value}
              />
              <Label>{pos.key}</Label>
            </div>
          ))}
        </RadioGroup>
        <SubmitButton className="w-fit" title="Save" />
      </form>
    </div>
  );
};

export default IconsPosition;
