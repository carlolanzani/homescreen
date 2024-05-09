import { Screen } from "../components/Screen";
import { Main } from "../components/Main";
import { Icon } from "../elements/Icon";
import { Header } from "../components/Header";
import { Center, Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { useState } from "preact/hooks";

const tabs = {
  library: {
    name: "Library",
    icon: "photo-stack",
  },
  foryou: {
    name: "For You",
    icon: "heart-text-square-fill",
  },
  albums: {
    name: "Albums",
    icon: "rectangle-stack",
  },
  search: {
    name: "Search",
    icon: "search",
  },
};

export default () => {
  const [tab, setTab] = useState("foryou");
  return (
    <Screen class="!bg-[#020202]">
      {tab === "library" && <Library />}
      {tab === "foryou" && <ForYou />}
      <Footer class="col gap-2 text-white !pb-0">
        <Nav class="bg-black/50 backdrop-blur-lg pb-9 pt-0 text-neutral-400">
          <Center class="children:(col aic text-[10px])">
            {Object.entries(tabs).map(([key, value]) => (
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

const Library = () => {
  return (
    <>
      <Header transparent class="bg-gradient-to-b from-black/100 to-black/0">
        <div class="w-full row aifs gap-2 px-6 pt-3 pb-4">
          <div class="w-full col flex-1 gap-1">
            <span class="text-xl font-bold">19 Apr–7 May 2024</span>
            <span class="font-semibold">Scunthorpe - Holme & more</span>
          </div>
          <button class="bg-white/10 backdrop-blur-lg text-xs px-4 h-7 rounded-2xl font-semibold">
            Select
          </button>
          <button class="w-7 h-7 col aic jcc bg-white/10 backdrop-blur-lg rounded-full pb-2 font-bold">
            ...
          </button>
        </div>
      </Header>
      <Main class="h-screen pt-header pb-footer overflow-y-scroll col overflow-y-scroll">
        <div class="grid grid-cols-5 auto-rows-min gap-0.5">
          {Array.from({ length: 54 }).map((x, i) => (
            <img
              src={`https://source.unsplash.com/random/?${i}`}
              alt="Camera"
              class="w-full aspect-square object-cover"
            />
          ))}
        </div>
        <div class="w-full text-center p-4 pb-6 text-sm font-medium">
          3,042 Photos, 125 Videos
        </div>
        <div class="w-full row aic jcc sticky bottom-2">
          <div class="row bg-neutral-800/40 backdrop-blur-lg rounded-3xl p-1 children:(font-semibold whitespace-nowrap px-4 py-1 rounded-3xl text-(base neutral-300))">
            <button>Years</button>
            <button>Months</button>
            <button>Days</button>
            <button class="bg-white/20 !text-white">All Photos</button>
          </div>
        </div>
      </Main>
    </>
  );
};

const ForYou = () => {
  return (
    <>
      <Header transparent></Header>
      <Main class="h-screen pt-header pb-footer overflow-y-scroll col gap-7">
        <h1 class="text-4xl font-bold pt-11 mx-4 -mb-6">For You</h1>
        <div class="col gap-3">
          <div class="row aife ml-4 pr-4 pt-3 border-(t white/10)">
            <h1 class="flex-1 text-2xl font-semibold leading-none">Memories</h1>
            <button class="text-blue-500 text-base font-medium">See All</button>
          </div>
          <div class="px-4 row overflow-y-scroll snap-x snap-mandatory gap-2 children:(relative flex-none col w-full snap-center)">
            {Array.from({ length: 4 }).map((x, i) => (
              <div>
                <img
                  src={`https://source.unsplash.com/random/?${i}`}
                  alt="Camera"
                  class="relative w-full aspect-[21/27] object-cover rounded-2xl"
                />
                <div class="absolute row children:(flex-none text-white) top-4 right-4 z-10">
                  <Icon id="heart" size="8" />
                  <Icon id="ellipsis-circle-outline" size="8" />
                </div>
                <div class="absolute w-full h-full flex px-8 pb-6 pt-16">
                  <div class="mt-auto">
                    <h2 class="font-(mono bold) text-2xl">On This Day</h2>
                    <p class="tracking-widest uppercase text-xs">
                      MAR 2024 Trip
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div class="col gap-3">
          <div class="row aife ml-4 pr-4 pt-4 border-(t white/10)">
            <h1 class="flex-1 text-2xl font-semibold leading-none">
              Featured Photos
            </h1>
          </div>
          <div class="px-4 row overflow-y-scroll snap-x snap-mandatory gap-2 children:(relative flex-none col w-full snap-center)">
            {Array.from({ length: 4 }).map((x, i) => (
              <div class="col gap-1">
                <img
                  src={`https://source.unsplash.com/random/?${i + 10}`}
                  alt="Camera"
                  class="relative w-full aspect-square object-cover rounded-lg"
                />
                <div>
                  <h2 class="font-bold text-base">On This Day</h2>
                  <p class="text-(sm neutral-500)">30 Mar 2024</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div class="col gap-4">
          <div class="row aife ml-4 pr-4 pt-4 border-(t white/10)">
            <h1 class="flex-1 text-2xl font-semibold leading-none">
              Shared with You
            </h1>
            <button class="text-blue-500 text-base font-medium">See All</button>
          </div>
          <div class="px-4 row overflow-y-scroll snap-x snap-mandatory scroll-p-4 gap-2 children:(relative flex-none col w-8/12 snap-start)">
            {Array.from({ length: 4 }).map((x, i) => (
              <div class="col aifs jcfs gap-2">
                <img
                  src={`https://source.unsplash.com/random?${i + 20}`}
                  alt="Camera"
                  class="w-full aspect-square object-cover rounded-2xl"
                />
                <div class="row aic gap-1 bg-neutral-900 rounded-3xl p-1">
                  <img
                    src={`https://source.unsplash.com/random?${i + 30}`}
                    alt="Camera"
                    class="flex-none w-4 aspect-square object-cover rounded-full"
                  />
                  <p class="text-(xs neutral-500) text-white">From Iris</p>
                  <Icon
                    id="chevron-forward"
                    size="4"
                    class="-ml-1 text-neutral-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div></div>
      </Main>
    </>
  );
};
