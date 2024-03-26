import { render } from "preact";

import "/twind.config";
import { css, cx } from "@twind/core";

const Screen = (props) => {
  return (
    <div
      class={cx(
        "w-screen h-screen flex-none col overflow-hidden",
        css`
          main {
            @apply col pt-safe pb-safe px-4 h-full flex-1 overflow-y-auto;
          }
          header {
            @apply pt-safe px-2 row aic;
            & > button {
              @apply min-w-0 flex-1;
              &:first-child {
                @apply jcfs;
              }
              &:last-child {
                @apply jcfe;
              }
            }
          }
          footer {
            @apply pb-safe px-2 row aic jcc;
          }
          &:has(header) main {
            @apply pt-4;
          }
          &:has(footer) main {
            @apply pb-4;
          }
        `
      )}
    >
      {props.children}
    </div>
  );
};

const Header = (props) => {
  return (
    <header class="w-full jcsb pb-2 bg-neutral-800">
      <button class="row aic">
        <Icon id="chevron-backward" size="8" fill="white" />
        <span>Back</span>
      </button>
      <h1>Screen Title</h1>
      <button class="row aic">
        <span>Add</span>
        <Icon id="chevron-forward" size="8" fill="white" />
      </button>
    </header>
  );
};

const Icon = (props) => {
  return (
    <svg
      class={cx(
        `w-${props.size} h-${props.size} children:(w-full h-full)`,
        `text-${props.fill}`,
        props.class
      )}
    >
      <use href={`/icons/${props.id}.svg#icon`} />
    </svg>
  );
};

const Footer = (props) => {
  return (
    <footer class="w-full jcsa pt-2 bg-neutral-800">
      <button class="col aic">
        <Icon id="home" size="8" fill="white" />
        <span class="text-xs">Home</span>
      </button>
      <button class="col aic">
        <Icon id="search" size="8" fill="white" />
        <span class="text-xs">Search</span>
      </button>
      <button class="col aic">
        <Icon id="person" size="8" fill="white" />
        <span class="text-xs">Profile</span>
      </button>
    </footer>
  );
};

