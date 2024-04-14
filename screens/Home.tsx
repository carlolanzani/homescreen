import { useState } from "preact/hooks";
import { Footer } from "../components/Footer";
import { Main } from "../components/Main";
import { Center, Nav } from "../components/Nav";
import { Screen } from "../components/Screen";

const AppIcon = (props: { name?: string; icon: string }) => {
  return (
    <div class="col aic gap-1 px-0.5">
      <img src={`/images/${props.icon}`} alt={props.name} />
      {props.name && <p class="text-center text-xs">{props.name}</p>}
    </div>
  );
};

export const Home = () => {
  const [apps, setApps] = useState(installed);
  const list = Object.entries(apps)
    .map(([id, v]) => ({ id, ...v }))
    .sort(() => (Math.random() > 0.5 ? 1 : -1));
  let split = rand(5, list.length - 2);
  return (
    <>
      <Screen>
        <img src="/images/image.jpeg" class="absolute inset-0 w-full h-full" />
        <Main class="pt-safe-t backdrop-blur-lg pb-footer">
          <div class="relative flex-1 col">
            <div class="flex-1 row overflow-x-scroll snap-x snap-mandatory children:(snap-center snap-always)">
              <div class="w-full flex-none grid grid-cols-4 grid-rows-6 p-6 gap-x-6">
                {list.slice(0, split).map((app) => (
                  <AppIcon {...app} />
                ))}
              </div>
              <div class="w-full flex-none grid grid-cols-4 grid-rows-6 p-6 gap-x-6">
                {list.slice(split).map((app) => (
                  <AppIcon {...app} />
                ))}
              </div>
            </div>
            <div class="self-center row gap-2 py-2.5 px-4 rounded-full bg-black/20 children:(w-2 h-2 bg-white/50 rounded-full) mb-1">
              <div class="!bg-white"></div>
              <div></div>
            </div>
          </div>
        </Main>
        <Footer transparent class="!pb-4">
          <Nav>
            <Center class="gap-6 bg-black/20 py-3 px-4 rounded-3xl">
              <AppIcon icon="Icon=Mail.png" />
              <AppIcon icon="Icon=Phone.png" />
              <AppIcon icon="Icon=Message.png" />
              <AppIcon icon="Icon=Safari.png" />
            </Center>
          </Nav>
        </Footer>
      </Screen>
    </>
  );
};

const rand = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const installed = {
  settings: {
    name: "Settings",
    icon: "Icon=Settings.png",
  },
  calculator: {
    name: "Calculator",
    icon: "Icon=Calculator.png",
  },
  camera: {
    name: "Camera",
    icon: "Icon=Camera.png",
  },
  weather: {
    name: "Weather",
    icon: "Icon=Weather.png",
  },
  music: {
    name: "Music",
    icon: "Icon=Music.png",
  },
  photos: {
    name: "Photos",
    icon: "Icon=Photos.png",
  },
  clock: {
    name: "Clock",
    icon: "Icon=Clock.png",
  },
  maps: {
    name: "Maps",
    icon: "Icon=Maps.png",
  },
  notes: {
    name: "Notes",
    icon: "Icon=Notes.png",
  },
  news: {
    name: "News",
    icon: "Icon=News.png",
  },
  health: {
    name: "Health",
    icon: "Icon=Health.png",
  },
  wallet: {
    name: "Wallet",
    icon: "Icon=Wallet.png",
  },
  safari: {
    name: "Safari",
    icon: "Icon=Safari.png",
  },
  mail: {
    name: "Mail",
    icon: "Icon=Mail.png",
  },
  phone: {
    name: "Phone",
    icon: "Icon=Phone.png",
  },
  message: {
    name: "Message",
    icon: "Icon=Message.png",
  },
  facetime: {
    name: "FaceTime",
    icon: "Icon=Facetime.png",
  },
  appstore: {
    name: "App Store",
    icon: "Icon=AppStore.png",
  },
  files: {
    name: "Files",
    icon: "Icon=Files.png",
  },
  podcast: {
    name: "Podcast",
    icon: "Icon=Podcast.png",
  },
  tv: {
    name: "TV",
    icon: "Icon=TV.png",
  },
  home: {
    name: "Home",
    icon: "Icon=Home.png",
  },
  reminders: {
    name: "Reminders",
    icon: "Icon=Reminders.png",
  },
  findmy: {
    name: "Find My",
    icon: "Icon=FindMy.png",
  },
};
