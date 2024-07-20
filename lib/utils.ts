"use client";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Resend } from "resend";
const resend = new Resend("re_AH4pSf8R_PMS3wT4wWF59tTXqAhhbgQMj");

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

export async function sentMail() {
  const res = await resend.emails.send({
    from: "myfrom",
    to: "arifadayona@gmail.com",
    subject: "hello world",
    text: "",
  });
  alert(res.error?.message);
  console.log(res.data?.id);
}
