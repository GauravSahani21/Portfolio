<script setup lang="ts">
import Button from "./Button.vue";
import Logo from "./Logo.vue";
import { computed, ref } from "vue";
import { t } from "../i18n/utils/translate";
import { useHeaderTheme } from "../composables/useHeaderTheme";
import { lenis } from "../composables/useScroll";
import { projectId } from "../composables/useRouteObserver";
import { social } from "../content/social";
import ButtonRound from "./ButtonRound.vue";
import ArrowRight from "./icons/ArrowRight.vue";
import SoundsToggle from "./SoundsToggle.vue";
import { isFeatureEnabled } from "../utils/features";
import { useRouter } from "../composables/useRouter";
import { useFirstRoute } from "../composables/useFirstRoute";
import NavMenu from "./NavMenu.vue";

const isMenuOpen = ref(false);
const router = useRouter();
const { isFirstRoute } = useFirstRoute();

const scrolledPastHeroVisible = ref(false);
const { isDarkTheme } = useHeaderTheme({
  onUpdate: (element, boundingClientRect, hasScrolledIntoView) => {
    if (!element || !boundingClientRect) {
      scrolledPastHeroVisible.value = false;
      return;
    }

    if (hasScrolledIntoView) {
      scrolledPastHeroVisible.value = true;
    } else {
      scrolledPastHeroVisible.value = false;
    }
  },
});

const handleBackClick = () => {
  // If it's the first route the user visited, navigate to home
  // Otherwise, go back in browser history
  if (isFirstRoute.value) {
    router.push("/");
  } else {
    router.back();
  }
};

const handleLogoClick = () => {
  if (!lenis.value) return;
  lenis.value.scrollTo(0);
};

const classNames = computed(() => {
  return {
    header: true,
    "header-dark": isDarkTheme.value,
    "header-scrolled": scrolledPastHeroVisible.value,
    [`project-${projectId.value}`]: projectId.value !== null,
  };
});

const getInTouchClassNames = computed(() => {
  return {
    "header-get-in-touch": true,
    "header-get-in-touch-isProjectPage": projectId.value !== null,
  };
});
</script>

<template>
  <header :class="classNames">
    <div class="header-left">
      <ButtonRound
        v-if="projectId !== null"
        variant="accent"
        @click="handleBackClick"
        :aria-label="t('back-to-home')"
        :class="{ 'header-back': true, 'header-back-isProjectPage': projectId !== null }"
        data-cursor="circle-white"
        data-sound="click"
        data-hoversound="hover"
      >
        <ArrowRight class="header-back-icon" />
      </ButtonRound>
    </div>
    <div
      :class="{
        'header-logo': true,
        'header-logo-isProjectPage': projectId !== null,
        'header-logo-clickable': scrolledPastHeroVisible,
        'children-unclickable': true,
      }"
      @click="handleLogoClick"
      data-sound="click"
      data-hoversound="hover"
      data-cursor="circle-white"
    >
      <Logo class="header-logo-image" />
    </div>
    <div class="header-right">
      <Button
        renderAs="a"
        variant="accent"
        :aria-label="t('get-in-touch')"
        :href="social.find((item) => item.name === 'mail')?.url ?? ''"
        external
        :class="getInTouchClassNames"
        data-cursor="circle-white"
        data-hoversound="hover"
        >{{ t("get-in-touch") }}</Button
      >
      <SoundsToggle class="header-sounds-toggle" :isDarkTheme="isDarkTheme" v-if="isFeatureEnabled('sounds')" />
      <button
        class="menu-toggle-btn cursor-can-hover"
        :class="{ 'menu-toggle-btn-active': isMenuOpen }"
        @click="isMenuOpen = !isMenuOpen"
        :aria-label="isMenuOpen ? 'Close menu' : 'Open menu'"
        :aria-expanded="isMenuOpen"
        data-sound="click"
        data-hoversound="hover"
      >
        <span class="menu-toggle-text">
          <span class="menu-label" :class="{ 'menu-label-hidden': isMenuOpen }">Menu</span>
          <span class="menu-label" :class="{ 'menu-label-hidden': !isMenuOpen }">Close</span>
        </span>
        <span class="burger" :class="{ 'burgerActive': isMenuOpen }" />
      </button>
    </div>
  </header>
  <NavMenu :isOpen="isMenuOpen" @close="isMenuOpen = false" />
