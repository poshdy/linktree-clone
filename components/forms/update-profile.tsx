"use client";
import React from "react";
import { updateProfileInfo } from "@/actions/page";
import {
  Input,
  Textarea,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  FormLabel,
  zodResolver,
  toast,
} from "@/components/shared/forms";
import { Page } from "@/types";
import SubmitButton from "@/components/shared/submit-button";
import { useForm } from "react-hook-form";
import { ProfileFromValues, ProfileSchema } from "@/lib/schema";
import { useAction } from "next-safe-action/hooks";
type ProfileProps = {
  page: Page | null;
};

const UpdateProfile = ({ page }: ProfileProps) => {
  const { execute, status } = useAction(updateProfileInfo, {
    onError(error) {
      console.log(error);
    },
    onSuccess() {
      toast.success("Profile Info Updated");
    },
  });
  const form = useForm<ProfileFromValues>({
    resolver: zodResolver(ProfileSchema),
    defaultValues: {
      bio: page?.bio!!,
      location: page?.location!!,
      username: page?.username!!,
      profileTitle: page?.title!!,
    },
  });
  const onSubmit = async (values: ProfileFromValues) => {
    execute(values);
  };
  return (
    <Form {...form}>
      <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="profileTitle"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Profile title</FormLabel>
              <FormControl>
                <Input placeholder="posh" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Location</FormLabel>
              <FormControl>
                <Input placeholder="Milano, Italy" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="bio"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bio</FormLabel>
              <FormControl>
                <Textarea
                  className="bg-neutral-200 text-dark"
                  placeholder="anything?.."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <SubmitButton title="Save" status={status} className="w-full" />
      </form>
    </Form>
  );
};

export default UpdateProfile;
