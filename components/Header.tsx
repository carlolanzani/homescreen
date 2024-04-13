import { cx } from "@twind/core";
import { Children } from "../types";
import { useEffect, useRef } from "preact/hooks";

export const Header = (props: {
  children: Children;
  class?: string;
  fixed?: boolean;
  transparent?: boolean;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const height = ref.current?.getBoundingClientRect().height;
    const root = document.querySelector(":root") as HTMLElement;
    root.style.setProperty("--header-height", `${height}px`);
  });

  return (
    <div
      ref={ref}
      class={cx(
        "absolute top-0",
        "w-full row aic pt-safe-t pb-2",
        !props.transparent && "bg-neutral-900/80 backdrop-blur-lg",
        !props.transparent && "border-b border-white/10",
        "text-sm text-neutral-200",
        props.class
      )}
    >
      {props.children}
    </div>
  );
};
