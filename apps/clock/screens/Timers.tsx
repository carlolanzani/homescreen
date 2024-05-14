import { Header } from "../../../components/Header";
import { Main } from "../../../components/Main";
import { Nav, Left, Right } from "../../../components/Nav";
import { Screen } from "../../../components/Screen";
import { Icon } from "../../../elements/Icon";
import { Switch } from "../../../elements/Switch";

export default () => {
  return (
    <Screen class="!bg-[#020202]">
      <Header class="!bg-inherit !border-none">
        <Nav class="text-yellow-600 pb-0 px-4 pr-2">
          <Left>
            <button class="text-base">Edit</button>
          </Left>
          <Right>
            <Icon id="plus" size="8" class="text-transparent" />
          </Right>
        </Nav>
      </Header>
      <Main class="pt-header pb-footer px-4 overflow-y-scroll">
        <h1 class="text-4xl font-bold pb-2.5 border-(b white/10)">Timers</h1>
        <div class="row aic jcc h-64"></div>
        <div class="row aic jcsb">
          <button class="bg-neutral-600 w-20 h-20 rounded-full">Reset</button>
          <div class="row gap-2">
            <div class="w-2 h-2 rounded-full bg-white"></div>
            <div class="w-2 h-2 rounded-full bg-white/40"></div>
          </div>
          <button class="bg-green-900/80 text-green-500 w-20 h-20 rounded-full">
            Start
          </button>
        </div>
      </Main>
    </Screen>
  );
};
