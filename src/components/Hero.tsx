
// import { useRef, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import * as THREE from 'three';

// /* ------------------- Three.js Particle Scene ------------------- */
// function ThreeParticleScene() {
//   const canvasRef = useRef<HTMLCanvasElement>(null);

//   useEffect(() => {
//     if (!canvasRef.current) return;

//     const particleCount = 2000;
//     const scene = new THREE.Scene();

//     const camera = new THREE.PerspectiveCamera(
//       75,
//       window.innerWidth / window.innerHeight,
//       0.1,
//       1000
//     );
//     camera.position.z = 5;

//     const renderer = new THREE.WebGLRenderer({
//       canvas: canvasRef.current,
//       alpha: true,
//       antialias: true,
//     });
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

//     scene.add(new THREE.AmbientLight(0xffffff, 0.6));

//     const light1 = new THREE.PointLight(0x0462e6, 1, 100);
//     light1.position.set(10, 10, 10);
//     scene.add(light1);

//     const light2 = new THREE.PointLight(0xfed864, 0.6, 100);
//     light2.position.set(-10, -10, -10);
//     scene.add(light2);

//     const geometry = new THREE.BufferGeometry();
//     const positions = new Float32Array(particleCount * 3);
//     const colors = new Float32Array(particleCount * 3);

//     const blue = new THREE.Color(0x0462e6);
//     const gold = new THREE.Color(0xfed864);

//     for (let i = 0; i < particleCount; i++) {
//       positions[i * 3] = (Math.random() - 0.5) * 10;
//       positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
//       positions[i * 3 + 2] = (Math.random() - 0.5) * 2;

//       const c = i % 2 === 0 ? blue : gold;
//       colors.set([c.r, c.g, c.b], i * 3);
//     }

//     geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
//     geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

//     const material = new THREE.PointsMaterial({
//       size: 0.03,
//       vertexColors: true,
//       transparent: true,
//       opacity: 0.85,
//       blending: THREE.AdditiveBlending,
//       depthWrite: false,
//     });

//     const particles = new THREE.Points(geometry, material);
//     scene.add(particles);

//     const clock = new THREE.Clock();

//     const animate = () => {
//       requestAnimationFrame(animate);
//       const t = clock.getElapsedTime();
//       const pos = geometry.attributes.position.array as Float32Array;

//       for (let i = 0; i < particleCount; i++) {
//         pos[i * 3 + 1] += Math.sin(t + i * 0.01) * 0.002;
//       }

//       geometry.attributes.position.needsUpdate = true;
//       particles.rotation.y = Math.sin(t * 0.1) * 0.1;
//       renderer.render(scene, camera);
//     };

//     animate();

//     const resize = () => {
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(window.innerWidth, window.innerHeight);
//     };

//     window.addEventListener('resize', resize);

//     return () => {
//       window.removeEventListener('resize', resize);
//       renderer.dispose();
//       geometry.dispose();
//       material.dispose();
//     };
//   }, []);

//   return <canvas ref={canvasRef} className="absolute inset-0" />;
// }

// /* ------------------- Hero Section ------------------- */
// export default function ParticleHero() {
//   return (
//     <section className="relative min-h-screen overflow-hidden flex items-center justify-center">

//       {/* Base Gradient */}
//       <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f1e] via-[#0d1526] to-[#020617]" />

//       {/* Animated Waves */}
//       <motion.svg
//         className="absolute inset-0 w-full h-full opacity-40"
//         viewBox="0 0 1440 600"
//         preserveAspectRatio="none"
//         animate={{ y: [0, -30, 0] }}
//         transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
//       >
//         <path
//           fill="#0462e6"
//           fillOpacity="0.35"
//           d="M0,300 C240,200 480,400 720,300 960,200 1200,400 1440,300 L1440,600 L0,600 Z"
//         />
//       </motion.svg>

//       <motion.svg
//         className="absolute inset-0 w-full h-full opacity-30"
//         viewBox="0 0 1440 600"
//         preserveAspectRatio="none"
//         animate={{ y: [0, 20, 0] }}
//         transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
//       >
//         <path
//           fill="#fed864"
//           fillOpacity="0.2"
//           d="M0,320 C300,380 600,200 900,300 1200,420 1440,260 1440,260 L1440,600 L0,600 Z"
//         />
//       </motion.svg>

