import * as z from "zod";
const MAX_FILE_SIZE = 500000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

export const LinkSchema = z.object({
  url: z
    .string({ required_error: "url is required" })
    .url({ message: "Please Provide a Vaild Url" })
    .min(3, "this field must have atleast 5 characters"),
  title: z.string().min(3, "this field must have atleast 5 characters"),
  id: z.string().optional(),
});

export const SocialIconSchema = z.object({
  url: z
    .string({ required_error: "url is required" })
    .url({ message: "Please Provide a Vaild Url" })
    .min(3, "this field must have atleast 5 characters"),
  name: z.string().min(1, "this field must have atleast 5 characters"),
});
export const ProductSchema = z.object({
  productUrl: z
    .string({ required_error: "url is required" })
    .url({ message: "Please Provide a Vaild Url" })
    .min(3, "this field must have atleast 5 characters"),
  productName: z.string().min(5, "this field must have atleast 5 characters"),
  price: z.any(),
  image: z.string().url(),
  id: z.string().optional(),
});

export const ProfileSchema = z.object({
  username: z.string().min(3, "this field must have atleast 5 characters"),
  profileTitle: z.string().min(3, "this field must have atleast 5 characters"),
  location: z
    .string()
    .min(2, "this field must have atleast 5 characters")
    .optional(),
  bio: z
    .string()
    .min(4, "Bio must at least contains 5 charachters")
    .max(100, "you reached the max"),
});

export type LinkFromValues = z.infer<typeof LinkSchema>;
export type ProfileFromValues = z.infer<typeof ProfileSchema>;
export type SocialIconFromValues = z.infer<typeof SocialIconSchema>;
export type ProductFromValues = z.infer<typeof ProductSchema>;
