import { useMemo } from "preact/hooks";
import { Footer } from "../components/Footer";
import { Main } from "../components/Main";
import { Center, Nav } from "../components/Nav";
import { Screen } from "../components/Screen";
import { useScrollProgress } from "../hooks/useScrollProgress";
// @ts-ignore
import { useWebAnimation } from "use-web-animation/preact";
import { state } from "../state";

const AppIcon = (props: {
  id: string;
  name?: string;
  icon: string;
  i: number;
}) => {
  const [ref] = useWebAnimation({
    from: 30,
    to: 100,
    property: "opacity",
    getValue: (v: number) => `${v}%`,
    pause: !props.name,
    easing: "ease-in",
    duration:
      (props.i % 4 === 3 || props.i % 4 === 0 ? 500 : 200) +
      Math.random() * 100,
  });

  return (
    <div
      ref={ref}
      class="col aic gap-1 px-0.5"
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
  const { ref, page } = useScrollProgress();

  const [gridRef] = useWebAnimation({
    from: 4,
    to: 1,
    property: "transform",
    getValue: (v: number) => `scale(${v})`,
    easing: "ease-out",
    duration: 450,
  });

  return (
    <Screen>
      <img src="/images/image.jpeg" class="absolute inset-0 w-full h-full" />
      <Main class="pt-safe-t backdrop-blur-lg pb-footer">
        <div class="relative h-full col">
          <div ref={gridRef}>
            <div
              ref={ref}
              class="flex-1 row overflow-x-scroll snap-x snap-mandatory children:(snap-center snap-always)"
            >
              <div class="w-full flex-none grid grid-cols-4 grid-rows-6 p-6 gap-x-6 gap-y-3">
                {list.slice(0, split).map((app, i) => (
                  <AppIcon {...app} i={i} />
                ))}
              </div>
              <div class="w-full flex-none grid grid-cols-4 grid-rows-6 p-6 gap-x-6 gap-y-3">
                {list.slice(split).map((app, i) => (
                  <AppIcon {...app} i={i} />
                ))}
              </div>
            </div>
          </div>
          <div class="mt-auto self-center row gap-2 py-2.5 px-4 rounded-full bg-black/20 children:(w-2 h-2 rounded-full)">
            {Array.from({ length: page.total }).map((_, i) => (
              <div
                class={`w-2 h-2 rounded-full ${
                  i + 1 === page.current ? "bg-white" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </Main>
      <Footer transparent class="!pb-4">
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
