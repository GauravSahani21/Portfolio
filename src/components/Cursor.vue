<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from "vue";
import gsap from "gsap";
import { path } from "../composables/useRouteObserver";
import { useAgent } from "../composables/useAgent";

const { isTouch } = useAgent();

const jellyRef = ref<HTMLDivElement | null>(null);
const dotRef = ref<HTMLDivElement | null>(null);

const CURSOR_DIAMETER = 50;
const WRAP_PADDING = 8;
const WRAP_RADIUS = 12;
const WRAP_EASE = 0.2;
const TARGET_PULL = 0.35;
const TARGET_EASE = 0.25;
const TARGET_MAX_PULL = 12;
const CURSOR_PARALLAX = 0.12;
const CURSOR_MAX_LEAD = 10;
const wrapsTarget = true;
const movesTarget = true;

const clamp = (v: number, min: number, max: number) => Math.max(min, Math.min(max, v));
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

function getScale(diffX: number, diffY: number) {
  const distance = Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2));
  return Math.min(distance / 735, 0.35);
}

function getAngle(diffX: number, diffY: number) {
  return (Math.atan2(diffY, diffX) * 180) / Math.PI;
}

type Base = {
  left: number;
  top: number;
  width: number;
  height: number;
  cx: number;
  cy: number;
};

type ActiveTarget = {
  el: HTMLElement | null;
  base: Base | null;
  offX: number;
  offY: number;
};

function measure(el: HTMLElement): Base {
  const r = el.getBoundingClientRect();
  return {
    left: r.left,
    top: r.top,
    width: r.width,
    height: r.height,
    cx: r.left + r.width / 2,
    cy: r.top + r.height / 2,
  };
}

const pos = { x: 0, y: 0 };
const vel = { x: 0, y: 0 };
const pointer = { x: 0, y: 0 };
const jelly = {
  x: 0,
  y: 0,
  w: CURSOR_DIAMETER,
  h: CURSOR_DIAMETER,
  r: CURSOR_DIAMETER / 2,
  sx: 1,
  sy: 1,
};

const active: ActiveTarget = {
  el: null,
  base: null,
  offX: 0,
  offY: 0,
};

const setters: Record<string, any> = {};
const isHidden = ref(false);
const cursorMoved = ref(false);

const render = () => {
  if (!setters.x) return;

  // Dot tracks raw pointer
  setters.dotX(pointer.x);
  setters.dotY(pointer.y);

  const el = active.el;
  const wrapping = !!el && wrapsTarget;
  const moveTarget = !!el && movesTarget;
  const hidden = isHidden.value || !cursorMoved.value;

  if (moveTarget && el && active.base) {
    const b = active.base;
    const pullX = clamp((pointer.x - b.cx) * TARGET_PULL, -TARGET_MAX_PULL, TARGET_MAX_PULL);
    const pullY = clamp((pointer.y - b.cy) * TARGET_PULL, -TARGET_MAX_PULL, TARGET_MAX_PULL);
    active.offX = lerp(active.offX, pullX, TARGET_EASE);
    active.offY = lerp(active.offY, pullY, TARGET_EASE);
    gsap.set(el, { x: active.offX, y: active.offY });
  }

  if (wrapping && active.base) {
    const b = active.base;
    const leadX = clamp((pointer.x - b.cx) * CURSOR_PARALLAX, -CURSOR_MAX_LEAD, CURSOR_MAX_LEAD);
    const leadY = clamp((pointer.y - b.cy) * CURSOR_PARALLAX, -CURSOR_MAX_LEAD, CURSOR_MAX_LEAD);
    const tx = b.cx + active.offX + leadX;
    const ty = b.cy + active.offY + leadY;

    jelly.x = lerp(jelly.x, tx, WRAP_EASE);
    jelly.y = lerp(jelly.y, ty, WRAP_EASE);
    jelly.w = lerp(jelly.w, b.width + WRAP_PADDING * 2, WRAP_EASE);
    jelly.h = lerp(jelly.h, b.height + WRAP_PADDING * 2, WRAP_EASE);
    jelly.r = lerp(jelly.r, WRAP_RADIUS, WRAP_EASE);
    jelly.sx = lerp(jelly.sx, 1, 0.3);
    jelly.sy = lerp(jelly.sy, 1, 0.3);

    setters.x(jelly.x);
    setters.y(jelly.y);
    setters.width(jelly.w);
    setters.height(jelly.h);
    setters.radius(jelly.r);
    setters.sx(jelly.sx);
    setters.sy(jelly.sy);
    setters.r(0);
    setters.opacity(hidden ? 0 : 1);
    setters.dotOpacity(0);
  } else {
    const rotation = getAngle(vel.x, vel.y);
    const scale = getScale(vel.x, vel.y);
    jelly.x = pos.x;
    jelly.y = pos.y;
    jelly.w = lerp(jelly.w, CURSOR_DIAMETER + scale * 300, 0.4);
    jelly.h = lerp(jelly.h, CURSOR_DIAMETER, 0.4);
    jelly.r = lerp(jelly.r, CURSOR_DIAMETER / 2, 0.4);
    jelly.sx = 1 + scale;
    jelly.sy = 1 - scale * 2;

    setters.x(pos.x);
    setters.y(pos.y);
    setters.width(jelly.w);
    setters.height(jelly.h);
    setters.radius(jelly.r);
    setters.r(rotation);
    setters.sx(jelly.sx);
    setters.sy(jelly.sy);
    setters.opacity(hidden ? 0 : 1);
    setters.dotOpacity(hidden ? 0 : 1);
  }
};

