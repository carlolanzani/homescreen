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
        header: "var(--header-height, 0)",
        footer: "var(--footer-height, 0)",
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
    ["overflow-scrolling-touch", { WebkitOverflowScrolling: "touch" }],
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
  ],
});

install(config);
injectGlobal`
  html {
    overscroll-behavior: none;
  }

  body {
    height: 100vh;
    overflow: hidden;
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;
