import { Body, Footer, Header, Screen } from "./components/screen";
import { Button } from "./components/button";
import { List } from "./components/list";
import { Card } from "./components/card";
import { Nav, Left, Back, Center, Right } from "./components/nav";
import { Icon } from "../../elements/Icon";

const links = [
  { to: "/", icon: "home", label: "Today" },
  { to: "/games", icon: "heart", label: "Games" },
  { to: "/games", icon: "heart", label: "Apps" },
  { to: "/posts", icon: "globe", label: "Arcade" },
  { to: "/posts", icon: "search", label: "Search" },
];

export default () => {
  return <Games />;
};

const Games = () => {
  return (
    <Screen gutter="5" gap="5" class="overflow-y-scroll bg-[#0e0e0e]">
      <Header class="sticky top-0 bg-black/80 text-blue-500">
        <Nav>
          <Left>
            <Back to="/">Back</Back>
          </Left>
          <Center class="text-white font-medium">Games</Center>
          <Right>
            <Button>
              <Icon id="button-border-dashed" size="6" />
            </Button>
          </Right>
        </Nav>
      </Header>
      <Body>
        <div class="row aic">
          <h1 class="text-(4xl white) font-bold flex-1 leading-[1cap]">
            Games
          </h1>
          <img
            class="flex-none w-9 h-9 rounded-full overflow-hidden"
            src="/images/avatar.jpg"
            alt=""
          />
        </div>
        <List class="row gap-2 overflow-x-scroll">
          <Button x={{ type: "b" }} />
          <Button x={{ type: "b" }} />
          <Button x={{ type: "b" }} />
          <Button x={{ type: "b" }} />
          <Button x={{ type: "b" }} />
        </List>
        <List class="row gap-2.5 overflow-x-scroll snap-(x mandatory) children:(flex-none snap-center w-full min-w-full)">
          <Card x={{ type: "a" }} />
          <Card x={{ type: "a" }} />
          <Card x={{ type: "a" }} />
          <Card x={{ type: "a" }} />
        </List>
        <div class="-mb-2">
          <hr class="border-(t neutral-800) my-2" />
          <div class="col">
            <div class="flex-1 row aic">
              <h2 class="flex-1 text-(xl neutral-100) font-semibold">
                What We're Playing
              </h2>
              <button class="text-blue-500">See All</button>
            </div>
            <h3 class="text-(sm neutral-400) font-light">
              Great games selected by our editors
            </h3>
          </div>
        </div>
        <List class="row gap-2.5 overflow-x-scroll snap-(x mandatory) children:(snap-center w-full min-w-full)">
          <div class="col gap-2">
            <Card x={{ type: "b" }} />
            <Card x={{ type: "b" }} />
            <Card x={{ type: "b" }} />
          </div>
          <div class="col gap-2">
            <Card x={{ type: "b" }} />
            <Card x={{ type: "b" }} />
            <Card x={{ type: "b" }} />
          </div>
          <div class="col gap-2">
            <Card x={{ type: "b" }} />
            <Card x={{ type: "b" }} />
            <Card x={{ type: "b" }} />
          </div>
        </List>
        <div class="-mb-3">
          <hr class="border-(t neutral-800) my-2" />
          <h2 class="flex-1 text-(xl neutral-200) font-semibold">
            Events You Might Like
          </h2>
        </div>
        <List class="row gap-2.5 overflow-x-scroll snap-(x mandatory) children:(snap-center min-w-full)">
          <Card x={{ type: "c" }} />
          <Card x={{ type: "c" }} />
          <Card x={{ type: "c" }} />
          <Card x={{ type: "c" }} />
        </List>
        <div class="-mb-5">
          <hr class="border-(t neutral-800) my-1" />
          <h2 class="flex-1 text-(xl neutral-200) font-semibold">
            Our Top Ten...
          </h2>
        </div>
        <List class="row gap-2.5 overflow-x-scroll snap-(x mandatory) scroll-p-6 children:(snap-start min-w-[62%])">
          <Card x={{ type: "d" }} />
          <Card x={{ type: "d" }} />
          <Card x={{ type: "d" }} />
          <Card x={{ type: "d" }} />
        </List>
        <div class="-mb-4">
          <hr class="border-(t neutral-800) my-2" />
          <div class="flex-1 row aic">
            <h2 class="flex-1 text-(xl neutral-200) font-semibold">
              Browse Categories
            </h2>
            <button class="text-blue-500">See All</button>
          </div>
        </div>
        <List class="row gap-2.5 overflow-x-scroll snap-(x mandatory) children:(snap-center w-full min-w-full grid grid-cols-2 gap-2)">
          <div>
            <Card x={{ type: "e" }} />
            <Card x={{ type: "e" }} />
            <Card x={{ type: "e" }} />
            <Card x={{ type: "e" }} />
          </div>
          <div>
            <Card x={{ type: "e" }} />
            <Card x={{ type: "e" }} />
            <Card x={{ type: "e" }} />
            <Card x={{ type: "e" }} />
          </div>
          <div>
            <Card x={{ type: "e" }} />
            <Card x={{ type: "e" }} />
            <Card x={{ type: "e" }} />
            <Card x={{ type: "e" }} />
          </div>
        </List>
      </Body>
      <Footer class="fixed bottom-0 w-full p-2 pb-9 row aic jcsa text-(xs blue-500) bg-black/20 backdrop-blur-xl">
        {links.map((link) => (
          <Button x={{ type: "a", ...link }} />
        ))}
      </Footer>
    </Screen>
  );
};