const handleMouseMove = (e: MouseEvent) => {
  pointer.x = e.clientX;
  pointer.y = e.clientY;

  if (!cursorMoved.value) {
    cursorMoved.value = true;
    pos.x = e.clientX;
    pos.y = e.clientY;
  }

  gsap.to(pos, {
    x: e.clientX,
    y: e.clientY,
    duration: 1.5,
    ease: "elastic.out(1, 0.5)",
    onUpdate: () => {
      vel.x = (e.clientX - pos.x) * 1.2;
      vel.y = (e.clientY - pos.y) * 1.2;
    },
  });

  const hide = !!(e.target as Element | null)?.closest?.('[data-no-custom-cursor="true"]');
  isHidden.value = hide;
};

const acquire = (el: HTMLElement) => {
  gsap.killTweensOf(el);
  active.el = el;
  active.base = measure(el);
  active.offX = 0;
  active.offY = 0;
  jelly.x = pos.x;
  jelly.y = pos.y;
  if (movesTarget) el.style.willChange = "transform";
};

const release = () => {
  const el = active.el;
  if (el && movesTarget) {
    gsap.to(el, {
      x: 0,
      y: 0,
      duration: 0.7,
      ease: "elastic.out(1, 0.35)",
      clearProps: "transform",
      onComplete: () => {
        el.style.willChange = "";
      },
    });
  }
  active.el = null;
  active.base = null;
  active.offX = 0;
  active.offY = 0;
};

const onPointerOver = (e: Event) => {
  const target = e.target as Element | null;
  if (target?.closest?.('[data-no-custom-cursor="true"]')) {
    if (active.el) release();
    return;
  }

  const hoverable = target?.closest?.(
    ".cursor-can-hover, button, a, [data-cursor], .header-logo, .header-home-link, .nav-menu-link, .menu-toggle-btn"
  ) as HTMLElement | null;

  if (hoverable === active.el) return;
  if (active.el) release();
  if (hoverable) acquire(hoverable);
};

const onLeave = () => {
  if (active.el) release();
};

const onScroll = () => {
  if (!active.el || !active.base) return;
  const r = active.el.getBoundingClientRect();
  active.base.left = r.left - active.offX;
  active.base.top = r.top - active.offY;
  active.base.width = r.width;
  active.base.height = r.height;
  active.base.cx = active.base.left + r.width / 2;
  active.base.cy = active.base.top + r.height / 2;
};

onMounted(() => {
  if (isTouch.value) return;

  const jellyEl = jellyRef.value;
  const dotEl = dotRef.value;
  if (!jellyEl || !dotEl) return;

  gsap.set(jellyEl, { xPercent: -50, yPercent: -50 });
  gsap.set(dotEl, { xPercent: -50, yPercent: -50 });

  setters.x = gsap.quickSetter(jellyEl, "x", "px");
  setters.y = gsap.quickSetter(jellyEl, "y", "px");
  setters.r = gsap.quickSetter(jellyEl, "rotate", "deg");
  setters.sx = gsap.quickSetter(jellyEl, "scaleX");
  setters.sy = gsap.quickSetter(jellyEl, "scaleY");
  setters.width = gsap.quickSetter(jellyEl, "width", "px");
  setters.height = gsap.quickSetter(jellyEl, "height", "px");
  setters.radius = gsap.quickSetter(jellyEl, "borderRadius", "px");
  setters.opacity = gsap.quickSetter(jellyEl, "opacity");
  setters.dotX = gsap.quickSetter(dotEl, "x", "px");
  setters.dotY = gsap.quickSetter(dotEl, "y", "px");
  setters.dotOpacity = gsap.quickSetter(dotEl, "opacity");

  window.addEventListener("mousemove", handleMouseMove);
  document.addEventListener("pointerover", onPointerOver);
  document.addEventListener("mouseleave", onLeave);
  window.addEventListener("blur", onLeave);
  window.addEventListener("scroll", onScroll, { passive: true });

  gsap.ticker.add(render);
});

watch(
  () => path.value,
  () => {
    if (active.el) release();
  }
);

onUnmounted(() => {
  window.removeEventListener("mousemove", handleMouseMove);
  document.removeEventListener("pointerover", onPointerOver);
  document.removeEventListener("mouseleave", onLeave);
  window.removeEventListener("blur", onLeave);
  window.removeEventListener("scroll", onScroll);
  gsap.ticker.remove(render);
  if (active.el) release();
});
</script>

<template>
  <div v-if="!isTouch" class="elastic-cursor-container">
    <div
      ref="jellyRef"
      id="jelly-id"
      class="jelly-blob"
      :style="{
        width: `${CURSOR_DIAMETER}px`,
        height: `${CURSOR_DIAMETER}px`,
        borderRadius: `${CURSOR_DIAMETER / 2}px`,
      }"
    />
    <div ref="dotRef" class="cursor-dot" />
  </div>
</template>

<style scoped lang="scss">
.elastic-cursor-container {
  pointer-events: none;
}

.jelly-blob {
  position: fixed;
  left: 0;
  top: 0;
  pointer-events: none;
  z-index: 99999;
  will-change: transform, width, height, border-radius;
  box-sizing: border-box;
  border: 2px solid #ffffff;
  backdrop-filter: invert(100%);
  -webkit-backdrop-filter: invert(100%);
  opacity: 0;
}

.cursor-dot {
  position: fixed;
  left: 0;
  top: 0;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  pointer-events: none;
  z-index: 100000;
  will-change: transform;
  backdrop-filter: invert(100%);
  -webkit-backdrop-filter: invert(100%);
  background-color: #ffffff;
  opacity: 0;
}
</style>
