import { DeepSignal, RevertDeepSignal, deepSignal } from "deepsignal";
import { Screen, screens } from "./screens";
import { Signal } from "@preact/signals";

type State = {
  screens: Record<string, Screen>;
};

export const state = deepSignal<State>({
  screens,
});

export const vals = <T extends any>(
  o:
    | DeepSignal<Record<string, T>>
    | Signal<Record<string, T>>
    | Record<string, T>
) => Object.values(o as RevertDeepSignal<typeof o>) as T[];
