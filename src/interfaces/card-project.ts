import { StaticImageData } from "next/image";

export interface CardProject {
  title: string;
  description: string;
  image: StaticImageData;
  tags: React.ReactNode[];
  linkRepo?: string;
  linkDemo?: string;
}