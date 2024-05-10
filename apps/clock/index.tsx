import { Screen } from "../../components/Screen";
import { Center, Nav } from "../../components/Nav";
import { Footer } from "../../components/Footer";
import { Lazy } from "../../components/Lazy";
import { Icon } from "../../elements/Icon";
import { state } from "./state";
import { cx } from "@twind/core";
import { JSX } from "preact/jsx-runtime";

const ScreenStack = (props: {
  screens: {
    id: string;
    order?: number;
    mod: () => Promise<{ default: () => JSX.Element }>;
  }[];
}) => {
  const { screens } = props;
  const top = Math.max(...screens.map((x) => x.order ?? 0));
  return (
    <Screen>
      {screens.map((screen) => {
        const focus = screen.order === top;
        return (
          <div
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

const ScreenTabs = (props: {
  tabs: {
    id: string;
    name: string;
    icon: string;
    order?: number;
    mod: () => Promise<{ default: () => JSX.Element }>;
  }[];
}) => {
  const { tabs } = props;

  const launch = (tab: (typeof props.tabs)[0]) => {
    const tabs = state.$tabs!.value;
    const openTabs = state.$openTabs!.value;
    const order = Math.max(0, ...openTabs.map((v) => v.order ?? 0)) + 1;
    state.$tabs!.value = {
      ...tabs,
      [tab.id]: { ...tab, order },
    };
  };

  return (
    <>
      {tabs.map((tab) => {
        const focus = tab.order === Math.max(...tabs.map((x) => x.order ?? 0));
        return (
          <div
            class={focus ? "text-yellow-600" : "text-neutral-500"}
            onClick={() => launch(tab)}
          >
            <Icon id={tab.icon} size="9" />
            <span class="leading-none">{tab.name}</span>
          </div>
        );
      })}
    </>
  );
};

export default () => {
  const listedTabs = state.$listedTabs!.value;
  const openTabs = state.$openTabs!.value;
  return (
    <Screen class="!bg-[#020202]">
      <ScreenStack screens={openTabs} />
      <Footer class="!bg-inherit col gap-2">
        <Nav class="px-4 pb-6">
          <Center class="!jcsb children:(col aic text-[10px])">
            <ScreenTabs tabs={listedTabs} />
          </Center>
        </Nav>
      </Footer>
    </Screen>
  );
};
