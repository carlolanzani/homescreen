import { css, cx } from "@twind/core";
import { Children } from "../types";

export const Nav = (props: {
  left?: Children;
  center?: Children;
  right?: Children;
  class?: string;
  pill?: boolean;
}) => {
  return (
    <nav
      class={cx(
        "w-full grid aic p-2",
        props.pill &&
          "mx-2 rounded-full bg-neutral-900/40 backdrop-blur-lg p-3",
        css`
          ${props.left || props.right
            ? "grid-template-columns: 1fr auto 1fr;"
            : "grid-template-columns: auto 1fr auto;"}
        `,
        props.class
      )}
    >
      <div class="row jcfs">{props.left}</div>
      <div class="row jcsa">{props.center}</div>
      <div class="row jcfe">{props.right}</div>
    </nav>
  );
};
