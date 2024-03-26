import { defineConfig, injectGlobal, install } from "@twind/core";
import presetTailwind from "@twind/preset-tailwind";

const config = defineConfig({
  presets: [presetTailwind()],
  variants: [["children", "&>*"]],
  ignorelist: [],
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
    color: #fff;
  }

  *::-webkit-scrollbar {
    display: none;
  }
`;
