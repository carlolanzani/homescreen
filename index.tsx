import "/twind.config";

import { cx } from "@twind/core";
import { render } from "preact";

import { state } from "./state";
import { Screen } from "./components/Screen";

import Home from "./screens/home";

const App = () => {
  const runningApps = state.$runningAppsArray!.value;
  return (
    <>
      <Home />
      <Screen
        class={cx(
          state.$view!.value === "home"
            ? "opacity-0 pointer-events-none"
            : "opacity-100"
        )}
      >
        {runningApps.map(({ Component, id, order }) => (
          <div key={id} class={`relative z-[${order}]`}>
            <Component key={id} />
          </div>
        ))}
      </Screen>
      <button
        class="fixed bottom-0 h-6 w-full z-10"
        onClick={() => (state.$view!.value = "home")}
      />
    </>
  );
};

render(<App />, document.body);
