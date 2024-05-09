import { Nav, Center } from "../../../components/Nav";
import { state } from "../state";
import { AppIcon } from "./AppIcon";

export const AppDock = () => {
  const dockedApps = state.$installedApps!.value.filter((app) => app.docked);
  return (
    <Nav>
      <Center class="gap-6 bg-black/20 py-3.5 px-4 rounded-3xl">
        {dockedApps.map((app) => (
          <AppIcon key={app.id} app={app} hideName />
        ))}
      </Center>
    </Nav>
  );
};
