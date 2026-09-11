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

export const useScroll = () => {
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
      lenis.value.off("scroll", handleScroll);
    }

    const isMobile =
      typeof window !== "undefined" &&
      ("ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        (window.matchMedia && window.matchMedia("(pointer: coarse)").matches) ||
        window.innerWidth <= 768);

    lenis.value = new Lenis({
      duration: isMobile ? 0 : 2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      autoRaf: false,
      syncTouch: false,
      smoothWheel: !isMobile,
    });

    lenis.value.on("scroll", handleScroll);
  };

  onMounted(() => {
    gsap.ticker.add(tick);

    const isMobile =
      typeof window !== "undefined" &&
      ("ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        (window.matchMedia && window.matchMedia("(pointer: coarse)").matches) ||
        window.innerWidth <= 768);

    if (!isMobile) {
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
    gsap.ticker.remove(tick);
  });
};
