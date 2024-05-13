import { useState } from "preact/hooks";

import { Screen } from "../../components/Screen";
import { Icon } from "../../elements/Icon";
import { Center, Nav } from "../../components/Nav";
import { Footer } from "../../components/Footer";
import { ForYou } from "./screens/ForYou";
import { Library } from "./screens/Library";
import { screens } from "./state/screens";

export default () => {
  const [tab, setTab] = useState("foryou");
  return (
    <Screen class="!bg-[#020202]">
      {tab === "library" && <Library />}
      {tab === "foryou" && <ForYou />}
      <Footer class="col gap-2 text-white !pb-0">
        <Nav class="bg-black/50 backdrop-blur-lg pb-9 pt-0 text-neutral-400">
          <Center class="children:(col aic text-[10px])">
            {Object.entries(screens).map(([key, value]) => (
              <div
                class={tab === key ? "text-blue-500" : undefined}
                onClick={() => setTab(key)}
              >
                <Icon id={value.icon} size="10" />
                <span class="-mt-1">{value.name}</span>
              </div>
            ))}
          </Center>
        </Nav>
      </Footer>
    </Screen>
  );
};
