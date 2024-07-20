"use client";
import { store } from "@/management/store";
import { ReactNode } from "react";
import { Provider } from "react-redux";
import Main from "./main";

export default function Navigation({ children }: { children: ReactNode }) {
  return (
    <Provider store={store}>
      <Main>{children}</Main>
    </Provider>
  );
}
