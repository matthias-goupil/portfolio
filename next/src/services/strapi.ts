export interface IStrapiResponseSuccess<T> {
  data: T;
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface IStrapiResponseError {
  data: null;
  error?: {
    status: number;
    name: string;
    message: string;
    details: any;
  };
}

export type IStrapiResponse<T> =
  | IStrapiResponseSuccess<T>
  | IStrapiResponseError;

export enum IResource {
  CONTACT = "contacts",
  SKILL = "skills",
  PROJECT = "projects",
  EXPERIENCES = "experiences",
  SKILL_CATEGORY = "skill-categories",
}

export async function getWithStrapi<T extends object>(
  resource: IResource,
  id?: string
): Promise<IStrapiResponse<T>> {
  if (!process.env.STRAPI_API_URL)
    throw new Error("STRAPI_API_URL environment variable is missing");
  if (!process.env.STRAPI_API_TOKEN)
    throw new Error("STRAPI_API_TOKEN environment variable is missing");

  const url = `${process.env.STRAPI_API_URL}/${resource}/${id ? id : ""}?populate=*`;
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    },
  });

  return await response.json();
}
