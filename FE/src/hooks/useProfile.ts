import { FormEvent } from "react";

export function useProfile(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData();
    
}