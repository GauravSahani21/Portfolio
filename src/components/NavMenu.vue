<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from "vue";
import gsap from "gsap";
import { lenis } from "../composables/useScroll";
import { useRouter } from "../composables/useRouter";
import { projectId } from "../composables/useRouteObserver";

const props = defineProps<{
  isOpen: boolean;
}>();

const emit = defineEmits<{
  (e: "close"): void;
}>();

const router = useRouter();

export interface NavLink {
  title: string;
  href: string;
  thumbnail: string;
}

const links: NavLink[] = [
  {
    title: "Home",
    href: "#hero",
    thumbnail: "/assets/nav-link-previews/landing.png",
  },
  {
    title: "About",
    href: "#about",
    thumbnail: "/assets/nav-link-previews/landing.png",
  },
  {
    title: "Projects",
    href: "#projects",
    thumbnail: "/assets/nav-link-previews/projects.png",
  },
  {
    title: "Tech Stack",
    href: "#tech-stack",
    thumbnail: "/assets/nav-link-previews/skills.png",
  },
  {
    title: "Contact",
    href: "#contact",
    thumbnail: "/assets/nav-link-previews/contact.png",
  },
];

const hoveredIndex = ref<number | null>(null);
const activeThumbnail = ref<string>(links[0]?.thumbnail ?? "");
const isHoveringAny = ref(false);

const menuOverlayRef = ref<HTMLDivElement | null>(null);
const menuContentRef = ref<HTMLDivElement | null>(null);
const previewImageRef = ref<HTMLImageElement | null>(null);

let leaveTimer: ReturnType<typeof setTimeout> | null = null;

// Preload preview images for instant transitions
onMounted(() => {
  links.forEach((link) => {
    const img = new Image();
    img.src = link.thumbnail;
  });
});

const handleLinkHover = (index: number) => {
  if (leaveTimer) {
    clearTimeout(leaveTimer);
    leaveTimer = null;
  }
  hoveredIndex.value = index;
  isHoveringAny.value = true;
  const link = links[index];
  if (link) {
    activeThumbnail.value = link.thumbnail;
  }
};

const handleLinkLeave = () => {
  if (leaveTimer) clearTimeout(leaveTimer);
  leaveTimer = setTimeout(() => {
    isHoveringAny.value = false;
    hoveredIndex.value = null;
  }, 100);
};

const handleLinkClick = (href: string) => {
  emit("close");

  // Wait for the full close animation to finish before scrolling.
  // animateClose: chars 0.4s + overlay 0.7s + 0.1s delay = ~850ms total.
  setTimeout(() => {
    if (projectId.value !== null) {
      router.push("/");
      setTimeout(() => {
        scrollToHref(href);
      }, 400);
    } else {
      scrollToHref(href);
    }
  }, 900);
};

const scrollToHref = (href: string) => {
  if (href === "#hero") {
    // Scroll to very top
    if (lenis.value) {
      lenis.value.scrollTo(0, { immediate: false });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    return;
  }

  const el = document.querySelector(href) as HTMLElement | null;

  if (!el) {
    // Element may not be rendered yet (e.g. TechStack/Contact conditional), retry once
    setTimeout(() => {
      const retryEl = document.querySelector(href) as HTMLElement | null;
      if (retryEl) performScroll(retryEl);
    }, 300);
    return;
  }

  performScroll(el);
};

const performScroll = (el: HTMLElement) => {
  // Use getBoundingClientRect for reliable position calculation
  const rect = el.getBoundingClientRect();
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const targetY = rect.top + scrollTop - 80; // 80px header offset

  if (lenis.value) {
    lenis.value.scrollTo(targetY, { duration: 1.5 });
  } else {
    window.scrollTo({ top: targetY, behavior: "smooth" });
  }
};


// Exact reference repo easing: cubic-bezier(0.76, 0, 0.24, 1)
const EASE_CURTAIN = "power4.inOut";

const animateOpen = () => {
  if (!menuOverlayRef.value || !menuContentRef.value) return;

  gsap.killTweensOf([menuOverlayRef.value, menuContentRef.value]);

  // Restore pointer events so the backdrop can be clicked to close
  gsap.set(menuOverlayRef.value, { pointerEvents: "auto" });

  // Curtain drop from top
  gsap.fromTo(
    menuOverlayRef.value,
    { height: 0, opacity: 0 },
    {
      height: "100vh",
      opacity: 1,
      duration: 0.9,
      ease: EASE_CURTAIN,
    }
  );

  // Character-by-character translate stagger
  const charSpans = menuContentRef.value.querySelectorAll(".char-span");
  gsap.killTweensOf(charSpans);
  gsap.fromTo(
    charSpans,
    { y: "115%", opacity: 0 },
    {
      y: "0%",
      opacity: 1,
      duration: 0.85,
      stagger: 0.015,
      delay: 0.15,
      ease: "power4.out",
    }
  );
};

const animateClose = () => {
  if (!menuOverlayRef.value || !menuContentRef.value) return;

  // Immediately disable pointer events so the overlay doesn't block the page during collapse
  gsap.set(menuOverlayRef.value, { pointerEvents: "none" });

  const charSpans = menuContentRef.value.querySelectorAll(".char-span");
  gsap.killTweensOf(charSpans);
  gsap.to(charSpans, {
    y: "115%",
    opacity: 0,
    duration: 0.4,
    stagger: 0.008,
    ease: "power3.in",
  });

  gsap.to(menuOverlayRef.value, {
    height: 0,
    opacity: 0,
    duration: 0.7,
    delay: 0.1,
    ease: EASE_CURTAIN,
  });
};


watch(
  () => props.isOpen,
  (open) => {
    if (open) {
      animateOpen();
    } else {
      animateClose();
    }
  }
);

const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === "Escape" && props.isOpen) {
    emit("close");
  }
};

