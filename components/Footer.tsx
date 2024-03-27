import { Icon } from "../elements/Icon";

export const Footer = () => {
  return (
    <footer class="w-full jcsa">
      <button class="col aic text-white">
        <Icon id="home" size="8" />
        <span class="text-xs">Home</span>
      </button>
      <button class="col aic">
        <Icon id="search" size="8" />
        <span class="text-xs">Search</span>
      </button>
      <button class="col aic">
        <Icon id="person" size="8" />
        <span class="text-xs">Profile</span>
      </button>
    </footer>
  );
};
