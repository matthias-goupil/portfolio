import { IMediaImage } from "@/types/strapi";
import { IResource, getWithStrapi } from "./strapi";

export interface IProject {
  name: string;
  documentId?: string;
  description: string;
  content: string;
  miniature: IMediaImage;
  githubLink?: string;
  projectLink?: string;
}

export async function getProjectList() {
  return await getWithStrapi<IProject[]>(IResource.PROJECT);
}

export async function getProjectById(documentId: string) {
  return await getWithStrapi<IProject>(IResource.PROJECT, documentId);
}
