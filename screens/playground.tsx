import { cx, css } from "@twind/core";
import { useEffect, useRef } from "preact/hooks";
import { Children } from "../types";
import { Footer } from "../components/Footer";
import { Center, Nav } from "../components/Nav";
import { Screen } from "../components/Screen";

export default () => {
  return (
    <Screen>
      <Footer transparent class="!pb-4">
        <Nav>
          <Center class="gap-6 bg-black/20 py-3.5 px-4 rounded-3xl"></Center>
        </Nav>
      </Footer>
      <ScreenScroller>
        <div class="screen bg-red-500">0</div>
        <div class="screen" data-fixed="right">
          1
        </div>
        <div class="screen">2</div>
        <div class="screen" data-fixed="left">
          3
        </div>
        <div class="screen bg-teal-500">4</div>
      </ScreenScroller>
      <div id="output_log" class="fixed top-16 left-16"></div>
    </Screen>
  );
};

const log = (msg: string) => {
  const el = document.getElementById("output_log");
  if (el) {
    el.innerText = msg;
  }
};

const ScreenScroller = (props: { children: Children }) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const $ = ref.current as HTMLDivElement;
    const N = $.children.length;
    const NF = 12;

    // const isTopmostScroller = !$.parentElement.closest("[data-scroller]");

    const TFN = {
      "ease-out": (k: number, e = 1.618) => {
        return 1 - Math.pow(1 - k, e);
      },
    };

    let i = parseInt($.style.getPropertyValue("--i")) || 0;
    let touchStartX: number = 0;
    let touchStartY: number = 0;
    let swipeDistance: number = 0;
    let touched = false;
    let tracking = false;
    let rID: number | null = null;
    let w = window.innerWidth;
    let ini: number;
    let fin: number;
    let progress: number = 0;

    // @ts-ignore
    let vx = Velocity();
    let vy = Velocity();

    function stopAnimation() {
      rID && cancelAnimationFrame(rID);
      rID = null;
    }

    function animate(cf = 0) {
      progress = ini + (fin - ini) * TFN["ease-out"](cf / NF);
      $.style.setProperty("--i", "" + progress);
      if (cf === NF) {
        stopAnimation();
        return;
      }
      // @ts-ignore
      rID = requestAnimationFrame(animate.bind(this, ++cf));
    }

    function cursor(e: any): MouseEvent {
      return e.changedTouches ? e.changedTouches[0] : e;
    }

    function touchStart(e: MouseEvent | TouchEvent) {
      if (rID) tracking = true;
      stopAnimation();
      touchStartX = cursor(e).clientX;
      touchStartY = cursor(e).clientY;
      vx.reset();
      vy.reset();
      touched = true;
      swipeDistance = 0;
    }

    const leftOrRightSwipe = (dx: number, dy: number, vx: any, vy: any) => {
      return (
        Math.abs(vy.getVelocity()) < 1000 &&
        Math.abs(vx.getVelocity()) > 300 &&
        Math.abs(90 - Math.abs((Math.atan2(dx, dy) * 180) / Math.PI)) < 25
      );
    };

    function touchMove(e: MouseEvent | TouchEvent) {
      const dx = cursor(e).clientX - touchStartX;
      const dy = cursor(e).clientY - touchStartY;
      const f = +(dx / w);
      vx.updatePosition(cursor(e).clientX);
      vy.updatePosition(cursor(e).clientY);
      swipeDistance += Math.abs(dx) + Math.abs(dy);

      // const next = (progress || i) - f;
      // const isAtStart = next < 0;
      // const isAtEnd = next > N - 1;

      // if (!isTopmostScroller && !isAtEnd && !isAtStart) {
      //   // log("child is preventing default");
      //   e.preventDefault();
      // } else if (isTopmostScroller) {
      //   swipeDistance = 0;
      //   // tracking = true;
      //   // console.log("child is NOT preventing default");
      // }

      if (
        (touched && swipeDistance < 300 && leftOrRightSwipe(dx, dy, vx, vy)) ||
        tracking
      ) {
        tracking = true;

        $.querySelectorAll("[data-scrolling]").forEach((el) => {
          el.style.overflowY = "hidden";
        });

        // if (isTopmostScroller && e.defaultPrevented) {
        //   tracking = false;
        //   $.style.setProperty("--i", "" + i);
        //   return;
        // }

        const next = (progress || i) - f;
        const isAtStart = next < 0;
        const isAtEnd = next > N - 1;
        $.style.setProperty(
          "--i",
          "" + (isAtStart ? 0 : isAtEnd ? N - 1 : next)
        );
      }
    }

    function touchEnd(e: MouseEvent | TouchEvent) {
      const dx = cursor(e).clientX - touchStartX;
      const dy = cursor(e).clientY - touchStartY;
      if (touched && tracking) {
        const s = Math.sign(dx);
        let f = +((s * dx) / w);

        ini = (progress || i) - s * f;

        if (
          (i > 0 || s < 0) &&
          (i < N - 1 || s > 0) &&
          (f > 0.5 || leftOrRightSwipe(dx, dy, vx, vy))
        ) {
          i -= s;
          f = 1 - f;
        }

        fin = i;
        if (ini > 0 && ini < N - 1) {
          animate();
        } else {
          $.style.setProperty("--i", "" + fin);
        }
        touchStartX = 0;
        touchStartY = 0;
        touched = false;
        tracking = false;
      }
      $.querySelectorAll("[data-scrolling]").forEach((el) => {
        el.style.overflowY = "scroll";
      });
    }

    Array.from($.children).forEach((el, i) => {
      if (el.hasAttribute("data-fixed")) {
        // @ts-ignore
        const stick = el.getAttribute("data-fixed") || "both";
        // @ts-ignore
        el.style = `z-index: 0; transform: translateX(calc(calc(-100% + calc(clamp(${
          ["both", "right"].includes(stick) ? "0" : "1"
        }, calc(var(--i, 0) - ${i - 1}), ${
          ["both", "left"].includes(stick) ? "2" : "1"
        }) * 100%))`;
      }
    });

    $.addEventListener("mousedown", touchStart, false);
    $.addEventListener("touchstart", touchStart, false);

    $.addEventListener("mousemove", touchMove, false);
    $.addEventListener("touchmove", touchMove, false);

    $.addEventListener("mouseup", touchEnd, false);
    $.addEventListener("touchend", touchEnd, false);
  }, []);

  return (
    <>
      <div
        ref={ref}
        data-scroller="true"
        style="--i: 1; --n: 5;"
        class={cx(
          css`
            flex: none;
            position: absolute;
            top: 0;
            left: 0;
            display: flex;
            align-items: center;
            overflow-y: hidden;
            width: calc(var(--n) * 100%);
            height: 100vh;
            max-height: 100vh;
            transform: translate(calc(var(--i, 0) / var(--n) * -100%));
            will-change: transform;

            & .screen {
              flex: none;
              overflow: hidden;
              will-change: transform;
              position: relative;
              z-index: 99;
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100vh;
              width: 100vw;
              color: white;
              font-family: sans-serif;
              font-size: 50vw;
            }
          `
        )}
      >
        {props.children}
      </div>
    </>
  );
};

