import { css, cx } from "@twind/core";

export const Switch = (props: { checked: boolean }) => {
  return (
    <label
      class={cx(
        "relative col jcc p-0.5 w-10 mr-2 select-none bg-neutral-700 rounded-full cursor-pointer transition-all ease-in",
        css`
          &:has(> input:checked) {
            @apply bg-[#2bd157];
            & input {
              @apply ml-4;
            }
          }
        `
      )}
    >
      <input
        type="checkbox"
        name="toggle"
        id="toggle"
        defaultChecked={props.checked}
        class="ml-0 w-5 h-5 rounded-full bg-neutral-100 appearance-none cursor-pointer transition-all ease-in"
      />
    </label>
  );
};
