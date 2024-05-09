import { JSX } from "preact/jsx-runtime";

const installed = import.meta.glob("../../*/index.tsx");
const icons = import.meta.glob("../../*/icon.png", { eager: true });

export type InstalledApp = {
  id: string;
  name: string;
  icon: string;
  page: number;
  docked: boolean;
  mod: () => Promise<{ default: (props: any) => JSX.Element }>;
  order?: number;
  Component?: (props: any) => JSX.Element;
};

export const InstalledApps = Object.fromEntries(
  Object.entries(installed)
    .filter(([path]) => path.startsWith("../../"))
    .map(([path, mod]) => {
      const id = path.split("/")[2];
      return [
        id,
        {
          id,
          name: id,
          mod: mod as InstalledApp["mod"],
          icon: (icons[`../../${id}/icon.png`] as { default: string })?.default,
          page: Math.random() < 0.5 ? 0 : 1,
          docked: true,
        },
      ];
    })
);
