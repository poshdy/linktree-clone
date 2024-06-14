import React from "react";
import SubmitButton from "../shared/submit-button";
import { updateLink } from "@/actions/links";
import { links } from "@/types";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  Input,
  zodResolver,
  FormMessage,
  toast,
} from "@/components/shared/forms";
import { useForm } from "react-hook-form";
import { LinkFromValues, LinkSchema } from "@/lib/schema";
import { useAction } from "next-safe-action/hooks";
type Props = {
  link: links;
};

const UpdateLink = ({ link }: Props) => {
  const { execute, status } = useAction(updateLink, {
    onSuccess() {
      toast.success("Link updated");
    },
    onError(error) {
      console.log(error);
    },
  });
  const form = useForm<LinkFromValues>({
    resolver: zodResolver(LinkSchema),
    defaultValues: {
      title: link.title,
      url: link.url,
      id: link.id,
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
        <SubmitButton title="Update" status={status} className="w-full" />
      </form>
    </Form>
  );
};

export default UpdateLink;
