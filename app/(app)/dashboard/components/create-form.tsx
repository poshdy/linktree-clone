"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useFormState } from "react-dom";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { createPage } from "@/actions/page";
import SubmitButton from "@/components/shared/submit-button";

const CreateForm = () => {
  const initialState = {
    message: "",
  };
  const [state, formAction] = useFormState(createPage, initialState);
  return (
    <form className="space-y-4 w-full" action={formAction}>
      <div className="flex flex-col items-start gap-1">
        <Label className="text-xs text-gray-600">username</Label>
        <Input name="username" placeholder="@username" className="text-dark" />
      </div>
      <div className="flex flex-col items-start gap-1">
        <Label className="text-xs text-gray-600">Profile title</Label>
        <Input
          name="profile-title"
          placeholder="posh.."
          className="text-dark"
        />
      </div>
      <div className="flex flex-col items-start gap-1">
        <Label className="text-xs text-gray-600">Bio</Label>
        <Textarea
          name="bio"
          placeholder="..."
          className="text-dark"
          maxLength={100}
        />
      </div>
      <SubmitButton title="Create" />
    </form>
  );
};

export default CreateForm;
