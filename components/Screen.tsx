import { css, cx } from "@twind/core";
import { VNode } from "preact";

export const Screen = (props: { children: VNode | VNode[] }) => {
  return (
    <div
      class={cx(
        "relative bg-neutral-900 w-screen h-screen flex-none col overflow-y-scroll",
        css`
          main {
            @apply text-neutral-100 col pt-safe pb-safe px-4 flex-1;
          }

          main .fullbleed:first-child {
            @apply -mt-safe-t -mx-4 min-w-[100vw] rounded-t-none aspect-[3/4];
          }

          &:has(header:not(.fixed)) main .fullbleed:first-child {
            @apply -mt-4 rounded-t-none pt-0 aspect-[32/34];
          }

          &:has(header.fixed) {
            @apply overflow-hidden;

            header.fixed + main {
              @apply overflow-y-scroll;
              overflow-x: clip;
            }
          }

          header {
            @apply sticky -top-2 px-2 pb-2 pt-safe row aic text-sm text-neutral-200;

            &:not(.fixed) {
              @apply bg-neutral-900/80 backdrop-blur-lg border-b border-white/10;
            }

            &.fixed {
              @apply absolute top-0;
            }

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
          &:has(header:not(.fixed)) main {
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
