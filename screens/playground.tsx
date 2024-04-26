import { Footer } from "../components/Footer";
import { Center, Nav } from "../components/Nav";
import { Screen } from "../components/Screen";
import { ScreenScroller } from "../components/ScreenScroller";

export default () => {
  return (
    <Screen class="text-white">
      <Footer transparent class="!pb-4">
        <Nav>
          <Center class="gap-6 bg-black/20 py-3.5 px-4 rounded-3xl"></Center>
        </Nav>
      </Footer>
      <ScreenScroller>
        <Screen class="bg-red-500 z-10"></Screen>
        <Screen class="bg-transparent" data-fixed="right"></Screen>
        <Screen class="bg-transparent"></Screen>
        <Screen class="bg-transparent" data-fixed="left"></Screen>
        <Screen class="bg-teal-500 z-10"></Screen>
      </ScreenScroller>
      <div id="output_log" class="fixed top-16 left-16"></div>
    </Screen>
  );
};

const log = (msg: string) => {
  const el = document.getElementById("output_log");
  if (el) {
    el.innerText = msg;
  }
};
