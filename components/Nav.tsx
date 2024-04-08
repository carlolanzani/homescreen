import { css, cx } from "@twind/core";
import { Children } from "../types";

const childOfType = (
  node: Children | undefined,
  type: "Left" | "Center" | "Right"
) => {
  return Array.isArray(node)
    ? node?.find((x) => typeof x.type !== "string" && x.type?.name === type)
    : typeof node?.type !== "string" && node?.type?.name === type
    ? node
    : undefined;
};

export const Nav = (props: {
  children?: Children;
  class?: string;
  pill?: boolean;
}) => {
  const left = childOfType(props.children, "Left");
  const center = childOfType(props.children, "Center");
  const right = childOfType(props.children, "Right");
  return (
    <nav
      class={cx(
        "w-full grid aic p-2",
        props.pill &&
          "mx-2 max-w-[calc(100vw-1rem)] rounded-full bg-neutral-900/40 backdrop-blur-lg p-3",
        css`
          ${left || right
            ? "grid-template-columns: 1fr auto 1fr;"
            : "grid-template-columns: auto 1fr auto;"}
        `,
        props.class
      )}
    >
      {left ?? <Left />}
      {center ?? <Center />}
      {right ?? <Right />}
    </nav>
  );
};

export const Left = (props: { children?: Children; class?: string }) => {
  return <div class={cx("row jcfs", props.class)}>{props.children}</div>;
};
export const Center = (props: { children?: Children; class?: string }) => {
  return <div class={cx("row jcsa", props.class)}>{props.children}</div>;
};
export const Right = (props: { children?: Children; class?: string }) => {
  return <div class={cx("row jcfe", props.class)}>{props.children}</div>;
};
