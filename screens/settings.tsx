import { Icon } from "../elements/Icon";
import { Screen } from "../components/Screen";
import { Center, Nav } from "../components/Nav";
import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { css, cx } from "@twind/core";
import { Switch } from "../elements/Switch";

export default () => {
  return (
    <Screen class="!bg-[#020202]">
      <Header class="opacity-0">
        <Nav>
          <Center>
            <h1 class="text-lg font-semibold -mb-2.5 pt-1">Settings</h1>
          </Center>
        </Nav>
      </Header>
      <Main class="pt-header pb-safe-b p-4 gap-4">
        <h1 class="font-bold text-[36px] -mb-4">Settings</h1>
        <div class="relative row aic text-neutral-500 placeholder:text-neutral-500">
          <Icon id="search" size="7" class="absolute left-0.5" />
          <input
            type="text"
            class="w-full px-3 py-1 bg-[#1c1c1e] rounded-lg pl-8 text-lg"
            placeholder={"Search"}
          />
        </div>
        <div class="row aic gap-4 bg-[#1c1c1e] px-2 py-2 rounded-xl">
          <img
            src="/images/avatar.jpg"
            class="flex-none w-16 h-16 rounded-full"
          />
          <div>
            <h2 class="text-lg text-white">Luke Jackson</h2>
            <p class="text-xs text-neutral-300">
              Apple ID, iCloud, Media & Purchases
            </p>
          </div>
          <Icon id="chevron-forward" size="7" class="text-neutral-500" />
        </div>
        {groups.map((group, i) => (
          <MenuList items={group} />
        ))}
      </Main>
    </Screen>
  );
};

const MenuList = (props: { items: any[] }) => {
  return (
    <ul class="w-full bg-[#1c1c1e] py-1 px-3 rounded-xl children:(w-full row aic gap-4)">
      {props.items.map((item) => (
        <MenuItem {...item} />
      ))}
    </ul>
  );
};

const MenuItem = (props: {
  icon: string;
  title: string;
  value: string | boolean;
  fill: string;
}) => {
  return (
    <li
      class={css`
        &:not(:last-child) > div {
          @apply border-b border-white/10;
        }
      `}
    >
      <Icon
        id={props.icon}
        size="7"
        class={`bg-${props.fill} rounded-[6px] p-0.5`}
      />
      <div class="row aib flex-1 pb-2.5 pt-2">
        <span class="flex-1">{props.title}</span>
        {typeof props.value === "boolean" ? (
          <Switch checked={props.value} />
        ) : (
          <div class="row aic">
            <span class="text-(sm neutral-500) font-light">{props.value}</span>
            <Icon id="chevron-forward" size="5" class="text-neutral-700" />
          </div>
        )}
      </div>
    </li>
  );
};

const groups = [
  [
    {
      icon: "airplane",
      title: "Airplane Mode",
      value: true,
      fill: "orange-400",
    },
    {
      icon: "wifi",
      title: "Wi-Fi",
      value: "lukejacksonn_5G",
      fill: "blue-600",
    },
    {
      icon: "bluetooth",
      title: "Bluetooth",
      value: "On",
      fill: "blue-600",
    },
    {
      icon: "antenna-radiowaves-left-and-right",
      title: "Mobile Services",
      fill: "green-600",
    },
    {
      icon: "personalhotspot",
      title: "Personal Hotspot",
      fill: "green-600",
    },
    {
      icon: "globe",
      title: "VPN",
      fill: "blue-500",
    },
  ],
  [
    {
      icon: "bell-badge-fill",
      title: "Notifications",
      fill: "red-500",
    },
    {
      icon: "speaker-wave-2-fill",
      title: "Sounds & Haptics",
      fill: "pink-600",
    },
    {
      icon: "moon-fill",
      title: "Focus",
      fill: "purple-700",
    },
    {
      icon: "hourglass",
      title: "Screen Time",
      fill: "purple-700",
    },
  ],
  [
    {
      icon: "gear",
      title: "General",
      fill: "neutral-500",
    },
    {
      icon: "sun-max-fill",
      title: "Display & Brightness",
      fill: "blue-600",
    },
    {
      icon: "square-grid-3x3-square",
      title: "Home Screen & App Library",
      fill: "purple-700",
    },
    {
      icon: "accessibility",
      title: "Accessibility",
      fill: "blue-500",
    },
    {
      icon: "wallpaper",
      title: "Wallpaper",
      fill: "cyan-500",
    },
    {
      icon: "battery-75",
      title: "Battery",
      fill: "green-500",
    },
    {
      icon: "hand-raised-fill",
      title: "Privacy & Security",
      fill: "blue-600",
    },
  ],
  [
    {
      icon: "key-fill",
      title: "Passwords",
      fill: "neutral-600",
    },
  ],
];
