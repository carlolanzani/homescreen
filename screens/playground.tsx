import { cx, css } from "@twind/core";
import { useEffect } from "preact/hooks";

export default () => {
  useEffect(() => {
    const _C = document.querySelector(".lol"),
      N = _C.children.length,
      NF = 10;

    const TFN = {
      linear: function (k) {
        return k;
      },
      "ease-in": function (k, e = 1.675) {
        return Math.pow(k, e);
      },
      "ease-out": function (k, e = 1.675) {
        return 1 - Math.pow(1 - k, e);
      },
      "ease-in-out": function (k) {
        return 0.5 * (Math.sin((k - 0.5) * Math.PI) + 1);
      },
    };

    let i = 0,
      x0 = null,
      locked = false,
      w,
      ini,
      fin,
      rID = null,
      anf;
    let progress = 0;
    let v = new Velocity();

    function stopAni() {
      cancelAnimationFrame(rID);
      rID = null;
    }

    function ani(cf = 0) {
      progress = ini + (fin - ini) * TFN["ease-out"](cf / NF);
      _C.style.setProperty("--i", progress);
      if (cf === NF) {
        stopAni();
        return;
      }
      rID = requestAnimationFrame(ani.bind(this, ++cf));
    }

    function unify(e) {
      return e.changedTouches ? e.changedTouches[0] : e;
    }

    function lock(e) {
      stopAni();
      v = new Velocity();
      x0 = unify(e).clientX;
      locked = true;
    }

    function drag(e) {
      e.preventDefault();
      if (locked) {
        let dx = unify(e).clientX - x0,
          f = +(dx / w);
        v.updatePosition(unify(e).clientX);
        const next = (progress || i) - f;
        console.log(next);
        _C.style.setProperty("--i", next);
      }
    }

    function move(e) {
      if (locked) {
        let dx = unify(e).clientX - x0,
          s = Math.sign(dx),
          f = +((s * dx) / w);

        ini = (progress || i) - s * f;

        console.log({ ini: ini - f });

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
        x0 = null;
        locked = false;
      }
    }

    function size() {
      w = window.innerWidth;
    }

    size();
    _C.style.setProperty("--n", N);

    addEventListener("resize", size, false);

    _C.addEventListener("mousedown", lock, false);
    _C.addEventListener("touchstart", lock, false);

    _C.addEventListener("mousemove", drag, false);
    _C.addEventListener("touchmove", drag, false);

    _C.addEventListener("mouseup", move, false);
    _C.addEventListener("touchend", move, false);

    function Velocity() {
      this.positionQueue = [];
      this.timeQueue = [];
    }

    Velocity.prototype.reset = function () {
      this.positionQueue.splice(0);
      this.timeQueue.splice(0);
    };

    Velocity.prototype.pruneQueue = function (ms) {
      //pull old values off of the queue
      while (this.timeQueue.length && this.timeQueue[0] < Date.now() - ms) {
        this.timeQueue.shift();
        this.positionQueue.shift();
      }
    };

    Velocity.prototype.updatePosition = function (position) {
      this.positionQueue.push(position);
      this.timeQueue.push(Date.now());
      this.pruneQueue(50);
    };

    Velocity.prototype.getVelocity = function () {
      this.pruneQueue(1000);
      var length = this.timeQueue.length;
      if (length < 2) return 0;

      var distance = this.positionQueue[length - 1] - this.positionQueue[0],
        time = (this.timeQueue[length - 1] - this.timeQueue[0]) / 1000;

      return distance / time;
    };
  }, []);

  return (
    <div
      style="var(--n, 1)"
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
            user-select: none;
            pointer-events: none;
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
