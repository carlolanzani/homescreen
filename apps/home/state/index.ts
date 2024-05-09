import { deepSignal } from "deepsignal";
import { JSX } from "preact/jsx-runtime";
import { InstalledApps } from "./InstalledApps";

// Takes an object and returns an array of objects with the key as the id
const idk = (o: Record<string, any>) =>
  Object.entries(o).map(([id, v]) => ({
    id,
    ...v,
  }));

type State = {
  view: "home" | "app";
  runningApps: Record<
    string,
    {
      Component: (props: any) => JSX.Element;
      order: number;
    }
  >;
  runningAppsArray: {
    id: string;
    Component: (props: any) => JSX.Element;
    order: number;
  }[];
  installedApps: Record<
    string,
    {
      name: string;
      icon: string;
    }
  >;
  installedAppsArray: {
    id: string;
    name: string;
    icon: string;
  }[];
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
