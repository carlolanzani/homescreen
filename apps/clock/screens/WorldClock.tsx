import { Screen } from "../../../components/Screen";
import { Header } from "../../../components/Header";
import { Main } from "../../../components/Main";
import { Nav, Left, Right } from "../../../components/Nav";
import { Icon } from "../../../elements/Icon";
import { state } from "../state";
import { vals } from "../../../components/ScreenStack";

export default () => {
  const now = new Date();
  return (
    <Screen class="!bg-[#020202]">
      <Header class="!bg-inherit !border-none">
        <Nav class="text-yellow-600 pb-0 px-4">
          <Left>
            <button class="text-base">Edit</button>
          </Left>
          <Right>
            <button class="-mr-2">
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
            const local = {
              hour: parseInt(
                new Intl.DateTimeFormat(undefined, {
                  hour: "numeric",
                  timeZone: clock.timeZone,
                }).format(now)
              ),
              day: parseInt(
                new Intl.DateTimeFormat(undefined, {
                  day: "numeric",
                  timeZone: clock.timeZone,
                }).format(now)
              ),
            };

            return (
              <div class="row gap-2 py-4 border-(b white/10)">
                <div class="flex-1 col">
                  <p class="text-sm font-light text-neutral-400">
                    {getTodayYesterdayTomorrow(local)}
                    {", "}
                    {getTimezoneOffset(now, clock.timeZone)}
                  </p>
                  <h2 class="text-3xl">{clock.city}</h2>
                </div>
                <span class="text-6xl font-extralight">
                  {new Intl.DateTimeFormat(undefined, {
                    hour: "numeric",
                    minute: "numeric",
                    timeZone: clock.timeZone,
                  }).format(now)}
                </span>
              </div>
            );
          })}
        </div>
      </Main>
    </Screen>
  );
};

const getTodayYesterdayTomorrow = (local: { hour: number; day: number }) => {
  const day = parseInt(
    new Intl.DateTimeFormat(undefined, {
      day: "numeric",
    }).format(new Date())
  );
  return local.day === day
    ? "Today"
    : local.day < day
    ? "Yesterday"
    : "Tomorrow";
};

// Return offset on date for loc in ±H[:mm] format.
const getTimezoneOffset = (date: Date, loc: string) => {
  return `${
    new Intl.DateTimeFormat("en-US", {
      timeZone: loc,
      timeZoneName: "shortOffset",
    })
      .formatToParts(date)
      .filter((e) => e.type === "timeZoneName")[0]
      .value.match(/([\+|\-]\d+)/)?.[1]
  }HRS`;
};
