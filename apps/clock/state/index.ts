import { DeepSignal, RevertDeepSignal, deepSignal } from "deepsignal";
import { Tab, tabs } from "./tabs";

type State = {
  tabs: Record<string, Tab>;
  listedTabs: Tab[];
  openTabs: Tab[];
};

export const vals = <T extends any>(o: DeepSignal<Record<string, T>>) =>
  Object.values(o as RevertDeepSignal<typeof o>) as T[];

export const state = deepSignal<State>({
  tabs,
  get listedTabs(): Tab[] {
    return vals(state.tabs);
  },
  get openTabs(): Tab[] {
    return vals(state.tabs).filter((tab) => tab.order);
  },
});
