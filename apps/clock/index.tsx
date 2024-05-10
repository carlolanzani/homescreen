import { Screen } from "../../components/Screen";
import { Main } from "../../components/Main";
import { Icon } from "../../elements/Icon";
import { Header } from "../../components/Header";
import { Center, Left, Nav, Right } from "../../components/Nav";
import { Footer } from "../../components/Footer";
import { tabs } from "./state/tabs";
import { useState } from "preact/hooks";

export default () => {
  const [tab, setTab] = useState("worldClock");
  return (
    <Screen class="!bg-[#020202]">
      <Header class="!bg-inherit !border-none">
        <Nav class="text-yellow-600 pb-0">
          <Left>
            <button class="text-base">Edit</button>
          </Left>
          <Right>
            <Icon id="plus" size="8" />
          </Right>
        </Nav>
      </Header>
      <Main class="pt-header pb-footer px-2 overflow-y-scroll">
        <h1 class="text-4xl font-bold pb-2.5 border-(b white/10)">
          World Clock
        </h1>
        <div class="col mt-1">
          {[
            "Seattle",
            "New York",
            "London",
            "Berlin",
            "Moscow",
            "Beijing",
            "Tokyo",
            "Sydney",
          ].map((city) => {
            return (
              <div class="row gap-2 py-4 border-(b white/10)">
                <div class="flex-1 col">
                  <p class="text-sm font-light text-neutral-400">
                    Yesterday -8HRS
                  </p>
                  <h2 class="text-3xl">{city}</h2>
                </div>
                <span class="text-6xl font-extralight">15:35</span>
              </div>
            );
          })}
        </div>
      </Main>
      <Footer class="!bg-inherit col gap-2">
        <Nav class="px-4 pb-6">
          <Center class="!jcsb children:(col aic text-[10px])">
            {Object.entries(tabs).map(([key, value]) => (
              <div
                class={tab === key ? "text-yellow-600" : "text-neutral-500"}
                onClick={() => setTab(key)}
              >
                <Icon id={value.icon} size="9" />
                <span class="leading-none">{value.name}</span>
              </div>
            ))}
          </Center>
        </Nav>
      </Footer>
    </Screen>
  );
};
