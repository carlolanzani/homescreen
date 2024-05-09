import "/twind.config";

import { render, ComponentChildren } from "preact";
import Home from "./apps/home";

render(<Home />, document.body);

export type Children = ComponentChildren | ComponentChildren[];