//       {/* Noise Texture */}
//       <div
//         className="absolute inset-0 pointer-events-none opacity-[0.06]"
//         style={{
//           backgroundImage:
//             'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'120\' height=\'120\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'120\' height=\'120\' filter=\'url(%23n)\' opacity=\'0.4\'/%3E%3C/svg%3E")',
//         }}
//       />

//       {/* Particles */}
//       <ThreeParticleScene />

//       {/* Content */}
//       <div className="relative z-10 text-center px-6 max-w-5xl">
//         <h1 className="text-7xl md:text-9xl font-bold mb-6 text-white">
//           Arvana
//         </h1>

//         <p className="text-2xl md:text-3xl text-white/90 mb-4 font-light">
//           Transforming ideas into
//         </p>

//         <p className="text-3xl md:text-4xl font-bold mb-12 text-[#fed864]">
//           scalable solutions
//         </p>

//         <div className="flex flex-col sm:flex-row gap-6 justify-center">
//           <button className="px-10 py-5 bg-white text-[#0462e6] rounded-full font-bold text-lg shadow-2xl">
//             Let’s Talk
//           </button>

//           <button className="px-10 py-5 border-2 border-white text-white rounded-full font-bold text-lg">
//             See Our Work
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }


import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import * as THREE from "three";