const App = () => {
  return (
    <div class="w-full h-full flex snap-x snap-mandatory children:snap-center overflow-x-auto">
      <Screen>
        <Header />
        <main class="bg-neutral-900 col gap-4">
          <img
            class="rounded-2xl"
            src="https://source.unsplash.com/random/800x800"
          />
          <h2 class="text-4xl font-bold">
            Lorem ipsum dolor sit amet, consectetur
          </h2>
          <h3 class="text-normal font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
            sequi?
          </h3>
          <p class="font-light">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
            quasi quidem mollitia porro vero deserunt expedita. Beatae a eum et
            aspernatur ipsa vel perferendis possimus illum blanditiis natus
            earum velit officia veritatis repudiandae ab obcaecati fuga alias
            inventore voluptatem, sunt qui ipsam sapiente?
          </p>
          <p class="font-light">
            Autem laboriosam magnam placeat qui maiores in dolor porro,
            temporibus alias consequuntur voluptatibus ad! ipsa!
          </p>
          <p class="font-light">
            Libero iusto tempore minima exercitationem cum modi esse, iure, a
            dolorem facilis molestiae tempora alias magnam, blanditiis
            voluptatum corporis. Inventore culpa quae exercitationem fugiat et
            nihil deserunt nemo totam ducimus autem repellendus corrupti, minus
            facilis reiciendis ratione quos illo error maiores recusandae itaque
            iste. Dolorum ullam alias possimus amet ipsa, aspernatur optio quis
            perspiciatis, illum, voluptatum suscipit magni corporis. Voluptates
            reprehenderit numquam aliquam magnam nihil corporis odio?
          </p>
        </main>
        <Footer />
      </Screen>
      <Screen>
        <main>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
            eveniet ex repellendus sint ipsam fugit quidem quae adipisci
            assumenda perspiciatis culpa recusandae delectus possimus quod fuga
            cum quaerat nulla esse rerum blanditiis, laborum facilis expedita
            cupiditate illum? Nam blanditiis, nesciunt reiciendis incidunt sint
            expedita modi harum aliquam suscipit est pariatur neque ratione quae
            quas repellat vitae architecto amet. Velit id non debitis, nemo,
            omnis soluta mollitia atque doloribus ratione obcaecati perspiciatis
            recusandae sapiente? Eveniet autem cum dicta quibusdam alias
            nesciunt perspiciatis! Soluta magni, qui quis quam velit doloribus
            enim dignissimos quo eius, libero maiores temporibus omnis eligendi
            dolorum provident? Fuga voluptates asperiores autem earum totam.
            Dolores assumenda quae doloribus nesciunt voluptate, nam quod
            veritatis sint ipsum repellat dolor velit maiores ab neque
            architecto vel corrupti eligendi perspiciatis vero quaerat tempora.
            Rerum nemo doloremque alias quis, consectetur quam nulla sapiente
            eum similique necessitatibus eius corrupti iste minus molestias
            nesciunt eveniet? Aspernatur animi quaerat quas quisquam assumenda
            ipsum, amet exercitationem impedit accusantium nisi odit provident
            dolorum aliquam explicabo iste minus recusandae ab aliquid eligendi
            voluptates veniam doloribus quibusdam sed consectetur! Error cumque
            commodi impedit odit provident ipsum labore, rerum quas ea
            perferendis distinctio, quos quasi at quibusdam corrupti ratione,
            nulla veniam similique?
          </p>
        </main>
      </Screen>
      <Screen>
        <Header></Header>
        <main>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
            quasi quidem mollitia porro vero deserunt expedita. Beatae a eum et
            aspernatur ipsa vel perferendis possimus illum blanditiis natus
            earum velit officia veritatis repudiandae ab obcaecati fuga alias
            inventore voluptatem, sunt qui ipsam sapiente? Ullam dicta quisquam
            delectus in error corrupti maiores quos. Provident neque et fugit
            delectus fugiat corrupti dicta, laborum repellendus voluptatibus?
            Veritatis, molestiae laudantium accusamus sunt distinctio adipisci
            numquam a reprehenderit aliquam illum est voluptates in tempora
            eligendi magni rem molestias quos. Autem laboriosam magnam placeat
            qui maiores in dolor porro, temporibus alias consequuntur
            voluptatibus ad! Harum, doloribus consequuntur beatae cum totam
            nobis laboriosam, voluptatem quisquam repellat earum minus optio
            minima nulla! Illum eius molestiae quis nisi unde necessitatibus
            suscipit! Exercitationem numquam consequatur beatae necessitatibus
            culpa aliquid quidem minima a ipsa! Libero iusto tempore minima
            exercitationem cum modi esse, iure, a dolorem facilis molestiae
            tempora alias magnam, blanditiis voluptatum corporis. Inventore
            culpa quae exercitationem fugiat et nihil deserunt nemo totam
            ducimus autem repellendus corrupti, minus facilis reiciendis ratione
            quos illo error maiores recusandae itaque iste. Dolorum ullam alias
            possimus amet ipsa, aspernatur optio quis perspiciatis, illum,
            voluptatum suscipit magni corporis. Voluptates reprehenderit numquam
            aliquam magnam nihil corporis odio?
          </p>
        </main>
      </Screen>
      <Screen>
        <main>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
            quasi quidem mollitia porro vero deserunt expedita. Beatae a eum et
            aspernatur ipsa vel perferendis possimus illum blanditiis natus
            earum velit officia veritatis repudiandae ab obcaecati fuga alias
            inventore voluptatem, sunt qui ipsam sapiente? Ullam dicta quisquam
            delectus in error corrupti maiores quos. Provident neque et fugit
            delectus fugiat corrupti dicta, laborum repellendus voluptatibus?
            Veritatis, molestiae laudantium accusamus sunt distinctio adipisci
            numquam a reprehenderit aliquam illum est voluptates in tempora
            eligendi magni rem molestias quos. Autem laboriosam magnam placeat
            qui maiores in dolor porro, temporibus alias consequuntur
            voluptatibus ad! Harum, doloribus consequuntur beatae cum totam
            nobis laboriosam, voluptatem quisquam repellat earum minus optio
            minima nulla! Illum eius molestiae quis nisi unde necessitatibus
            suscipit! Exercitationem numquam consequatur beatae necessitatibus
            culpa aliquid quidem minima a ipsa! Libero iusto tempore minima
            exercitationem cum modi esse, iure, a dolorem facilis molestiae
            tempora alias magnam, blanditiis voluptatum corporis. Inventore
            culpa quae exercitationem fugiat et nihil deserunt nemo totam
            ducimus autem repellendus corrupti, minus facilis reiciendis ratione
            quos illo error maiores recusandae itaque iste. Dolorum ullam alias
            possimus amet ipsa, aspernatur optio quis perspiciatis, illum,
            voluptatum suscipit magni corporis. Voluptates reprehenderit numquam
            aliquam magnam nihil corporis odio?
          </p>
        </main>
        <Footer></Footer>
      </Screen>
    </div>
  );
};

render(<App />, document.body);
