import { Icon } from "../elements/Icon";
import { Screen } from "../components/Screen";
import { Center, Left, Nav, Right } from "../components/Nav";
import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { Footer } from "../components/Footer";
import { OverscrollScale } from "../components/OverscrollScale";

export default () => {
  return (
    <Screen>
      <Header transparent>
        <Nav pill>
          <Left>
            <button class="row aic text-blue-500">
              <Icon id="chevron-backward" size="8" />
              <span>Back</span>
            </button>
          </Left>
          <Center>
            <h1 class="text-lg">Settings</h1>
          </Center>
          <Right>
            <button class="row aic text-blue-500">
              <Icon id="plus" size="8" />
            </button>
          </Right>
        </Nav>
      </Header>
      <Main class="pb-footer">
        <OverscrollScale>
          <img
            class="rounded-b-3xl aspect-[5/7] w-full object-cover"
            src="/images/image.jpeg"
          />
        </OverscrollScale>
        <article class="col p-6 gap-3">
          <h2 class="mt-2 text-4xl font-bold">
            Lorem ipsum dolor sit amet, consectetur
          </h2>
          <h3 class="font-semibold text-white/50">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
            sequi?
          </h3>
          <p class="font-light text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
            quasi quidem mollitia porro vero deserunt expedita. Beatae a eum et
            aspernatur ipsa vel perferendis possimus illum blanditiis natus
            earum velit officia veritatis repudiandae.
          </p>
          <p class="font-light text-white/90">
            Autem laboriosam magnam placeat qui maiores in dolor porro,
            temporibus alias consequuntur voluptatibus ad! ipsa!
          </p>
          <p class="font-light text-white/80">
            Libero iusto tempore minima exercitationem cum modi esse, iure, a
            dolorem facilis molestiae tempora alias magnam, blanditiis
            voluptatum corporis. Inventore culpa quae exercitationem fugiat et
            nihil deserunt nemo totam ducimus autem repellendus corrupti, minus
            facilis reiciendis ratione quos illo error maiores recusandae itaque
            iste. Dolorum ullam alias possimus amet ipsa, aspernatur optio quis
            perspiciatis, illum, voluptatum suscipit magni corporis. Voluptates
            reprehenderit numquam aliquam magnam nihil corporis odio?
          </p>
        </article>
      </Main>
      <Footer>
        <Nav class="pb-0 pt-3">
          <Center>
            <button class="col aic text-white">
              <Icon id="home" size="8" />
              <span class="text-xs">Home</span>
            </button>
            <button class="col aic">
              <Icon id="search" size="8" />
              <span class="text-xs">Search</span>
            </button>
            <button class="col aic">
              <Icon id="person" size="8" />
              <span class="text-xs">Profile</span>
            </button>
          </Center>
        </Nav>
      </Footer>
    </Screen>
  );
};
