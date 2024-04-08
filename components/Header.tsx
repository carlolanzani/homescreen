import { cx } from "@twind/core";
import { Children } from "../types";

export const Header = (props: {
  children: Children;
  class?: string;
  fixed?: boolean;
  transparent?: boolean;
}) => {
  return (
    <div
      data-fixed={!!props.fixed}
      data-transparent={!!props.transparent}
      class={cx(
        props.fixed ? "absolute top-0" : "sticky -top-2",
        "w-full row aic pt-safe pb-2",
        !props.transparent && "bg-neutral-900/80 backdrop-blur-lg",
        !props.transparent && "border-b border-white/10",
        "text-sm text-neutral-200",
        props.class
      )}
    >
      {props.children}
    </div>
  );
};
