import { ref, onMounted } from "vue";
import { resources } from "../utils/resources";
import gsap from "gsap";

export const preloaderVisible = ref(true);

export const usePreloader = () => {
  onMounted(() => {
    const preloader = document.getElementById("preloader");
    if (!preloader) {
      preloaderVisible.value = false;
      document.body.classList.remove("is-loading");
      return;
    }

    const counter = document.getElementById("preloader-counter");
    const barFill = document.getElementById("preloader-bar-fill");
    const statusText = document.getElementById("preloader-status");
    const rect = preloader.querySelector(".preloader-rect") as HTMLElement | null;

    // Intro entrance animation with GSAP
    gsap.fromTo(
      ".preloader-svg",
      { scale: 0.7, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.7, ease: "back.out(1.5)" }
    );
    gsap.fromTo(
      [".preloader-counter", ".preloader-bar", ".preloader-status"],
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, stagger: 0.08, ease: "power2.out" }
    );
    gsap.fromTo(
      ".preloader-corner",
      { opacity: 0 },
      { opacity: 0.6, duration: 0.8, delay: 0.2, ease: "power2.out" }
    );

    const progressTracker = { val: 0 };
    let targetProgress = resources.isReady ? 100 : 25;
    let isExiting = false;

    const updateUI = () => {
      const current = Math.min(100, Math.round(progressTracker.val));
      if (counter) counter.textContent = `${current}%`;
      if (barFill) barFill.style.width = `${current}%`;
      if (rect) rect.style.transform = `scaleY(${current / 100})`;

      if (statusText) {
        if (current < 40) {
          statusText.textContent = "INITIALIZING 3D ENGINE";
        } else if (current < 75) {
          statusText.textContent = "PREPARING ASSETS";
        } else if (current < 100) {
          statusText.textContent = "FINALIZING SCENE";
        } else {
          statusText.textContent = "READY";
        }
      }
    };

    const exitPreloader = () => {
      if (isExiting) return;
      isExiting = true;

      const exitTl = gsap.timeline({
        onComplete: () => {
          document.body.classList.remove("is-loading");
          preloaderVisible.value = false;
          preloader.classList.add("preloader-hidden");
          preloader.style.display = "none";
        },
      });

      // Brief pause at 100%
      exitTl.to({}, { duration: 0.2 });

      // Stagger elements fade out & lift
      exitTl.to(
        [".preloader-counter", ".preloader-bar", ".preloader-status", ".preloader-corner"],
        {
          y: -25,
          opacity: 0,
          duration: 0.4,
          stagger: 0.04,
          ease: "power3.in",
        },
        "exit"
      );

      exitTl.to(
        ".preloader-svg",
        {
          scale: 1.15,
          opacity: 0,
          duration: 0.4,
          ease: "power3.in",
        },
        "exit"
      );

      // Smooth luxury curtain slide reveal
      exitTl.to(
        preloader,
        {
          yPercent: -100,
          duration: 0.9,
          ease: "expo.inOut",
        },
        "-=0.15"
      );
    };

    // Smooth tween using GSAP
    const tweenProgressTo = (target: number, duration: number = 0.5) => {
      gsap.to(progressTracker, {
        val: target,
        duration,
        ease: "power2.out",
        onUpdate: updateUI,
        onComplete: () => {
          if (target >= 100) {
            exitPreloader();
          }
        },
      });
    };

    // Initial smooth progress step
    tweenProgressTo(targetProgress, 0.6);

    // Listen to resource loader
    resources.on("progress", (ratio) => {
      targetProgress = Math.max(targetProgress, Math.round(25 + ratio * 75));
      tweenProgressTo(targetProgress, 0.5);
    });

    resources.on("ready", () => {
      targetProgress = 100;
      tweenProgressTo(100, 0.6);
    });

    if (resources.isReady) {
      gsap.delayedCall(0.5, () => {
        tweenProgressTo(100, 0.7);
      });
    }

    // Safety fallback: guarantee exit after max 3.5s
    gsap.delayedCall(3.5, () => {
      if (!isExiting) {
        tweenProgressTo(100, 0.4);
      }
    });
  });
};
