"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { Suspense, useRef, useEffect, useState } from "react";
import * as THREE from "three";

// Hook to check for reduced motion preference
function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(media.matches);
    const listener = (e: MediaQueryListEvent) => setReduced(e.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, []);
  return reduced;
}

// 3D Scene Controller for Parallax tilt and auto-rotation
function SceneContent({
  modelUrl,
  reducedMotion,
}: {
  modelUrl?: string;
  reducedMotion: boolean;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const { mouse } = useThree();
  const targetRotation = useRef({ x: 0, y: 0 });

  useFrame(() => {
    if (!groupRef.current) return;

    // Auto-rotation: Slow and elegant (paused if reducedMotion)
    if (!reducedMotion) {
      groupRef.current.rotation.y += 0.003;
    }

    // Mouse parallax: subtle tilt based on mouse coords (paused if reducedMotion)
    if (!reducedMotion) {
      // Interpolate target rotation based on mouse coordinates
      targetRotation.current.y = THREE.MathUtils.lerp(
        targetRotation.current.y,
        mouse.x * 0.15,
        0.05
      );
      targetRotation.current.x = THREE.MathUtils.lerp(
        targetRotation.current.x,
        -mouse.y * 0.1,
        0.05
      );
      
      groupRef.current.rotation.x = targetRotation.current.x;
      // Combine auto-rotation and mouse parallax
      groupRef.current.rotation.y += (targetRotation.current.y - groupRef.current.rotation.y) * 0.05;
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.2, 0]}>
      {modelUrl ? (
        <Suspense fallback={null}>
          <GLTFModel url={modelUrl} />
        </Suspense>
      ) : (
        <AbstractComposition />
      )}
    </group>
  );
}

// Future-proof GLTF Model Component
function GLTFModel({ url }: { url: string }) {
  const gltf = useGLTF(url);
  return (
    <primitive
      object={gltf.scene}
      scale={1.5}
      position={[0, -0.5, 0]}
      castShadow
      receiveShadow
    />
  );
}

// Abstract composition of primitive forms evoking ranch materials (linen, clay, leather, wood)
function AbstractComposition() {
  return (
    <group>
      {/* 1. Low Coffee Table Plinth - Rough Oak wood/Clay feel */}
      <mesh position={[0, -0.6, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[1.6, 1.6, 0.2, 48]} />
        <meshStandardMaterial
          color="#F7F3EC"
          roughness={0.9}
          metalness={0.05}
        />
      </mesh>

      {/* 2. Textured Linen Throw Pillow (Stacked Box) */}
      <mesh position={[0.2, -0.3, -0.1]} rotation={[0, Math.PI / 6, 0]} castShadow receiveShadow>
        <boxGeometry args={[1.2, 0.4, 1.2]} />
        <meshStandardMaterial
          color="#EFE7D8"
          roughness={0.95}
          metalness={0}
        />
      </mesh>

      {/* 3. Muted Leather Layer/Tray (Flat Box) */}
      <mesh position={[-0.3, -0.05, 0.2]} rotation={[0, -Math.PI / 12, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.9, 0.1, 0.9]} />
        <meshStandardMaterial
          color="#8C5A3C"
          roughness={0.7}
          metalness={0.1}
        />
      </mesh>

      {/* 4. Ceramic/Stone Spherical Object - Sage Olive accent */}
      <mesh position={[-0.2, 0.15, 0.1]} castShadow receiveShadow>
        <sphereGeometry args={[0.22, 32, 32]} />
        <meshStandardMaterial
          color="#6B6F4C"
          roughness={0.8}
          metalness={0.05}
        />
      </mesh>
      
      {/* 5. Minimalist Sculpture Ring */}
      <mesh position={[0.3, 0.1, -0.2]} rotation={[Math.PI / 4, Math.PI / 4, 0]} castShadow>
        <torusGeometry args={[0.25, 0.06, 16, 48]} />
        <meshStandardMaterial
          color="#78716C"
          roughness={0.85}
          metalness={0.1}
        />
      </mesh>
    </group>
  );
}

interface HeroCanvasProps {
  modelUrl?: string;
  onCreated?: () => void;
}

export default function HeroCanvas({ modelUrl, onCreated }: HeroCanvasProps) {
  const reducedMotion = useReducedMotion();

  return (
    <div className="w-full h-full relative">
      <Canvas
        camera={{ position: [0, 1.8, 4.2], fov: 40 }}
        dpr={[1, 2]} // Cap device pixel ratio for performance
        shadows
        onCreated={onCreated}
      >
        <color attach="background" args={["#F7F3EC"]} />
        
        {/* Soft Ambient Light */}
        <ambientLight intensity={0.65} color="#F7F3EC" />
        
        {/* Key Directional Light - Warm sun effect */}
        <directionalLight
          position={[5, 8, 4]}
          intensity={1.2}
          color="#FFFDF9"
          castShadow
          shadow-mapSize={[1024, 1024]}
          shadow-bias={-0.0001}
        />

        {/* Soft Cool Fill Light - Blue sky shadow reflection */}
        <directionalLight
          position={[-5, 3, -2]}
          intensity={0.4}
          color="#E2E8F0"
        />

        {/* Warm Ground Bounce Light */}
        <directionalLight
          position={[0, -5, 0]}
          intensity={0.2}
          color="#EFE7D8"
        />

        <SceneContent modelUrl={modelUrl} reducedMotion={reducedMotion} />
      </Canvas>
    </div>
  );
}
