import { cx } from "@twind/core";
import { Children } from "../types";

export const Footer = (props: {
  children: Children;
  class?: string;
  fixed?: boolean;
  transparent?: boolean;
}) => {
  return (
    <div
      data-transparent={!!props.transparent}
      class={cx(
        props.fixed ? "absolute bottom-0" : "sticky -bottom-2",
        "w-full col aic pb-safe",
        !props.transparent && "bg-neutral-900/40 backdrop-blur-lg",
        !props.transparent && "border-t border-white/5",
        "text-neutral-400",
        props.class
      )}
    >
      {props.children}
    </div>
  );
};
