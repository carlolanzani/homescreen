import { Screen } from "./components/Screen";
import { One } from "./screens/one";
import "/twind.config";
import { render } from "preact";

// import { One } from "./screens/one";

const App = () => {
  // return null;
  // return <Screen>hello</Screen>;
  return <One />;
};

render(<App />, document.body);
