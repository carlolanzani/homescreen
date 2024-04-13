import { cx } from "@twind/core";
import { Children } from "../types";

export const Main = (props: { children: Children; class?: string }) => {
  return (
    <div class={cx("flex-1", "col", "text-neutral-100", props.class)}>
      {props.children}
    </div>
  );
};
