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
            <Icon id="plus" size="8" />
          </Right>
        </Nav>
      </Header>
      <Main class="pt-header pb-footer px-4 overflow-y-scroll">
        <h1 class="text-4xl font-bold pb-4 border-(b white/10)">Alarms</h1>
        <div class="col mt-1">
          <div class="row aic pb-1 border(b white/10) text-white">
            <Icon id="bed-double-fill" size="8" />
            <h2 class="text-lg font-bold leading-none">Sleep | WakeUp</h2>
          </div>
          <div class="row aic gap-2 py-3 border-(b white/10)">
            <h2 class="text-5xl text-neutral-500 font-light flex-1">
              No Alarm
            </h2>
            <button class="bg-neutral-800 text-yellow-600 px-2 py-1 rounded-3xl text-xs font-semibold">
              CHANGE
            </button>
          </div>
        </div>
        <div class="col mt-6">
          <h2 class="text-lg font-bold pb-2 border(b white/10)">Other</h2>
          <div class="col">
            {[
              "04:00",
              "05:00",
              "06:00",
              "07:00",
              "08:00",
              "09:00",
              "10:00",
              "11:00",
            ].map((alarm) => {
              const enabled = Math.random() > 0.5;
              return (
                <div class="row aic gap-2 py-2 pb-3 border-(b white/10)">
                  <div
                    class={`flex-1 col text-${
                      enabled ? "neutral-100" : "neutral-500"
                    }`}
                  >
                    <h2 class="text-6xl font-extralight">{alarm}</h2>
                    <p class="text-sm font-light">Alarm, Wed and Fri</p>
                  </div>
                  <Switch checked={enabled} />
                </div>
              );
            })}
          </div>
        </div>
      </Main>
    </Screen>
  );
};
