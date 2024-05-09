import { JSX } from "preact/jsx-runtime";

export type RunningApp = {
  id: string;
  Component: (props: any) => JSX.Element;
  order: number;
};
