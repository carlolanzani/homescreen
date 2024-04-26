import { cx } from "@twind/core";
import { Children } from "../types";
import { CSSProperties } from "preact/compat";

export const Main = (props: {
  children: Children;
  class?: string;
  style?: CSSProperties;
}) => {
  return (
    <div
      class={cx(
        "relative w-full h-screen overflow-y-scroll overflow-x-clip",
        "col",
        "text-neutral-100",
        props.class
      )}
      style={props.style}
    >
      {props.children}
    </div>
  );
};
