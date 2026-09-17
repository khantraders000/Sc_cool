import { useEffect, useRef } from 'react';
// Named imports instead of `import * as THREE` (or `await import('three')`
// used as a namespace) — this lets webpack tree-shake the three.js package
// down to only the ~12 classes actually used here, instead of bundling the
// whole library (loaders, controls, every geometry/material type, etc.).
// This file is still only fetched lazily (see Hero.js's next/dynamic +
// ssr:false), so this shrinks that lazy chunk rather than the main bundle.
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  Group,
  TorusGeometry,
  MeshBasicMaterial,
  Mesh,
  IcosahedronGeometry,
  BufferGeometry,
  BufferAttribute,
  PointsMaterial,
  Points,
  Clock,
} from 'three';

// Anything with a coarse pointer (touch) or a narrow viewport is treated as
// "mobile" here — phones and most tablets have meaningfully weaker
// GPUs/CPUs than a desktop, so the scene is scaled down rather than skipped
// entirely (skipping it would make the hero feel broken on the device most
// visitors actually use).
function isLowPowerDevice() {
  const coarsePointer = window.matchMedia('(pointer: coarse)').matches;
  const narrowViewport = window.innerWidth < 768;
  return coarsePointer || narrowViewport;
}

export default function ThreeScene() {
  const containerRef = useRef(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return undefined;

    let renderer, scene, camera, group, particles, core, animId;
    let resizeTimer;
    let running = true; // paused when the tab is hidden or the hero scrolls off-screen
    let intersectionObserver;
    let idleHandle;

    const setup = () => {
      const container = containerRef.current;
      if (!container) return;

      const lowPower = isLowPowerDevice();

      const width = container.clientWidth;
      const height = container.clientHeight;

      scene = new Scene();
      camera = new PerspectiveCamera(45, width / height, 0.1, 100);
      camera.position.set(0, 0, 9);

      // Mobile GPUs pay a real cost for antialiasing and for every extra
      // device pixel rendered — capping both keeps the scene smooth instead
      // of dropping frames on mid-range phones.
      renderer = new WebGLRenderer({ alpha: true, antialias: !lowPower });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, lowPower ? 1.5 : 2));
      renderer.setSize(width, height);
      container.appendChild(renderer.domElement);

      group = new Group();
      scene.add(group);

      const cyan = 0x4fd1d9;
      const copper = 0xc9843f;

      // Fewer torus segments and rings on low-power devices — visually
      // almost identical at this scale, meaningfully cheaper to draw.
      const torusSegments = lowPower ? 32 : 64;
      const ringCount = lowPower ? 3 : 5;
      for (let i = 0; i < ringCount; i++) {
        const torusGeo = new TorusGeometry(2.4, 0.02, 8, torusSegments);
        const torusMat = new MeshBasicMaterial({ color: cyan, wireframe: true, transparent: true, opacity: 0.35 });
        const torus = new Mesh(torusGeo, torusMat);
        torus.rotation.x = Math.PI / 2;
        torus.position.y = -1 + i * 0.5;
        torus.scale.setScalar(1 - i * 0.05);
        group.add(torus);
      }

      const coreGeo = new IcosahedronGeometry(1.35, lowPower ? 0 : 1);
      const coreMat = new MeshBasicMaterial({ color: copper, wireframe: true, transparent: true, opacity: 0.55 });
      core = new Mesh(coreGeo, coreMat);
      group.add(core);

      const count = lowPower ? 80 : 160;
      const positions = new Float32Array(count * 3);
      for (let p = 0; p < count; p++) {
        const r = 3.4 + Math.random() * 2.2;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(Math.random() * 2 - 1);
        positions[p * 3] = r * Math.sin(phi) * Math.cos(theta);
        positions[p * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.6;
        positions[p * 3 + 2] = r * Math.cos(phi);
      }
      const particlesGeo = new BufferGeometry();
      particlesGeo.setAttribute('position', new BufferAttribute(positions, 3));
      const particlesMat = new PointsMaterial({ color: cyan, size: 0.035, transparent: true, opacity: 0.55 });
      particles = new Points(particlesGeo, particlesMat);
      scene.add(particles);

      group.position.x = width > 768 ? 2.4 : 0;
      particles.position.x = group.position.x;

      let mouseX = 0;
      let mouseY = 0;
      const onMouseMove = (e) => {
        mouseX = e.clientX / window.innerWidth - 0.5;
        mouseY = e.clientY / window.innerHeight - 0.5;
      };
      window.addEventListener('mousemove', onMouseMove);

      const clock = new Clock();
      const animate = () => {
        if (!running) return; // stop the loop instead of rendering hidden/off-screen frames
        const t = clock.getElapsedTime();
        group.rotation.y = t * 0.18 + mouseX * 0.4;
        group.rotation.x = mouseY * 0.2;
        core.rotation.y = -t * 0.3;
        core.rotation.x = t * 0.15;
        particles.rotation.y = t * 0.03;
        renderer.render(scene, camera);
        animId = requestAnimationFrame(animate);
      };
      animate();

      // Pause rendering when the browser tab isn't visible — saves battery
      // and CPU on mobile in particular.
      const onVisibilityChange = () => {
        running = !document.hidden;
        if (running) animate();
        else cancelAnimationFrame(animId);
      };
      document.addEventListener('visibilitychange', onVisibilityChange);

      // Pause rendering once the hero has scrolled out of view — there is
      // no reason to keep driving the GPU for a canvas nobody can see.
      intersectionObserver = new IntersectionObserver(
        ([entry]) => {
          running = entry.isIntersecting && !document.hidden;
          if (running) animate();
          else cancelAnimationFrame(animId);
        },
        { threshold: 0 }
      );
      intersectionObserver.observe(container);

      const onResize = () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
          const w = container.clientWidth;
          const h = container.clientHeight;
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
          renderer.setSize(w, h);
          group.position.x = w > 768 ? 2.4 : 0;
          particles.position.x = group.position.x;
        }, 150);
      };
      window.addEventListener('resize', onResize);

      containerRef.current._cleanup = () => {
        running = false;
        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('resize', onResize);
        document.removeEventListener('visibilitychange', onVisibilityChange);
        if (intersectionObserver) intersectionObserver.disconnect();
        cancelAnimationFrame(animId);
        renderer.dispose();
        if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement);
      };
    };

    // Defer the actual scene setup until the browser is idle (or after a
    // short fallback delay on browsers without requestIdleCallback, e.g.
    // Safari) so this heavy WebGL work never competes with first paint /
    // first input on either desktop or mobile.
    if ('requestIdleCallback' in window) {
      idleHandle = window.requestIdleCallback(setup, { timeout: 1200 });
    } else {
      idleHandle = window.setTimeout(setup, 200);
    }

    return () => {
      if ('cancelIdleCallback' in window) window.cancelIdleCallback(idleHandle);
      else clearTimeout(idleHandle);
      if (containerRef.current && containerRef.current._cleanup) {
        containerRef.current._cleanup();
      }
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0 w-full h-full" aria-hidden="true" />;
}