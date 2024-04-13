import { cx } from "@twind/core";
import { Children } from "../types";

export const Screen = (props: { children: Children; class?: string }) => {
  return (
    <div
      class={cx(
        "relative w-screen h-screen overflow-y-scroll",
        "col",
        "bg-neutral-900",
        props.class
      )}
    >
      {props.children}
    </div>
  );
};
