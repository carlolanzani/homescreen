import { cx } from "@twind/core";
import { Children } from "../types";

export const Main = (props: { children: Children; class?: string }) => {
  return (
    <div
      class={cx(
        "flex-none w-full h-screen overflow-y-scroll overflow-x-clip",
        "col",
        "text-neutral-100",
        props.class
      )}
    >
      {props.children}
    </div>
  );
};
