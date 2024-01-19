import { reference, z, defineCollection } from "astro:content";

const teamCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      id: z.number(),
      draft: z.boolean(),
      name: z.string(),
      title: z.string(),
      roles: z.array(z.string()),
      avatar: z.object({
        src: image(),
        iconSrc: image(),
        alt: z.string(),
      }),
      publishDate: z.string().transform((str) => new Date(str)),
    }),
});

const blogCollection = defineCollection({
  schema: z.object({
    draft: z.boolean(),
    lang: z.enum(["es", "en"]),
    title: z.string(),
    seoTitle: z.string(),
    description: z.string(),
    timeNeeded: z.string(),
    snippet: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    publishDate: z.string().transform((str) => new Date(str)),
    author: reference("team"),
    tags: z.array(z.string()),
  }),
});

const clientsCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      logos: z.object({
        light: image(),
        dark: image(),
        markDark: image(),
      }),
      reviews: z.array(
        z.object({
          en: z.object({
            role: z.string(),
            content: z.string(),
          }),
          es: z.object({
            role: z.string(),
            content: z.string(),
          }),
        }),
      ),
    }),
});

const workCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      draft: z.boolean(),
      name: z.string(),
      title: z.string(),
      seoTitle: z.string(),
      description: z.string(),
      seoDescription: z.string(),
      snippet: z.string(),
      client: reference("clients"),
      quote: z.object({
        message: z.string(),
        author: z.object({ name: z.string(), position: z.string() }),
      }),
      tags: z.array(z.enum(["webdev", "cms", "blockchain"])),
      cover: z.object({
        src: image(),
        alt: z.string(),
      }),
      date: z.string().transform((str) => new Date(str)),
      lang: z.string(),
      imagesAmount: z.number(),
    }),
});

export const collections = {
  team: teamCollection,
  blog: blogCollection,
  clients: clientsCollection,
  trabajo: workCollection,
};
