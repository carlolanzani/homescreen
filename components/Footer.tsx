import { cx } from "@twind/core";
import { Children } from "../types";
import { useRef, useEffect } from "preact/hooks";

export const Footer = (props: {
  children: Children;
  class?: string;
  fixed?: boolean;
  transparent?: boolean;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const height = ref.current?.getBoundingClientRect().height;
    const root = document.querySelector(":root") as HTMLElement;
    root.style.setProperty("--footer-height", `${height}px`);
  });

  return (
    <div
      ref={ref}
      class={cx(
        "absolute bottom-0",
        "w-full col aic pb-safe",
        !props.transparent && "bg-neutral-900/50 backdrop-blur-lg",
        !props.transparent && "border-t border-white/5",
        "text-neutral-400",
        props.class
      )}
    >
      {props.children}
    </div>
  );
};
