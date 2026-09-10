<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { Application, type SplineEvent } from "@splinetool/runtime";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);


const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const canvasRef = ref<HTMLCanvasElement | null>(null);
const particlesCanvasRef = ref<HTMLCanvasElement | null>(null);
const sectionRef = ref<HTMLElement | null>(null);
const isLoading = ref(true);
const isKeyboardRevealed = ref(false);

let splineApp: Application | null = null;
let audioCtx: AudioContext | null = null;
let pressBuffer: AudioBuffer | null = null;
let releaseBuffer: AudioBuffer | null = null;
let currentHoveredSkillName: string | null = null; // tracks which key is currently under the cursor

// Particle animation state
type Circle = {
  x: number;
  y: number;
  size: number;
  alpha: number;
  targetAlpha: number;
  dx: number;
  dy: number;
};
let particlesRaf: number = 0;
let circles: Circle[] = [];

const initParticles = () => {
  const canvas = particlesCanvasRef.value;
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const resize = () => {
    if (!canvas || !canvas.parentElement) return;
    canvas.width = canvas.parentElement.offsetWidth;
    canvas.height = canvas.parentElement.offsetHeight;
    circles = [];
    for (let i = 0; i < 70; i++) {
      circles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.8 + 0.3,
        alpha: Math.random() * 0.5 + 0.1,
        targetAlpha: Math.random() * 0.7 + 0.15,
        dx: (Math.random() - 0.5) * 0.25,
        dy: (Math.random() - 0.5) * 0.25,
      });
    }
  };

  resize();
  window.addEventListener("resize", resize);

  const renderParticles = () => {
    if (!canvas || !ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < circles.length; i++) {
      const c = circles[i]!;
      c.x += c.dx;
      c.y += c.dy;

      if (c.x < 0) c.x = canvas.width;
      if (c.x > canvas.width) c.x = 0;
      if (c.y < 0) c.y = canvas.height;
      if (c.y > canvas.height) c.y = 0;

      ctx.beginPath();
      ctx.arc(c.x, c.y, c.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(45, 42, 36, ${c.alpha * 0.35})`;
      ctx.fill();
    }

    particlesRaf = requestAnimationFrame(renderParticles);
  };

  renderParticles();
};

const initAudio = async () => {
  try {
    const AudioCtxClass = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioCtxClass) return;
    audioCtx = new AudioCtxClass();

    const [pressRes, releaseRes] = await Promise.all([
      fetch("/assets/keycap-sounds/press.mp3"),
      fetch("/assets/keycap-sounds/release.mp3"),
    ]);

    const [pressData, releaseData] = await Promise.all([
      pressRes.arrayBuffer(),
      releaseRes.arrayBuffer(),
    ]);

    pressBuffer = await audioCtx.decodeAudioData(pressData);
    releaseBuffer = await audioCtx.decodeAudioData(releaseData);
  } catch (err) {
    console.warn("Audio init failed:", err);
  }
};

const playSound = (buffer: AudioBuffer | null) => {
  if (!audioCtx || !buffer) return;
  if (audioCtx.state === "suspended") {
    audioCtx.resume().catch(() => {});
  }
  try {
    const source = audioCtx.createBufferSource();
    source.buffer = buffer;
    source.detune.value = (Math.random() * 200) - 100;
    const gain = audioCtx.createGain();
    gain.gain.value = 0.45;
    source.connect(gain);
    gain.connect(audioCtx.destination);
    source.start(0);
  } catch (e) {
    // ignore
  }
};

const playPressSound = () => playSound(pressBuffer);
const playReleaseSound = () => playSound(releaseBuffer);

// Exact entry reveal animation from reference repo
const runKeyboardEntryAnimation = async () => {
  if (!splineApp || isKeyboardRevealed.value) return;
  const kbd = splineApp.findObjectByName("keyboard");
  if (!kbd) return;

  isKeyboardRevealed.value = true;
  kbd.visible = false;
  await sleep(400);
  kbd.visible = true;

  const isMobile = window.innerWidth < 768;
  const targetScale = isMobile
    ? { x: 0.28, y: 0.28, z: 0.28 }
    : { x: 0.25, y: 0.25, z: 0.25 };

  // Set exact position & angle for skills section
  kbd.position.x = 0;
  kbd.position.y = -40;
  kbd.position.z = 0;

  kbd.rotation.x = 0;
  kbd.rotation.y = Math.PI / 12;
  kbd.rotation.z = 0;

  // Elastic scale entry pop-in
  gsap.fromTo(
    kbd.scale,
    { x: 0.01, y: 0.01, z: 0.01 },
    {
      ...targetScale,
      duration: 1.5,
      ease: "elastic.out(1, 0.6)",
    }
  );

  const allObjects = splineApp.getAllObjects();
  const keycaps = allObjects.filter((obj) => obj.name === "keycap");

  await sleep(900);

  if (isMobile) {
    const mobileKeyCaps = allObjects.filter((obj) => obj.name === "keycap-mobile");
    mobileKeyCaps.forEach((keycap) => {
      keycap.visible = true;
    });
  } else {
    const desktopKeyCaps = allObjects.filter((obj) => obj.name === "keycap-desktop");
    desktopKeyCaps.forEach(async (keycap, idx) => {
      await sleep(idx * 70);
      keycap.visible = true;
    });
  }

  // Keycaps drop-and-bounce entry
  keycaps.forEach(async (keycap, idx) => {
    keycap.visible = false;
    await sleep(idx * 70);
    keycap.visible = true;
    gsap.fromTo(
      keycap.position,
      { y: 200 },
      { y: 50, duration: 0.5, delay: 0.1, ease: "bounce.out" }
    );
  });

  // Hide 3D text meshes completely
  const textDesktopLight = splineApp.findObjectByName("text-desktop");
  const textDesktopDark = splineApp.findObjectByName("text-desktop-dark");
  if (textDesktopLight) textDesktopLight.visible = false;
  if (textDesktopDark) textDesktopDark.visible = false;
};

const handleKeyDown = (_e: KeyboardEvent) => {
  if (
    document.activeElement &&
    (document.activeElement.tagName === "INPUT" ||
      document.activeElement.tagName === "TEXTAREA" ||
      (document.activeElement as HTMLElement).isContentEditable)
  ) {
    return;
  }

  playPressSound();
};

const handleKeyUp = () => {
  playReleaseSound();
};

onMounted(async () => {
  initParticles();
  await initAudio();

  if (canvasRef.value) {
    try {
      splineApp = new Application(canvasRef.value);
      (window as any).splineApp = splineApp;
      await splineApp.load("/assets/skills-keyboard.spline");
      isLoading.value = false;

      // Ensure 3D text meshes are hidden
      const textDesktopLight = splineApp.findObjectByName("text-desktop");
      const textDesktopDark = splineApp.findObjectByName("text-desktop-dark");
      if (textDesktopDark) textDesktopDark.visible = false;
      if (textDesktopLight) textDesktopLight.visible = false;

      // Event listeners on Spline elements
      splineApp.addEventListener("mouseHover", (e: SplineEvent) => {
        if (!splineApp || !e.target?.name) return;
        const targetName = e.target.name.toLowerCase();

        // Leaving a key area to background/platform
        if (targetName === "body" || targetName === "platform") {
          if (currentHoveredSkillName !== null) {
            playReleaseSound();
            currentHoveredSkillName = null;
          }
          return;
        }

        // Only trigger sound once when entering a new key
        if (currentHoveredSkillName !== targetName) {
          if (currentHoveredSkillName !== null) {
            playReleaseSound();
          }
          playPressSound();
          currentHoveredSkillName = targetName;
        }
      });

      splineApp.addEventListener("keyDown", () => {
        playPressSound();
      });

      splineApp.addEventListener("keyUp", () => {
        playReleaseSound();
      });

      // Run entry animation when section scrolls into view
      if (sectionRef.value) {
        ScrollTrigger.create({
          trigger: sectionRef.value,
          start: "top 75%",
          once: true,
          onEnter: () => {
            runKeyboardEntryAnimation();
          },
        });
      } else {
        runKeyboardEntryAnimation();
      }
    } catch (err) {
      console.warn("Spline load error:", err);
      isLoading.value = false;
    }
  }

  window.addEventListener("keydown", handleKeyDown);
  window.addEventListener("keyup", handleKeyUp);
});

onUnmounted(() => {
  window.removeEventListener("keydown", handleKeyDown);
  window.removeEventListener("keyup", handleKeyUp);
  cancelAnimationFrame(particlesRaf);
  if (splineApp) {
    try {
      splineApp.dispose();
    } catch {
      // ignore
    }
  }
  if (audioCtx) {
    audioCtx.close().catch(() => {});
  }
});
</script>

<template>
  <section class="tech-stack-section" id="tech-stack" ref="sectionRef">
    <!-- Starry background particle canvas -->
    <canvas ref="particlesCanvasRef" class="particles-canvas" />

    <!-- Ambient glowing backdrop aura -->
    <div class="space-glow" />

    <div class="tech-stack-header-wrapper">
      <h2 class="tech-stack-title">Tech Stack</h2>
      <p class="tech-stack-hint">(hover a key or press a letter)</p>
    </div>

    <div class="keyboard-canvas-stage">
      <div v-if="isLoading" class="keyboard-loading">
        <div class="loading-spinner" />
        <span>Summoning 3D Keyboard...</span>
      </div>

      <canvas ref="canvasRef" class="keyboard-canvas" />
    </div>


  </section>
</template>

<style scoped lang="scss">
.tech-stack-section {
  width: 100%;
  min-height: 100vh;
  position: relative;
  background-color: var(--color-beige-400, #f5efe6);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 80px 0 40px;
  overflow: hidden;
  box-sizing: border-box;
}

.particles-canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.space-glow {
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 800px;
  height: 500px;
  background: radial-gradient(circle, rgba(255, 132, 0, 0.08) 0%, rgba(245, 239, 230, 0) 70%);
  pointer-events: none;
  z-index: 1;
}

.tech-stack-header-wrapper {
  position: relative;
  z-index: 5;
  text-align: center;
  pointer-events: none;
  margin-bottom: 12px;
}

.tech-stack-title {
  font-size: clamp(52px, 7vw, 92px);
  font-weight: 900;
  letter-spacing: -0.01em;
  line-height: 1.05;
  margin: 0 0 10px;
  color: var(--color-text-400, #2d2a24);
  text-transform: uppercase;
}

.tech-stack-hint {
  font-size: 16px;
  color: var(--color-text-300, #5f5646);
  margin: 0;
  font-weight: 500;
  letter-spacing: 0.04em;
}

.keyboard-canvas-stage {
  position: relative;
  width: 100%;
  height: calc(100vh - 160px);
  min-height: 620px;
  max-width: 1500px;
  z-index: 4;
  display: flex;
  align-items: center;
  justify-content: center;
}

.keyboard-canvas {
  width: 100%;
  height: 100%;
  outline: none;
  cursor: grab;

  &:active {
    cursor: grabbing;
  }
}

.keyboard-loading {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  color: rgba(255, 255, 255, 0.7);
  font-size: 14px;
  z-index: 10;
}

.loading-spinner {
  width: 36px;
  height: 36px;
  border: 3px solid rgba(255, 255, 255, 0.1);
  border-top-color: #ff6b35;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}


</style>
