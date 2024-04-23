import Title from "@/components/shared/title";
import { Input } from "@/components/ui/input";
import React from "react";

type Props = {};

const CreateForm = (props: Props) => {
  return (
    <section className="w-full bg-gray-200">
      <Title title="Make it yours!" className="text-3xl" />
      <form className="" action={""}>
        <Input/>
      </form>
    </section>
  );
};

export default CreateForm;
