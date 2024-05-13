import { JSX } from "preact/jsx-runtime";

export type Screen = {
  name: string;
  icon: string;
  order?: number;
  id: string;
  mod?: () => Promise<{ default: () => JSX.Element }>;
};

const files = import.meta.glob("../screens/*.tsx");
const meta: Record<string, Omit<Screen, "id" | "mod">> = {
  WorldClock: {
    name: "World Clock",
    icon: "globe",
    order: 1,
  },
  Alarm: {
    name: "Alarm",
    icon: "alarm-fill",
  },
  Stopwatch: {
    name: "Stopwatch",
    icon: "stopwatch-fill",
  },
  Timers: {
    name: "Timers",
    icon: "timer",
  },
};

export const screens = {
  ...Object.fromEntries(
    Object.entries(meta).map(([id, screen]) => [id, { ...screen, id }])
  ),
  ...Object.fromEntries(
    Object.entries(files).map(([path, mod]) => {
      const id = path.split("/")[2]?.split(".")[0];
      const { name, icon, order } = meta[id] ?? {};
      return [
        id,
        {
          id,
          mod: mod as Screen["mod"],
          name: name ?? id,
          icon: icon ?? "questionmark-app",
          ...(order ? { order } : {}),
        },
      ];
    })
  ),
};
