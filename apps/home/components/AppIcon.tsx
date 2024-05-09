import { state } from "../state";

export const AppIcon = (props: {
  id: string;
  name?: string;
  icon: string;
  i: number;
}) => {
  return (
    <div
      class="col aic gap-1 px-0.5 select-none"
      onClick={() => {
        const runningApps = state.$runningApps!.value;
        const runningAppsArray = state.$runningAppsArray!.value;

        const app = runningApps[props.id as keyof typeof runningApps];
        const order = Math.max(0, ...runningAppsArray.map((v) => v.order)) + 1;

        if (app) {
          state.$view!.value = "app";
          state.$runningApps!.value = {
            ...runningApps,
            [props.id]: { ...app, order },
          };
        } else {
          import(`../../${props.id}`).then((mod) => {
            state.$view!.value = "app";
            state.$runningApps!.value = {
              ...state.$runningApps!.value,
              [props.id]: {
                Component: mod.default,
                order,
              },
            };
          });
        }
      }}
    >
      <img
        src={`/images/${props.icon}`}
        alt={props.name}
        class="aspect-square w-full"
      />
      {props.name && <p class="text-center text-xs">{props.name}</p>}
    </div>
  );
};
