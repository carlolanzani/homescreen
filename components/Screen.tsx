import { cx } from "@twind/core";
import { Children } from "..";

export const Screen = (props: { children?: Children; class?: string }) => {
  const { children, ...rest } = props;
  return (
    <div
      {...rest}
      class={cx(
        "fixed inset-0 w-screen h-screen",
        "bg-neutral-900",
        props.class
      )}
    >
      {props.children}
    </div>
  );
};