onMounted(() => {
  window.addEventListener("keydown", handleKeydown);
});

onUnmounted(() => {
  window.removeEventListener("keydown", handleKeydown);
  if (leaveTimer) clearTimeout(leaveTimer);
});
</script>

<template>
  <div
    ref="menuOverlayRef"
    class="dropdown-menu-overlay"
    :class="{ 'dropdown-menu-open': isOpen }"
    @click="emit('close')"
  >
    <div class="dropdown-menu-wrapper" ref="menuContentRef">
      <nav class="nav-links-column" aria-label="Main Navigation">
        <a
          v-for="(link, index) in links"
          :key="link.title"
          :href="link.href"
          class="nav-link-item cursor-can-hover"
          :class="{
            'nav-link-blurred': isHoveringAny && hoveredIndex !== index,
            'nav-link-active': hoveredIndex === index,
          }"
          @mouseenter="handleLinkHover(index)"
          @mouseleave="handleLinkLeave"
          @click.prevent="handleLinkClick(link.href)"
          data-sound="click"
          data-hoversound="hover"
        >
          <p class="nav-link-text">
            <span
              v-for="(char, charIndex) in link.title.split('')"
              :key="charIndex"
              class="char-span"
            >
              {{ char === ' ' ? '\u00A0' : char }}
            </span>
          </p>
        </a>
      </nav>

      <div class="nav-preview-column">
        <div class="preview-image-container" :class="{ 'is-visible': isHoveringAny }">
          <img
            ref="previewImageRef"
            :src="activeThumbnail"
            alt="Preview"
            class="preview-image"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.dropdown-menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 0;
  background: transparent;
  backdrop-filter: blur(32px) brightness(0.35) saturate(0.7);
  -webkit-backdrop-filter: blur(32px) brightness(0.35) saturate(0.7);
  z-index: 88;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  opacity: 0;

  &-open {
    pointer-events: auto;
  }
}

.dropdown-menu-wrapper {
  width: 100%;
  max-width: 1300px;
  padding: 100px var(--space-outer, 32px) 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  gap: 40px;
}

.nav-links-column {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.nav-link-item {
  cursor: pointer;
  padding: 10px 18px;
  display: inline-flex;
  width: fit-content;
  border-radius: 12px;
  text-decoration: none;
  color: inherit;
  transition: filter 0.3s cubic-bezier(0.76, 0, 0.24, 1),
              opacity 0.3s cubic-bezier(0.76, 0, 0.24, 1),
              transform 0.3s cubic-bezier(0.76, 0, 0.24, 1);

  &-blurred {
    filter: blur(4px);
    opacity: 0.45;
  }

  &-active {
    filter: blur(0px);
    opacity: 1;
    transform: translateX(10px);

    .nav-link-text {
      color: #ffffff;
      text-decoration: underline;
      text-underline-offset: 8px;
      text-decoration-thickness: 2px;
    }
  }
}

.nav-link-text {
  margin: 0;
  display: flex;
  overflow: hidden;
  font-size: clamp(38px, 5.5vw, 74px);
  font-weight: 900;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.15;
  letter-spacing: -0.02em;
  transition: color 0.3s ease;
}

.char-span {
  display: inline-block;
  will-change: transform, opacity;
  pointer-events: none !important;
}

.nav-preview-column {
  display: none;
  width: 460px;
  max-width: 42vw;
  height: 340px;
  position: relative;
  flex-shrink: 0;

  @media (min-width: 800px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.preview-image-container {
  width: 100%;
  height: 100%;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 30px 60px -15px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(255, 255, 255, 0.12);
  opacity: 0;
  transform: scale(0.94);
  transition: opacity 0.35s cubic-bezier(0.76, 0, 0.24, 1),
              transform 0.35s cubic-bezier(0.76, 0, 0.24, 1);

  &.is-visible {
    opacity: 1;
    transform: scale(1);
  }
}

.preview-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
</style>
