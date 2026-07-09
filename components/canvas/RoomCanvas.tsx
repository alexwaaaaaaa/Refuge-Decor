"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Line, useGLTF } from "@react-three/drei";
import { Suspense } from "react";

// Generate points for the signature West Texas horizon curve to display on the back wall
const generateHorizonPoints = (): [number, number, number][] => {
  const points: [number, number, number][] = [];
  const segments = 60;
  const width = 6;
  const zPos = -1.98; // slightly in front of the back wall
  
  for (let i = 0; i <= segments; i++) {
    const pct = i / segments;
    const x = -width / 2 + pct * width;
    
    // Smooth rolling hill formula mimicking the West Texas landscape
    const y = 0.6 + Math.sin(x * 1.3) * 0.18 + Math.cos(x * 3.5) * 0.04;
    points.push([x, y, zPos]);
  }
  return points;
};

// Procedural 3D Room Mockup Component
function ProceduralRoom() {
  const horizonPoints = generateHorizonPoints();

  return (
    <group>
      {/* 1. Floor - Warm Oak tone */}
      <mesh position={[0, -0.95, 0]} receiveShadow>
        <boxGeometry args={[6, 0.1, 6]} />
        <meshStandardMaterial color="#EFE7D8" roughness={0.8} />
      </mesh>

      {/* 2. Back Wall - Off-white Plaster */}
      <mesh position={[0, 0.5, -2]} receiveShadow castShadow>
        <boxGeometry args={[6, 3, 0.1]} />
        <meshStandardMaterial color="#F7F3EC" roughness={0.9} />
      </mesh>

      {/* 3. Left Wall - Off-white Plaster */}
      <mesh position={[-3, 0.5, 1]} receiveShadow castShadow>
        <boxGeometry args={[0.1, 3, 6]} />
        <meshStandardMaterial color="#F7F3EC" roughness={0.9} />
      </mesh>

      {/* 4. Signature Horizon Line Art drawn on the Back Wall */}
      <Line
        points={horizonPoints}
        color="#8C5A3C" // Muted leather accent color
        lineWidth={2}
      />

      {/* 5. Minimalist Rug - Warm Linen texture */}
      <mesh position={[0, -0.89, 0.3]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[3.8, 2.8]} />
        <meshStandardMaterial color="#EFE7D8" roughness={0.95} />
      </mesh>

      {/* 6. Procedural Minimalist Sofa */}
      <group position={[0, -0.4, 0.2]}>
        {/* Sofa Base - Muted Leather accent */}
        <mesh position={[0, -0.4, 0]} castShadow receiveShadow>
          <boxGeometry args={[2.4, 0.18, 0.9]} />
          <meshStandardMaterial color="#8C5A3C" roughness={0.6} />
        </mesh>

        {/* Seat Cushions */}
        <mesh position={[-0.55, -0.22, 0.05]} castShadow receiveShadow>
          <boxGeometry args={[1.05, 0.22, 0.8]} />
          <meshStandardMaterial color="#F7F3EC" roughness={0.85} />
        </mesh>
        <mesh position={[0.55, -0.22, 0.05]} castShadow receiveShadow>
          <boxGeometry args={[1.05, 0.22, 0.8]} />
          <meshStandardMaterial color="#F7F3EC" roughness={0.85} />
        </mesh>

        {/* Backrest */}
        <mesh position={[0, 0.15, -0.3]} castShadow receiveShadow>
          <boxGeometry args={[2.2, 0.55, 0.25]} />
          <meshStandardMaterial color="#F7F3EC" roughness={0.85} />
        </mesh>

        {/* Armrests */}
        <mesh position={[-1.15, -0.1, 0.05]} castShadow receiveShadow>
          <boxGeometry args={[0.2, 0.45, 0.8]} />
          <meshStandardMaterial color="#F7F3EC" roughness={0.85} />
        </mesh>
        <mesh position={[1.15, -0.1, 0.05]} castShadow receiveShadow>
          <boxGeometry args={[0.2, 0.45, 0.8]} />
          <meshStandardMaterial color="#F7F3EC" roughness={0.85} />
        </mesh>

        {/* Olive throw pillow */}
        <mesh position={[-0.8, -0.05, 0.2]} rotation={[0, Math.PI / 8, Math.PI / 12]} castShadow>
          <boxGeometry args={[0.35, 0.35, 0.12]} />
          <meshStandardMaterial color="#6B6F4C" roughness={0.9} />
        </mesh>
      </group>

      {/* 7. Cylinder Floor Lamp */}
      <group position={[-2, -0.9, -1.2]}>
        {/* Lamp Base */}
        <mesh position={[0, 0.02, 0]} castShadow>
          <cylinderGeometry args={[0.2, 0.2, 0.04, 24]} />
          <meshStandardMaterial color="#201D18" roughness={0.5} />
        </mesh>
        {/* Thin Metal Stand */}
        <mesh position={[0, 1.0, 0]} castShadow>
          <cylinderGeometry args={[0.015, 0.015, 2.0, 8]} />
          <meshStandardMaterial color="#201D18" roughness={0.5} />
        </mesh>
        {/* Lamp Shade */}
        <mesh position={[0, 1.9, 0]} castShadow>
          <cylinderGeometry args={[0.22, 0.22, 0.38, 24]} />
          <meshStandardMaterial color="#F7F3EC" roughness={0.9} />
        </mesh>
        {/* Warm Lamp Light Glow */}
        <spotLight
          position={[0, 1.8, 0]}
          angle={Math.PI / 3}
          penumbra={0.8}
          intensity={2.5}
          color="#FFF3D6"
          castShadow
          target-position={[-0.5, -0.5, 0.5]}
        />
      </group>
    </group>
  );
}

// Future-proof GLTF Model Component
function RoomGLTFModel({ url }: { url: string }) {
  const gltf = useGLTF(url);
  return <primitive object={gltf.scene} scale={1} position={[0, -0.9, 0]} />;
}

interface RoomCanvasProps {
  modelUrl?: string;
  onCreated?: () => void;
}

export default function RoomCanvas({ modelUrl, onCreated }: RoomCanvasProps) {
  return (
    <div className="w-full h-full relative">
      <Canvas
        camera={{ position: [3, 2.2, 4.5], fov: 42 }}
        dpr={[1, 2]}
        shadows
        onCreated={onCreated}
      >
        <color attach="background" args={["#F7F3EC"]} />

        {/* Ambient lighting */}
        <ambientLight intensity={0.55} color="#F7F3EC" />

        {/* Studio spotlight */}
        <directionalLight
          position={[4, 7, 3]}
          intensity={0.9}
          color="#FFFDF9"
          castShadow
          shadow-mapSize={[1024, 1024]}
        />
        
        {/* Soft fill light */}
        <directionalLight
          position={[-4, 3, -1]}
          intensity={0.3}
          color="#E2E8F0"
        />

        <Suspense fallback={null}>
          {modelUrl ? (
            <RoomGLTFModel url={modelUrl} />
          ) : (
            <ProceduralRoom />
          )}
        </Suspense>

        {/* Clamped Orbit Controls for navigation */}
        <OrbitControls
          enableZoom={true}
          minDistance={2.5}
          maxDistance={6.5}
          minPolarAngle={0.1}
          maxPolarAngle={Math.PI / 2 - 0.05} // Do not let user look below floor
          enablePan={false}
        />
      </Canvas>
    </div>
  );
}
