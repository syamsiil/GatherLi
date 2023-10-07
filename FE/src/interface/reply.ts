// import { User } from "@/features/thread";
import { User } from "../features/threads/threadsCard";

export interface IReply {
  id?: number;
  content?: string;
  user: User;
}

export interface IReplyPost {
  content?: string;
  thread_id?: number;
}
