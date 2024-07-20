import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function openLink(href: string) {
  const link = document.createElement("a");
  link.href = href;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.click();
}

export type RequestBody = {
  from: string;
  company: string;
  message: string;
};

export async function sentMail(requestBody: RequestBody) {
  try {
    const response = await fetch("/api", {
      method: "post",
      body: JSON.stringify(requestBody),
    });
    const data = await response.json();
    alert(data.message);
  } catch (err) {
    alert(err);
  }
}
