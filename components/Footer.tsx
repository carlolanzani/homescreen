import { cx } from "@twind/core";
import { Children } from "../types";

export const Footer = (props: { children: Children; class?: string }) => {
  return (
    <div
      class={cx(
        "sticky -bottom-2",
        "row aic pb-safe",
        "bg-neutral-900/40 backdrop-blur-lg",
        "border-t border-white/5",
        "text-neutral-400",
        props.class
      )}
    >
      {props.children}
    </div>
  );
};
