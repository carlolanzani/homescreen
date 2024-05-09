import { DeepSignal, RevertDeepSignal, deepSignal } from "deepsignal";
import { InstalledApp, InstalledApps } from "./InstalledApps";

type State = {
  view: "home" | "app";
  installedApps: Record<string, InstalledApp>;
  runningApps: InstalledApp[];
};

export const vals = <T extends any>(o: DeepSignal<Record<string, T>>) =>
  Object.values(o as RevertDeepSignal<typeof o>) as T[];

export const state = deepSignal<State>({
  view: "home",
  installedApps: InstalledApps,
  get runningApps(): InstalledApp[] {
    return vals(
      state.installedApps as DeepSignal<State["installedApps"]>
    ).filter((app) => app.order);
  },
});
