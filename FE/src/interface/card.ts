import { User } from "features/threads/threadsCard";

export interface ICard {
  id?: number;
  content: string;
  image?: string;
  title: string;
  user?: User;
}
