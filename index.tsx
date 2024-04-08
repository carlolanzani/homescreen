import "/twind.config";
import { render } from "preact";

import { One } from "./screens/one";

const App = () => {
  return (
    <div class="w-full h-full flex snap-x snap-mandatory children:snap-center overflow-x-auto">
      <One />
    </div>
  );
};

render(<App />, document.body);
