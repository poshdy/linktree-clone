import { HeroSignUp } from "@/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

type Props = {};

const SignUpButton = (props: Props) => {
  return (
    <form className="flex items-center gap-3" action={HeroSignUp}>
      <Input
        name="username"
        type="text"
        placeholder="@username"
        className="placeholder:text-gray-500 rounded-full px-6 py-6"
      />
      <Button type="submit" className="px-6 py-6" variant={"outline"}>
        Start Now!
      </Button>
    </form>
  );
};

export default SignUpButton;
