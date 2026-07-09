"use client";

import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense, useEffect, useMemo, useState } from "react";
import { DoubleSide, PCFSoftShadowMap } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

type RoomPreview3DProps = {
  modelUrl?: string;
  onCreated?: () => void;
};

function useMediaFlags() {
  const [flags, setFlags] = useState({
    mobileOrTouch: false,
    reduceMotion: false,
  });

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 767px), (pointer: coarse)");
    const reduceQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const update = () => {
      setFlags({
        mobileOrTouch: mobileQuery.matches,
        reduceMotion: reduceQuery.matches,
      });
    };

    update();
    mobileQuery.addEventListener("change", update);
    reduceQuery.addEventListener("change", update);

    return () => {
      mobileQuery.removeEventListener("change", update);
      reduceQuery.removeEventListener("change", update);
    };
  }, []);

  return flags;
}

function ModelAsset({ url }: { url: string }) {
  const gltf = useLoader(GLTFLoader, url);

  return <primitive object={gltf.scene} scale={1.2} position={[0, 0, 0]} />;
}

function RoomLighting({ mobileOrTouch }: { mobileOrTouch: boolean }) {
  const shadowMapSize = mobileOrTouch ? 512 : 1024;

  return (
    <>
      <ambientLight intensity={0.35} color="#E8DFD0" />
      <directionalLight
        position={[4, 5, 2]}
        intensity={1.2}
        color="#FFF4E0"
        castShadow
        shadow-mapSize-width={shadowMapSize}
        shadow-mapSize-height={shadowMapSize}
        shadow-camera-near={0.5}
        shadow-camera-far={12}
        shadow-camera-left={-4}
        shadow-camera-right={4}
        shadow-camera-top={4}
        shadow-camera-bottom={-4}
      />
      {!mobileOrTouch && (
        <pointLight position={[-2, 1.5, -1]} intensity={0.4} color="#8C5A3C" />
      )}
    </>
  );
}

function RoomEnvelope() {
  return (
    <>
      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[6, 6]} />
        <meshStandardMaterial color="#C9AD82" roughness={0.85} />
      </mesh>

      <mesh position={[0, 1.5, -2.95]} receiveShadow>
        <planeGeometry args={[6, 3]} />
        <meshStandardMaterial color="#EFE7D8" roughness={0.95} metalness={0} />
      </mesh>

      <mesh position={[-2.95, 1.5, 0]} rotation={[0, Math.PI / 2, 0]} receiveShadow>
        <planeGeometry args={[6, 3]} />
        <meshStandardMaterial color="#EFE7D8" roughness={0.95} metalness={0} />
      </mesh>

      <mesh position={[0, 0.01, 0.25]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[3, 2]} />
        <meshStandardMaterial color="#D8CBB8" roughness={0.9} />
      </mesh>
    </>
  );
}

