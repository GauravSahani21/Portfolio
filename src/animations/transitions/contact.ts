import gsap from "gsap";
import { sceneWeightsInOut } from "../scenes";
import { animations as avatarAnimations } from "../../three/objects/avatar/animations";
import { createMatchMedia } from "../utils/matchMedia";

let inTl: gsap.core.Timeline | null = null;
let outTl: gsap.core.Timeline | null = null;
let wakeUpMm: gsap.MatchMedia | null = null;

const isMobileDevice = () =>
  typeof window !== "undefined" &&
  ("ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    (window.matchMedia && window.matchMedia("(pointer: coarse)").matches) ||
    window.innerWidth <= 768);

const setup = (contact: HTMLElement) => {
  const isMobile = isMobileDevice();

  inTl = gsap.timeline({
    scrollTrigger: {
      trigger: contact,
      start: "top bottom",
      end: "bottom bottom",
      scrub: isMobile ? 0.3 : true,
    },
  });

  inTl.fromTo(sceneWeightsInOut.contact, { in: 0 }, { in: 1, duration: 1, ease: "none" }, 0);

  if (!isMobile) {
    outTl = gsap.timeline({
      scrollTrigger: {
        trigger: contact,
        start: "bottom bottom",
        end: "bottom top",
        scrub: true,
      },
    });
    outTl.fromTo(sceneWeightsInOut.contact, { out: 0 }, { out: 1, duration: 1, ease: "none" }, 0);
  }

  /**  wakeUpTrigger = ScrollTrigger.create({
    trigger: contact,
    start: "center 75%",
    onEnter: () => {
      gsap.delayedCall(0.25, () => {
        avatarAnimations.wakeUp();
      });
    },
  }); */
  wakeUpMm = createMatchMedia((_context, { isMobile }) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: contact,
        start: isMobile ? "top 10%" : "top 15%",
      },
    });
    tl.call(avatarAnimations.wakeUp, [0.25]);
  });
};

const destroy = () => {
  if (inTl) {
    inTl.kill();
    inTl = null;
  }
  if (outTl) {
    outTl.kill();
    outTl = null;
  }
  if (wakeUpMm) {
    wakeUpMm.kill();
    wakeUpMm = null;
  }
};

export const contact = { setup, destroy };
