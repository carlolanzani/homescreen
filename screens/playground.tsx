import { cx, css } from "@twind/core";
import { useEffect } from "preact/hooks";

export default () => {
  useEffect(() => {
    const $ = document.querySelector(".lol") as HTMLElement;
    const N = $.children.length;
    const NF = 12;

    const TFN = {
      "ease-out": (k: number, e = 1.618) => {
        return 1 - Math.pow(1 - k, e);
      },
    };

    let i = parseInt($.style.getPropertyValue("--i")) || 0;
    let x0: number = 0;
    let locked = false;
    let rID: number | null = null;
    let w = window.innerWidth;
    let ini: number;
    let fin: number;
    let anf: number | undefined;
    let progress: number = 0;

    // @ts-ignore
    let v = Velocity();

    function stopAni() {
      rID && cancelAnimationFrame(rID);
      rID = null;
    }

    function ani(cf = 0) {
      progress = ini + (fin - ini) * TFN["ease-out"](cf / NF);
      $.style.setProperty("--i", "" + progress);
      if (cf === NF) {
        stopAni();
        return;
      }
      // @ts-ignore
      rID = requestAnimationFrame(ani.bind(this, ++cf));
    }

    function unify(e: any): MouseEvent {
      return e.changedTouches ? e.changedTouches[0] : e;
    }

    function lock(e: MouseEvent | TouchEvent) {
      stopAni();
      x0 = unify(e).clientX;
      locked = true;
    }

    function drag(e: MouseEvent | TouchEvent) {
      e.preventDefault();
      if (locked) {
        const dx = unify(e).clientX - x0;
        const f = +(dx / w);
        v.updatePosition(unify(e).clientX);
        const next = (progress || i) - f;
        $.style.setProperty("--i", "" + next);
      }
    }

    function move(e: MouseEvent | TouchEvent) {
      if (locked) {
        let dx = unify(e).clientX - x0,
          s = Math.sign(dx),
          f = +((s * dx) / w);

        ini = (progress || i) - s * f;

        if (
          (i > 0 || s < 0) &&
          (i < N - 1 || s > 0) &&
          (f > 0.5 || Math.abs(v.getVelocity()) > 500)
        ) {
          i -= s;
          f = 1 - f;
        }

        fin = i;
        anf = Math.round(f * NF);
        ani();
        x0 = 0;
        locked = false;
      }
    }

    $.addEventListener("mousedown", lock, false);
    $.addEventListener("touchstart", lock, false);

    $.addEventListener("mousemove", drag, false);
    $.addEventListener("touchmove", drag, false);

    $.addEventListener("mouseup", move, false);
    $.addEventListener("touchend", move, false);
  }, []);

  return (
    <div
      style="--i: 4; --n: 5;"
      class={cx(
        "lol",
        css`
          display: flex;
          align-items: center;
          overflow-y: hidden;
          width: calc(var(--n) * 100%);
          height: 100vh;
          max-height: 100vh;
          transform: translate(calc(var(--i, 0) / var(--n) * -100%));

          & .screen {
            flex: none;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
            width: 100vw;
            color: white;
            font-family: sans-serif;
            font-size: 50vmin;
            &:nth-child(1) {
              background: cyan;
            }
            &:nth-child(2) {
              background: green;
            }
            &:nth-child(3) {
              background: blue;
            }
            &:nth-child(4) {
              background: purple;
            }
            &:nth-child(5) {
              background: pink;
            }
          }
        `
      )}
    >
      <div class="screen">1</div>
      <div class="screen">2</div>
      <div class="screen">3</div>
      <div class="screen">4</div>
      <div class="screen">5</div>
    </div>
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
