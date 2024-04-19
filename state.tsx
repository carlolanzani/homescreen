import { deepSignal } from "deepsignal";
import { JSX } from "preact/jsx-runtime";

// Takes an object and returns an array of objects with the key as the id
const idk = (o: Record<string, any>) =>
  Object.entries(o).map(([id, v]) => ({
    id,
    ...v,
  }));

type State = {
  view: "home" | "app";
  runningApps: Record<
    string,
    {
      Component: (props: any) => JSX.Element;
      order: number;
    }
  >;
  runningAppsArray: {
    id: string;
    Component: (props: any) => JSX.Element;
    order: number;
  }[];
  installedApps: Record<
    string,
    {
      name: string;
      icon: string;
    }
  >;
  installedAppsArray: {
    id: string;
    name: string;
    icon: string;
  }[];
};

export const state = deepSignal<State>({
  view: "home",
  runningApps: {},
  get runningAppsArray(): State["runningAppsArray"] {
    return idk(state.runningApps);
  },
  installedApps: {
    playground: {
      name: "Playground",
      icon: "Icon=Settings.png",
    },
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
  },
  get installedAppsArray(): State["installedAppsArray"] {
    return idk(state.installedApps);
  },
});
