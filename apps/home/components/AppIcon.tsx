import { state } from "../state";
import { InstalledApp } from "../state/InstalledApps";

export const AppIcon = (props: { app: InstalledApp; hideName?: boolean }) => {
  const { id, icon, name, mod } = props.app;
  return (
    <div
      class="col aic gap-1 px-0.5 select-none"
      onClick={() => {
        const runningApps = state.$runningApps!.value;
        const runningAppsArray = state.$runningAppsArray!.value;

        const app = runningApps[id as keyof typeof runningApps];
        const order = Math.max(0, ...runningAppsArray.map((v) => v.order)) + 1;

        if (app) {
          state.$view!.value = "app";
          state.$runningApps!.value = {
            ...runningApps,
            [id]: { ...app, order },
          };
        } else {
          mod().then((x) => {
            state.$view!.value = "app";
            state.$runningApps!.value = {
              ...state.$runningApps!.value,
              [id]: {
                id,
                Component: x.default,
                order,
              },
            };
          });
        }
      }}
    >
      <img src={icon} alt={name} class="aspect-square w-full" />
      {!props.hideName && <p class="text-center text-xs capitalize">{name}</p>}
    </div>
  );
};
