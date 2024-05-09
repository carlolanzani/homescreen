import { state } from "../state";
import { App } from "../state/apps";

export const AppIcon = (props: { app: App; hideName?: boolean }) => {
  const { id, icon, name, mod } = props.app;
  return (
    <div
      class="col aic gap-1 px-0.5 select-none"
      onClick={() => {
        const apps = state.$apps!.value;
        const runningApps = state.$runningApps!.value;
        const order = Math.max(0, ...runningApps.map((v) => v.order ?? 0)) + 1;
        if (props.app.order) {
          state.$view!.value = "app";
          state.$apps!.value = {
            ...apps,
            [id]: { ...props.app, order },
          };
        } else {
          mod().then((x) => {
            state.$view!.value = "app";
            state.$apps!.value = {
              ...apps,
              [id]: {
                ...props.app,
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
