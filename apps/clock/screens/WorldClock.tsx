import { Screen } from "../../../components/Screen";
import { Header } from "../../../components/Header";
import { Main } from "../../../components/Main";
import { Nav, Left, Right } from "../../../components/Nav";
import { Icon } from "../../../elements/Icon";
import { state } from "../state";
import { vals } from "../../../components/ScreenStack";
import { createClocks } from "../state/clocks";
import { useEffect } from "preact/hooks";

export default () => {
  useEffect(() => {
    const interval = setInterval(() => {
      state.$clocks!.value = createClocks(state.$clocks!.value);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <Screen class="!bg-[#020202]">
      <Header class="!bg-inherit !border-none">
        <Nav class="text-yellow-600 pb-0 px-4 pr-2">
          <Left>
            <button class="text-base">Edit</button>
          </Left>
          <Right>
            <button>
              <Icon id="plus" size="8" />
            </button>
          </Right>
        </Nav>
      </Header>
      <Main class="pt-header pb-footer px-4 overflow-y-scroll">
        <h1 class="text-4xl font-bold pb-2.5 border-(b white/10)">
          World Clock
        </h1>
        <div class="col mt-1">
          {vals(state.$clocks!.value).map((clock) => {
            return (
              <div class="row gap-2 py-4 border-(b white/10)">
                <div class="flex-1 col">
                  <p class="text-sm font-light text-neutral-400">
                    {clock.tyt}
                    {", "}
                    {clock.hourDifference}
                  </p>
                  <h2 class="text-3xl">{clock.city}</h2>
                </div>
                <span class="text-6xl font-extralight">{clock.time}</span>
              </div>
            );
          })}
        </div>
      </Main>
    </Screen>
  );
};
