import { onMounted, ref } from "vue";
 
const checkTouch = () =>
  typeof window !== "undefined" &&
  ("ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    (window.matchMedia && window.matchMedia("(pointer: coarse)").matches) ||
    window.innerWidth <= 768);

export const isTouch = ref(checkTouch());

export const useAgent = () => {
  onMounted(() => {
    isTouch.value = checkTouch();
  });

  return {
    isTouch,
  };
};
