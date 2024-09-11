import { useState } from "preact/hooks";
import { Card, Header, Body, Footer } from "..";
import { Button } from "../../button";

export default (props: { type: "b" }) => {
  const [seed] = useState(Math.random());
  return (
    <Card class="relative row aic bg-transparent p-0 pb-2 gap-3 rounded-none after:(content-[''] absolute bottom-0 right-0 w-[calc(100%-4.5rem)] border-(b neutral-800))">
      <Header class="flex-none">
        <img
          class="flex-none bg-neutral-900 w-[3.8rem] h-[3.8rem] rounded-xl overflow-hidden aspect-[1/1] object-cover"
          src={`https://loremflickr.com/600/600/fantasy?random=${seed + 1}`}
        />
      </Header>
      <Body class="relative flex-1 gap-2 h-full row aic w-full min-w-0">
        <div class="col gap-2.5 w-full min-w-0 flex-1">
          <span class="text-(lg neutral-100) truncate leading-[1.1cap]">
            RESIDENT EVIL 7 biohazard
          </span>
          <span class="text-(sm neutral-400) font-light leading-[1cap]">
            Urban Fantasy ARPG
          </span>
        </div>
        <Button x={{ type: "d", label: "Get" }} />
      </Body>
    </Card>
  );
};
