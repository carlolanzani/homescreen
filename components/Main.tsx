import { css, cx } from "@twind/core";
import { Children } from "../types";

export const Main = (props: { children: Children; class?: string }) => {
  return (
    <div
      class={cx(
        css`
          [data-fixed="true"] + & {
            overflow-y: scroll;
            overflow-x: clip;
          }
        `,
        "flex-1",
        "col",
        "text-neutral-100",
        props.class
      )}
    >
      {props.children}
    </div>
  );
};