function ProceduralFurniture() {
  const legPositions = useMemo(
    () =>
      [
        [0, 0, 0.33],
        [0.29, 0, -0.17],
        [-0.29, 0, -0.17],
      ] as const,
    [],
  );

  return (
    <>
      <group position={[-0.35, 0.28, -1.35]} castShadow>
        <mesh castShadow receiveShadow position={[0, 0, 0]}>
          <boxGeometry args={[1.8, 0.4, 0.8]} />
          <meshStandardMaterial color="#EDE6D8" roughness={0.75} metalness={0} />
        </mesh>
        <mesh castShadow receiveShadow position={[0, 0.32, -0.33]}>
          <boxGeometry args={[1.8, 0.5, 0.15]} />
          <meshStandardMaterial color="#EDE6D8" roughness={0.75} metalness={0} />
        </mesh>
        <mesh castShadow receiveShadow position={[-1, 0.18, 0]}>
          <boxGeometry args={[0.2, 0.35, 0.8]} />
          <meshStandardMaterial color="#EDE6D8" roughness={0.75} metalness={0} />
        </mesh>
        <mesh castShadow receiveShadow position={[1, 0.18, 0]}>
          <boxGeometry args={[0.2, 0.35, 0.8]} />
          <meshStandardMaterial color="#EDE6D8" roughness={0.75} metalness={0} />
        </mesh>
      </group>

      <group position={[0.2, 0.38, 0.15]}>
        <mesh castShadow receiveShadow>
          <cylinderGeometry args={[0.5, 0.5, 0.05, 48]} />
          <meshStandardMaterial color="#8C5A3C" roughness={0.5} metalness={0.1} />
        </mesh>
        {legPositions.map(([x, , z]) => (
          <mesh key={`${x}-${z}`} position={[x, -0.2, z]} castShadow>
            <cylinderGeometry args={[0.02, 0.02, 0.35, 16]} />
            <meshStandardMaterial color="#8C5A3C" roughness={0.5} metalness={0.1} />
          </mesh>
        ))}
        <mesh position={[0.12, 0.12, 0.05]} rotation={[Math.PI / 2, 0.2, 0.1]} castShadow>
          <torusGeometry args={[0.12, 0.035, 12, 28]} />
          <meshStandardMaterial color="#6B6F4C" roughness={0.65} metalness={0} />
        </mesh>
      </group>

      <group position={[1.75, 0, -1.15]}>
        <mesh position={[0, 0.7, 0]} castShadow>
          <cylinderGeometry args={[0.02, 0.02, 1.4, 16]} />
          <meshStandardMaterial color="#8C5A3C" roughness={0.55} metalness={0.1} />
        </mesh>
        <mesh position={[0, 1.46, 0]} castShadow>
          <coneGeometry args={[0.25, 0.35, 32, 1, true]} />
          <meshStandardMaterial
            color="#D8CBB8"
            roughness={0.7}
            emissive="#FFE8C4"
            emissiveIntensity={0.6}
            side={DoubleSide}
          />
        </mesh>
      </group>
    </>
  );
}

function ProceduralRoom({ mobileOrTouch }: { mobileOrTouch: boolean }) {
  return (
    <>
      <RoomLighting mobileOrTouch={mobileOrTouch} />
      <RoomEnvelope />
      <ProceduralFurniture />
    </>
  );
}

function Scene({
  modelUrl,
  mobileOrTouch,
}: {
  modelUrl?: string;
  mobileOrTouch: boolean;
}) {
  return modelUrl ? (
    <>
      <RoomLighting mobileOrTouch={mobileOrTouch} />
      <RoomEnvelope />
      <ModelAsset url={modelUrl} />
    </>
  ) : (
    <ProceduralRoom mobileOrTouch={mobileOrTouch} />
  );
}

export default function RoomPreview3D({ modelUrl, onCreated }: RoomPreview3DProps) {
  const { mobileOrTouch, reduceMotion } = useMediaFlags();
  const [hasInteracted, setHasInteracted] = useState(false);

  return (
    <div className="relative h-full w-full">
      <Canvas
        dpr={[1, 2]}
        shadows
        gl={{ antialias: true, powerPreference: "high-performance" }}
        camera={{ position: [3.2, 1.8, 3.2], fov: 42 }}
        onCreated={({ gl }) => {
          gl.shadowMap.enabled = true;
          gl.shadowMap.type = PCFSoftShadowMap;
          onCreated?.();
        }}
      >
        <Suspense fallback={null}>
          <Scene modelUrl={modelUrl} mobileOrTouch={mobileOrTouch} />
          <OrbitControls
            enableZoom
            enablePan={false}
            minDistance={2.5}
            maxDistance={5}
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI / 2.1}
            enableDamping={!reduceMotion}
            dampingFactor={reduceMotion ? 0 : 0.08}
            onStart={() => setHasInteracted(true)}
          />
        </Suspense>
      </Canvas>
      <div
        className={`pointer-events-none absolute bottom-3 left-3 rounded-full bg-[#F7F3EC]/80 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#201D18]/55 backdrop-blur-sm transition-opacity duration-300 ${
          hasInteracted ? "opacity-0" : "opacity-100"
        }`}
      >
        Drag to explore
      </div>
    </div>
  );
}
