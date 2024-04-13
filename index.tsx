import "/twind.config";
import { render } from "preact";

import { One } from "./screens/one";

const App = () => {
  return <One />;
};

render(<App />, document.body);
