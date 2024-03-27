import { css, cx } from "@twind/core";
import { VNode } from "preact";

export const Screen = (props: { children: VNode | VNode[] }) => {
  return (
    <div
      class={cx(
        "bg-neutral-900 w-screen h-screen flex-none col overflow-y-scroll",
        css`
          main {
            @apply text-neutral-100 col pt-safe pb-safe px-4 flex-1;
          }
          header {
            @apply sticky -top-2 px-2 pb-2 pt-safe row aic text-sm text-neutral-200 bg-neutral-900/80 backdrop-blur-lg;
            & > button {
              @apply min-w-0 flex-1 text-blue-500;
              &:first-child {
                @apply jcfs;
              }
              &:last-child {
                @apply jcfe;
              }
            }
            & > h1 {
              @apply py-2 flex-auto text-center text-lg;
            }
          }
          footer {
            @apply sticky -bottom-2 pb-safe pt-3 px-2 row aic text-neutral-400 bg-neutral-900/40 backdrop-blur-lg border-t border-white/5;
            & > button {
              @apply min-w-0 flex-1 aic jcc;
            }
          }
          &:has(header) main {
            @apply pt-4;
          }
          &:has(footer) main {
            @apply pb-4;
          }
        `
      )}
    >
      {props.children}
    </div>
  );
};