/* ------------------- Three.js Particle Scene ------------------- */
function ThreeParticleScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef(new THREE.Vector2());

  useEffect(() => {
    if (!canvasRef.current) return;

    const particleCount = 2000;
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    scene.add(new THREE.AmbientLight(0xffffff, 0.6));

    const light1 = new THREE.PointLight(0x0462e6, 1, 100);
    light1.position.set(10, 10, 10);
    scene.add(light1);

    const light2 = new THREE.PointLight(0xfed864, 0.6, 100);
    light2.position.set(-10, -10, -10);
    scene.add(light2);

    // Geometry
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const originalPositions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const blue = new THREE.Color(0x0462e6);
    const gold = new THREE.Color(0xfed864);

    for (let i = 0; i < particleCount; i++) {
      const x = (Math.random() - 0.5) * 10;
      const y = (Math.random() - 0.5) * 10;
      const z = (Math.random() - 0.5) * 2;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      originalPositions[i * 3] = x;
      originalPositions[i * 3 + 1] = y;
      originalPositions[i * 3 + 2] = z;

      velocities[i * 3] = 0;
      velocities[i * 3 + 1] = 0;
      velocities[i * 3 + 2] = 0;

      const c = i % 2 === 0 ? blue : gold;
      colors.set([c.r, c.g, c.b], i * 3);
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.03,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    const clock = new THREE.Clock();
    const raycaster = new THREE.Raycaster();
    let lastMouseMove = Date.now();

    // Mouse move
    const handleMouseMove = (event: MouseEvent) => {
      mouseRef.current.set(
        (event.clientX / window.innerWidth) * 2 - 1,
        -(event.clientY / window.innerHeight) * 2 + 1
      );
      lastMouseMove = Date.now();
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Animate
    const animate = () => {
      requestAnimationFrame(animate);
      const t = clock.getElapsedTime();
      const pos = geometry.attributes.position.array as Float32Array;

      const isMouseIdle = Date.now() - lastMouseMove > 500;

      // Update mouse 3D
      raycaster.setFromCamera(mouseRef.current, camera);
      const distance = -camera.position.z / raycaster.ray.direction.z;
      const mouse3D = new THREE.Vector3().copy(raycaster.ray.direction)
        .multiplyScalar(distance)
        .add(camera.position);

      // Particle physics
      for (let i = 0; i < particleCount; i++) {
        const idx = i * 3;

        const px = pos[idx];
        const py = pos[idx + 1];
        const pz = pos[idx + 2];

        const ox = originalPositions[idx];
        const oy = originalPositions[idx + 1];
        const oz = originalPositions[idx + 2];

        // Idle wave flow
        if (isMouseIdle) {
          const flowSpeed = 0.01;
          const flowRadius = 0.3;
          const angle = t * 0.3 + i * 0.1;
          const flowX = Math.cos(angle) * flowRadius * Math.sin(t * 0.2 + i * 0.05);
          const flowY = Math.sin(angle) * flowRadius * Math.cos(t * 0.15 + i * 0.03);

          velocities[idx] += flowX * flowSpeed;
          velocities[idx + 1] += flowY * flowSpeed;
          velocities[idx + 2] += Math.sin(t + i * 0.02) * 0.001;
        }

        // Mouse repulsion
        const dx = px - mouse3D.x;
        const dy = py - mouse3D.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const repulsionRadius = 2.0;
        const repulsionStrength = 0.2;

        if (dist < repulsionRadius && dist > 0.01) {
          const force = (1 - dist / repulsionRadius) * repulsionStrength;
          const angle = Math.atan2(dy, dx);
          velocities[idx] += Math.cos(angle) * force;
          velocities[idx + 1] += Math.sin(angle) * force;
        }

        // Return to original
        const returnForce = isMouseIdle ? 0.01 : 0.02;
        velocities[idx] += (ox - px) * returnForce;
        velocities[idx + 1] += (oy - py) * returnForce;
        velocities[idx + 2] += (oz - pz) * returnForce;

        // Damping
        const damping = isMouseIdle ? 0.95 : 0.92;
        velocities[idx] *= damping;
        velocities[idx + 1] *= damping;
        velocities[idx + 2] *= damping;

        // Update position
        pos[idx] += velocities[idx];
        pos[idx + 1] += velocities[idx + 1];
        pos[idx + 2] += velocities[idx + 2];

        // Subtle sine wave
        pos[idx + 1] += Math.sin(t + i * 0.01) * 0.002;
      }

      geometry.attributes.position.needsUpdate = true;
      particles.rotation.y = Math.sin(t * 0.1) * 0.1;
      renderer.render(scene, camera);
    };

    animate();

    const resize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0" />;
}

/* ------------------- Hero Section ------------------- */
export default function ParticleHero() {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f1e] via-[#0d1526] to-[#020617]" />

      {/* Motion Waves */}
      <motion.svg
        className="absolute inset-0 w-full h-full opacity-40"
        viewBox="0 0 1440 600"
        preserveAspectRatio="none"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      >
        <path
          fill="#0462e6"
          fillOpacity="0.35"
          d="M0,300 C240,200 480,400 720,300 960,200 1200,400 1440,300 L1440,600 L0,600 Z"
        />
      </motion.svg>

      <motion.svg
        className="absolute inset-0 w-full h-full opacity-30"
        viewBox="0 0 1440 600"
        preserveAspectRatio="none"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      >
        <path
          fill="#fed864"
          fillOpacity="0.2"
          d="M0,320 C300,380 600,200 900,300 1200,420 1440,260 1440,260 L1440,600 L0,600 Z"
        />
      </motion.svg>

      {/* Noise texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage:
            "url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" width=\"120\" height=\"120\"%3E%3Cfilter id=\"n\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.8\" numOctaves=\"4\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"120\" height=\"120\" filter=\"url(%23n)\" opacity=\"0.4\"/%3E%3C/svg%3E')",
        }}
      />

      {/* Particles */}
      <ThreeParticleScene />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl">
        <h1 className="text-7xl md:text-9xl font-bold mb-6 text-white">
          Arvana
        </h1>

        <p className="text-2xl md:text-3xl text-white/90 mb-4 font-light">
          Transforming ideas into
        </p>

        <p className="text-3xl md:text-4xl font-bold mb-12 text-[#fed864]">
          scalable solutions
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button className="px-10 py-5 bg-white text-[#0462e6] rounded-full font-bold text-lg shadow-2xl">
            Let's Talk
          </button>

          <button className="px-10 py-5 border-2 border-white text-white rounded-full font-bold text-lg">
            See Our Work
          </button>
        </div>
      </div>
    </section>
  );
}
