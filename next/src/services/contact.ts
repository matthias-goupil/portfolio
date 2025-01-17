import { IResource, IStrapiResponse, getWithStrapi } from "./strapi";

export enum IContactType {
  LINK = "link",
  EMAIL = "email",
  TEL = "tel",
}

export interface IContact {
  id: number;
  name: string;
  type: IContactType;
  value: string;
}

export async function getContactList(): Promise<IStrapiResponse<IContact[]>> {
  return getWithStrapi<IContact[]>(IResource.CONTACT);
}
