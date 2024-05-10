import { JSX } from "preact/jsx-runtime";

export type Tab = {
  id: string;
  name: string;
  icon: string;
  order?: number;
  mod: () => Promise<{ default: () => JSX.Element }>;
};

export const tabs = {
  worldClock: {
    id: "worldClock",
    name: "WorldClock",
    icon: "globe",
    mod: () => import("../screens/WorldClock"),
    order: 1,
  },
  alarm: {
    id: "alarm",
    name: "Alarm",
    icon: "alarm-fill",
    mod: () => import("../screens/Alarm"),
  },
  stopwatch: {
    id: "stopwatch",
    name: "Stopwatch",
    icon: "stopwatch-fill",
    mod: () => import("../screens/WorldClock"),
  },
  timers: {
    id: "timers",
    name: "Timers",
    icon: "timer",
    mod: () => import("../screens/WorldClock"),
  },
};