</template>

<style scoped lang="scss">
.header {
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  left: 50%;
  transform: translateX(-50%);
  width: var(--breakpoint-xxxl);
  padding: 0 var(--space-outer);
  max-width: 100%;
  z-index: var(--z-index-header);
  height: var(--height-header);
  pointer-events: none;

  --scrolled: 0;

  &-scrolled {
    --scrolled: 1;
  }

  &-back {
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
    transition-delay: 0.1s;
    pointer-events: auto;

    &-icon {
      width: 100%;
      transform: rotate(180deg);
    }

    &-isProjectPage {
      pointer-events: auto;
      opacity: 1;
    }
  }

  &-left {
    position: absolute;
    left: var(--space-outer);
    top: 50%;
    transform: translateY(-50%);
  }

  &-get-in-touch {
    width: fit-content;

    &-isProjectPage {
      opacity: 1 !important;
    }
  }

  &-right {
    position: absolute;
    right: var(--space-outer);
    top: 50%;
    transform: translateY(-50%);
    pointer-events: auto;
    display: flex;
    align-items: center;
    gap: var(--space-sm);
  }

  &-music-toggle {
    display: flex;
  }

  &-dark {
    color: var(--color-white-400);
    --icon-color: var(--color-white-400);
  }

  &-get-in-touch {
    display: none;

    @include mixins.mq("md") {
      display: flex;
    }
  }

  &-logo {
    cursor: pointer;
    display: flex;
    gap: var(--space-xs);
    transition: color 0.2s ease-in-out;
    opacity: var(--scrolled);
    pointer-events: none;

    &-clickable {
      pointer-events: all;
    }

    @include mixins.mq("md") {
      gap: var(--space-sm);
    }

    &-isProjectPage {
      transition: opacity 0.2s ease-in-out;
      pointer-events: none;
      opacity: 0;
    }

    &-image {
      width: 36px;

      @include mixins.mq("md") {
        width: 40px;
      }
    }

    &-text {
      font-weight: 900;
      font-size: 18px;

      @include mixins.mq("md") {
        font-size: 20px;
      }
    }
  }
}

.menu-toggle-btn {
  display: flex;
  align-items: center;
  gap: 10px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 999px;
  padding: 8px 16px;
  cursor: pointer;
  color: var(--color-white-400, #ffffff);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  pointer-events: auto;
  transition: background-color 0.25s ease, border-color 0.25s ease, transform 0.25s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.16);
    border-color: rgba(255, 255, 255, 0.35);
  }

  &-active {
    background: rgba(255, 255, 255, 0.22);
    border-color: rgba(255, 255, 255, 0.45);
  }

  // Hide on desktop — desktop nav (HeaderHome pill) handles navigation there
  @include mixins.mq("lg") {
    display: none;
  }
}

.menu-toggle-text {
  position: relative;
  display: inline-block;
  height: 16px;
  min-width: 44px;
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  overflow: hidden;
}

.menu-label {
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.4s cubic-bezier(0.76, 0, 0.24, 1), opacity 0.3s ease;

  &-hidden {
    opacity: 0;
    transform: translateY(100%);
    pointer-events: none;
  }
}

.burger {
  width: 20px;
  height: 12px;
  position: relative;
  display: block;
  pointer-events: none;

  &::after,
  &::before {
    content: '';
    height: 2px;
    width: 100%;
    background-color: currentColor;
    position: absolute;
    left: 0;
    display: block;
    border-radius: 2px;
    transition: transform 0.6s cubic-bezier(0.76, 0, 0.24, 1), top 0.6s cubic-bezier(0.76, 0, 0.24, 1);
  }

  &::before {
    top: 2px;
  }

  &::after {
    top: 8px;
  }

  &.burgerActive {
    &::after {
      transform: rotate(45deg);
      top: 5px;
    }

    &::before {
      transform: rotate(-45deg);
      top: 5px;
    }
  }
}
</style>
