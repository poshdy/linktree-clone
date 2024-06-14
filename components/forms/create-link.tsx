"use client";
import React from "react";
import {
  Button,
  Input,
  Form,
  FormControl,
  FormField,
  toast,
  FormItem,
  FormLabel,
  FormMessage,
  zodResolver,
  z,
} from "@/components/shared/forms";
import { addLinkAction } from "@/actions/links";
import { useForm } from "react-hook-form";
import { LinkFromValues, LinkSchema } from "@/lib/schema";
import { useAction } from "next-safe-action/hooks";
import SubmitButton from "../shared/submit-button";
const CreateLink = () => {
  const { execute, reset, status } = useAction(addLinkAction, {
    onSuccess() {
      toast.success("Created");
      reset();
    },
    onError(error) {
      console.log(error);
    },
  });
  const form = useForm<LinkFromValues>({
    resolver: zodResolver(LinkSchema),
    defaultValues: {
      title: "",
      url: "",
    },
  });
  const onSubmit = async (values: LinkFromValues) => {
    execute(values);
  };

  return (
    <Form {...form}>
      <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>title</FormLabel>
              <FormControl>
                <Input placeholder="my blog." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="url"
          render={({ field }) => (
            <FormItem>
              <FormLabel>url</FormLabel>
              <FormControl>
                <Input placeholder="https://" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <SubmitButton title="Create" status={status}  className="w-full"/>
      </form>
    </Form>
  );
};

export default CreateLink;
