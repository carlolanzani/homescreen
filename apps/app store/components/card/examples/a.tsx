import { useState } from "preact/hooks";
import { Card, Header, Body, Footer } from "..";
import { Button } from "../../button";

export default (props: { type: "a" }) => {
  const [seed] = useState(Math.random());
  return (
    <Card class="bg-transparent p-0 gap-4">
      <Header class="backdrop-blur-xl">
        <div class="col gap-3 pt-1">
          <span class="uppercase font-medium text-([11px] blue-500) leading-[1cap]">
            New Game
          </span>
          <span class="font-regular text-(xl neutral-100) leading-[1cap]">
            Resident Evil 7 Biohazard
          </span>
          <span class="font-light text-(xl neutral-400) leading-[1cap]">
            For iPhone 15 Pro, 15 Pro Max
          </span>
        </div>
      </Header>
      <Body class="relative rounded-lg overflow-hidden">
        <img
          class="w-full bg-neutral-900 aspect-[844/545] object-cover"
          src={`https://loremflickr.com/600/400/fantasy?random=${seed}`}
          onError={(e) => {
            e.currentTarget.src =
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";
          }}
        />
        <div class="absolute inset-0 w-full h-full col aifs bg-gradient-to-t from-neutral-900">
          <div class="mt-auto px-4 pb-5 row gap-6">
            <div class="flex-1 row aic gap-2">
              <img
                class="flex-none w-9 h-9 rounded-lg"
                src={`https://loremflickr.com/100/100/fantasy?random=${
                  seed + 1
                }`}
                alt=""
              />
              <div class="col jcc gap-2 w-full h-full truncate">
                <span class="text-(sm neutral-100) font-medium truncate leading-[1.1cap]">
                  RESIDENT EVIL 7 biohazard
                </span>
                <span class="text-(xs neutral-300) font-light leading-[1cap]">
                  Urban Fantasy ARPG
                </span>
              </div>
            </div>
            <div class="col">
              <Button x={{ type: "c", label: "Get" }} />
            </div>
          </div>
        </div>
      </Body>
    </Card>
  );
};
