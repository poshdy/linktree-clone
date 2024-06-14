import Title from "@/components/shared/title";
import React from "react";
import CreateForm from "../dashboard/components/create-form";
import { getCurrentUser } from "@/actions/shared";
import { redirect } from "next/navigation";

const CreatePage = async () => {
  const { user } = await getCurrentUser();
  if (user) {
    redirect("/dashboard/links");
  }
  return (
    <main className="grid grid-cols-3 w-full">
      <div className="col-span-2 container flex flex-col items-start justify-center w-full">
        <Title
          title="Create your Reach me Page"
          className="text-4xl font-black"
        />
        <CreateForm />
      </div>
      <div className="col-span-1 hidden lg:flex w-full h-screen bg-gradient-to-br from-blue via-purple-800 to-violet-900 items-center justify-center">
        <Title title="Reach me!" className="text-6xl text-gray-200 p-4" />
      </div>
    </main>
  );
};

export default CreatePage;
