import gsap from "gsap";
import Lenis from "lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ref, onMounted, onUnmounted, watch } from "vue";
import { isTransitioning } from "./useProjectTransition";

export const lenis = ref<Lenis | null>(null);
export const projectLenis = ref<Lenis | null>(null);
export const velocity = ref(0);

const handleScroll = () => {
  ScrollTrigger.update();
};

const isMobileDevice = () =>
  typeof window !== "undefined" &&
  ("ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    (window.matchMedia && window.matchMedia("(pointer: coarse)").matches) ||
    window.innerWidth <= 768);

export const useScroll = () => {
  const isMobile = isMobileDevice();

  const tick = (time: number) => {
    const instance = lenis.value;
    if (!instance) return;

    if (instance.isScrolling === "smooth" && Math.abs(instance.velocity) > 0) {
      velocity.value = Math.min(Math.abs(instance.velocity * 0.75) || 0, 1);
    }

    instance.raf(time * 1000);
  };

  const createNewLenis = () => {
    if (lenis.value) {
      lenis.value.destroy();
      lenis.value.off?.("scroll", handleScroll);
    }

    if (isMobile) {
      window.removeEventListener("scroll", handleScroll);
      window.addEventListener("scroll", handleScroll, { passive: true });

      lenis.value = {
        scrollTo: (target: any, options?: any) => {
          if (typeof target === "number") {
            window.scrollTo({
              top: target,
              behavior: options?.immediate ? "auto" : "smooth",
            });
          } else if (typeof target === "string") {
            const el = document.querySelector(target);
            el?.scrollIntoView({
              behavior: options?.immediate ? "auto" : "smooth",
            });
          } else if (target instanceof HTMLElement) {
            target.scrollIntoView({
              behavior: options?.immediate ? "auto" : "smooth",
            });
          }
        },
        start: () => {},
        stop: () => {},
        on: () => {},
        off: () => {},
        destroy: () => {
          window.removeEventListener("scroll", handleScroll);
        },
        raf: () => {},
        isScrolling: false,
        velocity: 0,
      } as unknown as Lenis;
      return;
    }

    lenis.value = new Lenis({
      duration: 2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      autoRaf: false,
      syncTouch: false,
      smoothWheel: true,
    });

    lenis.value.on("scroll", handleScroll);
  };

  onMounted(() => {
    if (!isMobile) {
      gsap.ticker.add(tick);
      gsap.ticker.lagSmoothing(0);
    } else {
      gsap.ticker.lagSmoothing(500, 33);
    }

    createNewLenis();
  });

  watch(isTransitioning, (newIsTransitioning) => {
    if (newIsTransitioning) {
      lenis.value?.stop();
      ScrollTrigger.clearScrollMemory();
    } else {
      lenis.value?.start();
      ScrollTrigger.update();
    }
  });

  onUnmounted(() => {
    if (!isMobile) {
      gsap.ticker.remove(tick);
    }
    if (lenis.value) {
      lenis.value.destroy();
    }
    window.removeEventListener("scroll", handleScroll);
  });
};
