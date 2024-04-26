import { useMemo } from "preact/hooks";
import { Footer } from "../components/Footer";
import { Main } from "../components/Main";
import { Center, Nav } from "../components/Nav";
import { Screen } from "../components/Screen";
import { state } from "../state";
import { ScreenScroller } from "../components/ScreenScroller";
import { useSignal } from "@preact/signals";
import { css, cx } from "@twind/core";

const AppIcon = (props: {
  id: string;
  name?: string;
  icon: string;
  i: number;
}) => {
  return (
    <div
      class="col aic gap-1 px-0.5 select-none"
      onClick={() => {
        const runningApps = state.$runningApps!.value;
        const runningAppsArray = state.$runningAppsArray!.value;

        const app = runningApps[props.id as keyof typeof runningApps];
        const order = Math.max(0, ...runningAppsArray.map((v) => v.order)) + 1;

        if (app) {
          state.$view!.value = "app";
          state.$runningApps!.value = {
            ...runningApps,
            [props.id]: { ...app, order },
          };
        } else {
          import(`./${props.id}`).then((mod) => {
            state.$view!.value = "app";
            state.$runningApps!.value = {
              ...state.$runningApps!.value,
              [props.id]: {
                Component: mod.default,
                order,
              },
            };
          });
        }
      }}
    >
      <img
        src={`/images/${props.icon}`}
        alt={props.name}
        class="aspect-square w-full"
      />
      {props.name && <p class="text-center text-xs">{props.name}</p>}
    </div>
  );
};

export default () => {
  const list = state.$installedAppsArray!.value;
  let split = useMemo(() => rand(5, (list ?? []).length - 2), []);
  const progress = useSignal(1);
  return (
    <Screen>
      <div class="absolute inset-0 w-full h-full">
        <img src="/images/image.jpeg" class="w-full h-full" />
        <div class="absolute inset-0 w-full h-full backdrop-blur-lg" />
      </div>
      <ScreenScroller
        onProgress={(x) => {
          progress.value = x;
        }}
        class={cx(
          "relative z-40",
          css`
            &::after {
              content: "";
              @apply absolute inset-0 w-full h-full backdrop-blur-[calc(calc(1 - var(--i)) * 16px)] pointer-events-none);
            }
          `
        )}
      >
        <Screen class="bg-red-500 z-30"></Screen>
        <Screen class="bg-transparent" data-fixed="right">
          <Main class="pt-safe-t pb-footer">
            <div class="w-full flex-none grid grid-cols-4 grid-rows-6 p-6 gap-x-6 gap-y-3">
              {list.slice(0, split).map((app, i) => (
                <AppIcon {...app} i={i} />
              ))}
            </div>
          </Main>
        </Screen>
        <Screen class="bg-transparent" data-fixed="left">
          <Main class="pt-safe-t pb-footer">
            <div class="w-full flex-none grid grid-cols-4 grid-rows-6 p-6 gap-x-6 gap-y-3">
              {list.slice(split).map((app, i) => (
                <AppIcon {...app} i={i} />
              ))}
            </div>
          </Main>
        </Screen>
        <Screen class="bg-teal-500"></Screen>
      </ScreenScroller>
      <Footer
        transparent
        class={cx(
          "!pb-4",
          progress.value < 1 || progress.value > 2 ? "z-0" : "z-30"
        )}
      >
        <Nav>
          <Center class="gap-6 bg-black/20 py-3.5 px-4 rounded-3xl">
            <AppIcon id="mail" icon="Icon=Mail.png" i={1} />
            <AppIcon id="phone" icon="Icon=Phone.png" i={2} />
            <AppIcon id="message" icon="Icon=Message.png" i={3} />
            <AppIcon id="safari" icon="Icon=Safari.png" i={4} />
          </Center>
        </Nav>
      </Footer>
    </Screen>
  );
};

const rand = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
