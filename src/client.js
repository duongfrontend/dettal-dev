import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  // projectId: process.env.REACT_APP_SANITY_PROOJECT_ID,
  projectId: "hitat5fg",
  dataset: "production",
  apiVersion: "2023-10-15",
  useCdn: true,
  // token: process.env.REACT_APP_SANITY_TOKEN,
  token:
    "sk1iyAtzxeuBRP7hi3e3KqMLPKv5PI39l33ZYaEkFL23o9fisrb6OmgmndlnccORVH6iQzCKM6BRWAXcQeC2O3vgR8ndQmbSyZfuyIw8DcBYw28OgSbLmLPiiRe979wejzA45x43PMKg3seTe95P5DaqrXiXx6Xg5fSG9GkamW7YtejmwkrH",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
