import { Screen } from "../../components/Screen";
import { Center, Nav } from "../../components/Nav";
import { Footer } from "../../components/Footer";
import { Lazy } from "../../components/Lazy";
import { Icon } from "../../elements/Icon";
import { state, vals } from "./state";
import { cx } from "@twind/core";
import { Signal } from "@preact/signals";
import { Screen as ScreenType } from "./state/screens";

const ScreenStack = (props: {
  screens: Signal<Record<string, ScreenType>>;
}) => {
  const screens = vals(props.screens!.value).filter((screen) => screen.order);
  const top = Math.max(...screens.map((x) => x.order ?? 0));
  return (
    <Screen>
      {screens.map((screen) => {
        const focus = screen.order === top;
        if (!screen.mod) return null;
        return (
          <div
            key={screen.id}
            class={cx(
              `relative z-[${screen.order}]`,
              !focus && "pointer-events-none"
            )}
          >
            <Lazy key={screen.id} mod={screen.mod} />
          </div>
        );
      })}
    </Screen>
  );
};

const ScreenTabs = (props: { screens: Signal<Record<string, ScreenType>> }) => {
  const screens = vals(props.screens!.value);
  const top = Math.max(...screens.map((x) => x.order ?? 0));

  const stack = (screen: (typeof screens)[0]) => {
    props.screens!.value = {
      ...props.screens.value,
      [screen.id]: { ...screen, order: top + 1 },
    };
  };

  return (
    <>
      {screens.map((screen) => {
        const focus = screen.order === top;
        return (
          <div
            class={focus ? "text-yellow-600" : "text-neutral-500"}
            onClick={() => stack(screen)}
          >
            <Icon id={screen.icon} size="9" />
            <span class="leading-none">{screen.name}</span>
          </div>
        );
      })}
    </>
  );
};

export default () => {
  return (
    <Screen class="!bg-[#020202]">
      <ScreenStack screens={state.$screens!} />
      <Footer class="!bg-inherit col gap-2">
        <Nav class="!px-0 pb-6">
          <Center class="children:(col aic text-[10px])">
            <ScreenTabs screens={state.$screens!} />
          </Center>
        </Nav>
      </Footer>
    </Screen>
  );
};
