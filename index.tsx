import "/twind.config";
import { render } from "preact";

import { Home } from "./screens/Home";

const App = () => {
  return <Home />;
};

render(<App />, document.body);
