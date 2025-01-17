import { IMediaImage } from "@/types/strapi";

export function getMediaImageURL(media: IMediaImage): string {
  if (!process.env.STRAPI_API_URL)
    throw new Error("STRAPI_API_URL environment variable is missing");
  return `${"http://localhost:1337"}${media.url}`;
}
