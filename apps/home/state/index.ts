import { deepSignal } from "deepsignal";
import { InstalledApp, InstalledApps } from "./InstalledApps";
import { RunningApp } from "./RunningApps";

type State = {
  view: "home" | "app";
  runningApps: Record<string, RunningApp>;
  runningAppsArray: RunningApp[];
  installedApps: Record<string, InstalledApp>;
  installedAppsArray: InstalledApp[];
};

export const state = deepSignal<State>({
  view: "home",
  runningApps: {},
  get runningAppsArray(): State["runningAppsArray"] {
    return idk(state.runningApps);
  },
  installedApps: InstalledApps,
  get installedAppsArray(): State["installedAppsArray"] {
    return idk(state.installedApps);
  },
});

// Takes an object and returns an array of objects with the key as the id
const idk = (o: Record<string, any>) =>
  Object.entries(o).map(([id, v]) => ({
    id,
    ...v,
  }));
