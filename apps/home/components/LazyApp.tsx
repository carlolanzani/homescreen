import { useState, useEffect } from "preact/hooks";
import { JSX } from "preact/jsx-runtime";
import { App } from "../state/apps";

export const LazyApp = (props: { app: App }) => {
  const { app } = props;
  const [Component, setComponent] = useState<(props: any) => JSX.Element>(
    () => () => <div class="bg-transparent"></div>
  );
  useEffect(() => {
    app.mod().then((x) => setComponent(() => x.default));
  }, []);
  return <Component />;
};
