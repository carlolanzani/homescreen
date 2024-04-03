import "/twind.config";
import { render } from "preact";

import { Screen } from "./components/Screen";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";

const App = () => {
  return (
    <div class="w-full h-full flex snap-x snap-mandatory children:snap-center overflow-x-auto">
      <Screen>
        <Header />
        <Main />
        <Footer />
      </Screen>
      <Screen>
        <Header class="fixed" />
        <Main />
      </Screen>
      <Screen>
        <Header></Header>
        <Main />
      </Screen>
      <Screen>
        <Main />
        <Footer></Footer>
      </Screen>
    </div>
  );
};

render(<App />, document.body);
