import { cx } from "@twind/core";
import { Icon } from "../elements/Icon";

export const Header = (props: { class?: string }) => {
  return (
    <header class={cx("w-full jcsb", props.class)}>
      <button class="row aic">
        <Icon id="chevron-backward" size="8" />
        <span>Back</span>
      </button>
      <h1>Screen Title</h1>
      <button class="row aic">
        <Icon id="plus" size="8" />
      </button>
    </header>
  );
};
