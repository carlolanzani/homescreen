import { defineConfig, injectGlobal, install } from "@twind/core";
import presetTailwind from "@twind/preset-tailwind";
import presetAutoprefix from "@twind/preset-autoprefix";

const config = defineConfig({
  presets: [presetTailwind(), presetAutoprefix()],
  variants: [["children", "&>*"]],
  ignorelist: [],
  theme: {
    extend: {
      spacing: {
        "safe-t": "var(--safe-area-inset-top, env(safe-area-inset-top))",
        "safe-r": "var(--safe-area-inset-right, env(safe-area-inset-right))",
        "safe-b": "var(--safe-area-inset-bottom, env(safe-area-inset-bottom))",
        "safe-l": "var(--safe-area-inset-left, env(safe-area-inset-left))",
      },
    },
  },
  rules: [
    [
      "col",
      {
        display: "flex",
        flexDirection: "column",
      },
    ],
    [
      "row",
      {
        display: "flex",
        flexDirection: "row",
      },
    ],
    ["no-scrollbars", { scrollbarWidth: "none" }],
    ["aic", { alignItems: "center" }],
    ["aifs", { alignItems: "flex-start" }],
    ["aife", { alignItems: "flex-end" }],
    ["aib", { alignItems: "baseline" }],
    ["jcfs", { justifyContent: "flex-start" }],
    ["jcc", { justifyContent: "center" }],
    ["jcfe", { justifyContent: "flex-end" }],
    ["jcsa", { justifyContent: "space-around" }],
    ["jcsb", { justifyContent: "space-between" }],
    ["text-balance", { textWrap: "balance" }],
    [
      "pt-safe",
      {
        paddingTop: "var(--safe-area-inset-top, env(safe-area-inset-top))",
      },
    ],
    [
      "pb-safe",
      {
        paddingBottom:
          "var(--safe-area-inset-bottom, env(safe-area-inset-bottom))",
      },
    ],
    [
      "px-safe",
      {
        paddingLeft: "var(--safe-area-inset-left, env(safe-area-inset-left))",
        paddingRight:
          "var(--safe-area-inset-right, env(safe-area-inset-right))",
      },
    ],
  ],
});

install(config);
injectGlobal`

  html {
    font-size: 16px;
    @apply bg-neutral-900 text-neutral-100;
  }

  *::-webkit-scrollbar {
    display: none;
  }
`;