const VerticalScroll = () => {
  // useEffect(() => {
  //   const scroller = document.querySelector("[data-scrolling]");
  //   if (scroller) {
  //     // scroller.addEventListener("touchstart", (e) => {
  //     //   e.preventDefault();
  //     // });
  //     scroller.addEventListener("scroll", (e) => {
  //       console.log(e.target.scrollTop);
  //     });
  //   }
  // }, []);

  return (
    <p
      class="w-screen h-screen overflow-y-scroll pt-safe-t p-4 pb-safe-b text-lg"
      data-scrolling="false"
    >
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime adipisci
      sapiente culpa doloremque rerum voluptates laboriosam asperiores error
      aliquam? Consequatur reiciendis quam aliquam totam eaque qui suscipit
      aliquid minima, distinctio in odio harum expedita sunt rerum natus.
      Delectus odio earum ipsa, voluptatibus distinctio ut esse voluptas
      recusandae voluptate ipsum iure provident labore, reprehenderit atque
      dolorem beatae vitae quod officia vero reiciendis vel inventore facilis
      impedit? Beatae ipsum sunt architecto fugiat praesentium aliquid possimus,
      earum ipsa exercitationem quisquam! Culpa tempora cumque quidem eum, fuga
      minus error nulla beatae voluptatem, quis officiis aspernatur omnis
      officia nostrum, consequuntur veniam autem commodi rem? Eos dicta omnis,
      nisi aut dolorum tempore sapiente eligendi eum tempora provident libero
      fugit culpa esse illo, quae quas laborum repellendus. Perferendis
      laudantium mollitia non cum architecto quisquam laborum? Sint quisquam ut
      iusto, pariatur labore in porro asperiores odio dolore ex doloremque quae.
      Pariatur est obcaecati cupiditate aspernatur neque ea nihil possimus iste
      quibusdam dolores. Animi illo at minus? Repudiandae, doloremque unde
      labore voluptatum temporibus fugiat, et sapiente officiis omnis, quidem
      quasi ad laudantium reprehenderit! Culpa veniam iusto quae, itaque facere
      beatae unde dolorem quo eveniet animi dolorum expedita? Natus consequatur
      ea, veniam fugiat at nobis recusandae ipsum consequuntur culpa quis.
    </p>
  );
};

const Velocity = () => {
  const positionQueue: number[] = [];
  const timeQueue: number[] = [];

  const reset = () => {
    positionQueue.splice(0);
    timeQueue.splice(0);
  };

  const pruneQueue = (ms: number) => {
    while (timeQueue.length && timeQueue[0] < Date.now() - ms) {
      timeQueue.shift();
      positionQueue.shift();
    }
  };

  const updatePosition = (position: number) => {
    positionQueue.push(position);
    timeQueue.push(Date.now());
    pruneQueue(50);
  };

  const getVelocity = () => {
    pruneQueue(1000);
    const length = timeQueue.length;
    if (length < 2) return 0;

    const distance = positionQueue[length - 1] - positionQueue[0];
    const time = (timeQueue[length - 1] - timeQueue[0]) / 1000;

    return distance / time;
  };

  return {
    reset,
    updatePosition,
    getVelocity,
  };
};
