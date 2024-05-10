import { Screen } from "../../../components/Screen";
import { Header } from "../../../components/Header";
import { Main } from "../../../components/Main";
import { Nav, Left, Right } from "../../../components/Nav";
import { Icon } from "../../../elements/Icon";

export default () => {
  return (
    <Screen class="!bg-[#020202]">
      <Header class="!bg-inherit !border-none">
        <Nav class="text-yellow-600 pb-0 px-4">
          <Left>
            <button class="text-base">Edit</button>
          </Left>
          <Right>
            <Icon id="plus" size="8" />
          </Right>
        </Nav>
      </Header>
      <Main class="pt-header pb-footer px-4 overflow-y-scroll">
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
    </Screen>
  );
};
