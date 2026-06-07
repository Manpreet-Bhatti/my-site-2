"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Center, Resize, useProgress } from "@react-three/drei";

const POLAR_ANGLE = Math.PI / 2.5;

function SakuraModel() {
  const { scene } = useGLTF("/sakura_tree.glb");
  return (
    <Center>
      <Resize scale={3}>
        <primitive object={scene} />
      </Resize>
    </Center>
  );
}

function Loader() {
  const { active, progress } = useProgress();
  if (!active && progress === 100) return null;
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="w-7 h-7 rounded-full border-2 border-accent border-t-transparent animate-spin" />
    </div>
  );
}

useGLTF.preload("/sakura_tree.glb");

export default function SakuraViewer() {
  return (
    <div className="relative w-full h-[200px] md:h-[240px] cursor-grab active:cursor-grabbing">
      <Loader />
      <Canvas camera={{ position: [0, 1.5, 5], fov: 45 }} gl={{ antialias: true }}>
        <ambientLight intensity={1.0} />
        <directionalLight position={[5, 8, 5]} intensity={1.5} />
        <directionalLight position={[-5, 5, -5]} intensity={0.5} />
        <Suspense fallback={null}>
          <SakuraModel />
        </Suspense>
        <OrbitControls
          autoRotate
          autoRotateSpeed={1.2}
          enablePan={false}
          enableZoom={false}
          minPolarAngle={POLAR_ANGLE}
          maxPolarAngle={POLAR_ANGLE}
          enableDamping
          dampingFactor={0.08}
        />
      </Canvas>
    </div>
  );
}
