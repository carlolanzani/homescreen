import { Nav, Center } from "../../../components/Nav";
import { AppIcon } from "./AppIcon";

export const AppDock = () => {
  return (
    <Nav>
      <Center class="gap-6 bg-black/20 py-3.5 px-4 rounded-3xl">
        <AppIcon id="mail" icon="Icon=Mail.png" i={1} />
        <AppIcon id="phone" icon="Icon=Phone.png" i={2} />
        <AppIcon id="message" icon="Icon=Message.png" i={3} />
        <AppIcon id="safari" icon="Icon=Safari.png" i={4} />
      </Center>
    </Nav>
  );
};
