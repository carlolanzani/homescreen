import { Icon } from "../elements/Icon";

export const Header = () => {
  return (
    <header class="w-full jcsb">
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
