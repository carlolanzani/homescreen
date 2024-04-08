import { Icon } from "../elements/Icon";
import { Screen } from "../components/Screen";
import { Center, Left, Nav, Right } from "../components/Nav";
import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { Footer } from "../components/Footer";

export const One = () => {
  return (
    <Screen>
      <Header fixed transparent>
        <Nav pill>
          <Left>
            <button class="row aic text-blue-500">
              <Icon id="chevron-backward" size="8" />
              <span>Back</span>
            </button>
          </Left>
          <Center>
            <h1 class="text-lg">Screen Title</h1>
          </Center>
          <Right>
            <button class="row aic text-blue-500">
              <Icon id="plus" size="8" />
            </button>
          </Right>
        </Nav>
      </Header>
      <Main class="gap-6">
        <img class="rounded-b-3xl" src="/images/image.jpeg" />
        <article class="col p-4 gap-3">
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
        <img class="rounded-b-3xl aspect-[19/6]" src="/images/image.jpeg" />
      </Main>
      <Footer fixed transparent>
        <Nav pill>
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
