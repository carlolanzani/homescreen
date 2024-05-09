import { JSX } from "preact/jsx-runtime";
import { useEffect, useMemo, useState } from "preact/hooks";
import { Footer } from "../../components/Footer";
import { Screen } from "../../components/Screen";
import { state } from "./state";
import { ScreenScroller } from "../../components/ScreenScroller";
import { useSignal } from "@preact/signals";
import { css, cx } from "@twind/core";
import { AppGrid } from "./screens/AppGrid";
import { AppLibrary } from "./screens/AppLibrary";
import { AppDock } from "./components/AppDock";
import { PageIndicator } from "./components/PageIndicator";
import { App } from "./state/apps";

export default () => {
  const installedApps = state.$installedApps!.value;
  const runningApps = state.$runningApps!.value;
  const view = state.$view!.value;

  const pages = useMemo(() => {
    const numberOfPages = Math.max(...installedApps.map((x) => x.page)) + 1;
    return Array.from({ length: numberOfPages }, (_, i) => i).reduce(
      (acc, i) => {
        const apps = installedApps.filter((x) => x.page === i);
        acc.push(apps);
        return acc;
      },
      [] as (typeof installedApps)[]
    );
  }, []);

  const startAt = 1;
  const progress = useSignal(startAt);

  return (
    <>
      <Screen>
        <div class="absolute inset-0 w-full h-full">
          <img src="/images/image.jpeg" class="w-full h-full" />
          <div class="absolute inset-0 w-full h-full backdrop-blur-lg" />
        </div>
        <ScreenScroller
          startAt={startAt}
          onProgress={(x) => (progress.value = x)}
          class={css`
            @apply relative z-20;
            &::before {
              @apply backdrop-blur-[calc(calc(1 - var(--i)) * 32px)];
            }
            &::after {
              @apply backdrop-blur-[calc(calc(var(--i) - ${pages.length}) * 32px)];
            }
          `}
        >
          <Screen class="bg-transparent z-30"></Screen>
          {pages.map(AppGrid(progress))}
          <AppLibrary />
        </ScreenScroller>
        <Footer
          transparent
          style={{
            zIndex:
              progress.value < 1 || progress.value > pages.length ? 0 : 30,
            transformOrigin: "top",
            transform:
              progress.value < 1
                ? scale(0.9, 1, progress.value)
                : scale(1, 0.9, progress.value - pages.length),
          }}
        >
          <PageIndicator lists={pages} progress={progress.value} />
          <AppDock />
        </Footer>
      </Screen>
      <Screen class={cx("!bg-transparent", view === "home" && "hidden")}>
        {runningApps.map((app) => {
          const top = Math.max(...runningApps.map((x) => x.order ?? 0));
          const focus = app.order === top;
          return (
            <div class={cx(`relative z-[${app.order}]`, !focus && "hidden")}>
              <LazyApp key={app.id} app={app} />
            </div>
          );
        })}
      </Screen>
      <button
        class="fixed bottom-0 h-6 w-full z-10"
        onClick={() => (state.$view!.value = "home")}
      />
    </>
  );
};

const Fallback = () => {
  return <div class="bg-transparent"></div>;
};

const LazyApp = (props: { app: App }) => {
  const { app } = props;
  const [Component, setComponent] = useState<(props: any) => JSX.Element>(
    () => Fallback
  );
  useEffect(() => {
    app.mod().then((x) => {
      setComponent(() => x.default);
    });
  }, []);
  return <Component />;
};

const getTween = (b: number, e: number, i: number) => {
  return b + (i / 99) * (e - b);
};

export const scale = (a: number, b: number, c: number) => {
  return `scale(${getTween(a, b, Math.max(0, Math.min(c, 1)) * 100)})`;
};
