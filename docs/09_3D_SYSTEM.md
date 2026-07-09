# 3D System: Refuge Decor & Designs LLC

## React Three Fiber Architecture

### Technology Stack
- **React Three Fiber**: React renderer for Three.js
- **@react-three/drei**: Useful helpers for R3F
- **@react-three/postprocessing**: Post-processing effects
- **three**: Core Three.js library
- **@types/three**: TypeScript types for Three.js

### Installation
```bash
npm install three @react-three/fiber @react-three/drei @react-three/postprocessing
npm install -D @types/three
```

### Architecture Pattern
```typescript
// Canvas wrapper
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';

export const Scene3D = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 50 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 2]} // Pixel ratio for performance
    >
      <Suspense fallback={<LoadingSpinner />}>
        <SceneContent />
      </Suspense>
    </Canvas>
  );
};
```

## Scene Graph

### Scene Structure
```
Canvas
├── Lighting
│   ├── AmbientLight
│   ├── DirectionalLight (main)
│   └── PointLight (accents)
├── Camera
├── Objects
│   ├── MainModel
│   ├── SecondaryObjects
│   └── Particles
└── PostProcessing
    ├── EffectComposer
    ├── Bloom (optional)
    └── ColorCorrection (optional)
```

### Scene Organization
- **Lighting Group**: All lights in one group
- **Objects Group**: All 3D objects in one group
- **UI Group**: HTML overlays on top of 3D scene
- **PostProcessing**: Effects applied to entire scene

## Lighting

### Lighting Strategy
- **Natural Light Simulation**: Mimic natural interior lighting
- **Warm Color Temperature**: 2700K-3000K for warmth
- **Soft Shadows**: Subtle, not harsh
- **Multiple Light Sources**: Key light, fill light, rim light

### Light Setup
```typescript
import { AmbientLight, DirectionalLight, PointLight } from '@react-three/drei';

const Lighting = () => {
  return (
    <>
      {/* Ambient light for base illumination */}
      <AmbientLight intensity={0.4} color="#FAF8F5" />

      {/* Main directional light (simulates window light) */}
      <DirectionalLight
        position={[5, 5, 5]}
        intensity={1}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        color="#FFF8E7"
      />

      {/* Accent point lights */}
      <PointLight position={[-5, 3, 0]} intensity={0.5} color="#FFD700" />
      <PointLight position={[5, 2, -2]} intensity={0.3} color="#FFA500" />
    </>
  );
};
```

### Lighting Principles
- **Key Light**: Main light source (window light simulation)
- **Fill Light**: Soft fill to reduce harsh shadows
- **Rim Light**: Backlight for depth and separation
- **Warm Colors**: Warm white to match brand aesthetic
- **Soft Shadows**: Large, soft shadows for realism

## Materials

### Material Strategy
- **PBR Materials**: Physically Based Rendering for realism
- **Natural Materials**: Wood, stone, metal, leather
- **Subtle Reflections**: Subtle, not mirror-like
- **Texture Quality**: High-quality textures for realism

### Material Setup
```typescript
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';

const WoodMaterial = () => {
  const [colorMap, normalMap, roughnessMap] = useTexture([
    '/textures/wood-color.jpg',
    '/textures/wood-normal.jpg',
    '/textures/wood-roughness.jpg',
  ]);

  return (
    <meshStandardMaterial
      map={colorMap}
      normalMap={normalMap}
      roughnessMap={roughnessMap}
      roughness={0.8}
      metalness={0.0}
    />
  );
};

const StoneMaterial = () => {
  const [colorMap, normalMap, roughnessMap] = useTexture([
    '/textures/stone-color.jpg',
    '/textures/stone-normal.jpg',
    '/textures/stone-roughness.jpg',
  ]);

  return (
    <meshStandardMaterial
      map={colorMap}
      normalMap={normalMap}
      roughnessMap={roughnessMap}
      roughness={0.9}
      metalness={0.0}
    />
  );
};

const MetalMaterial = () => {
  return (
    <meshStandardMaterial
      color="#8B7355"
      roughness={0.4}
      metalness={0.8}
    />
  );
};
```

### Material Types
- **Wood**: High roughness, no metalness, wood texture
- **Stone**: High roughness, no metalness, stone texture
- **Metal**: Medium roughness, high metalness, solid color
- **Leather**: Medium roughness, low metalness, leather texture
- **Fabric**: High roughness, no metalness, fabric texture

## Camera

### Camera Setup
```typescript
import { CameraControls } from '@react-three/drei';

const Camera = () => {
  return (
    <CameraControls
      makeDefault
      position={[0, 2, 5]}
      target={[0, 0, 0]}
      minDistance={3}
      maxDistance={10}
      minPolarAngle={Math.PI / 6}
      maxPolarAngle={Math.PI / 2}
    />
  );
};
```

### Camera Controls
- **Orbit Controls**: Allow user to rotate around scene
- **Zoom Limits**: Restrict zoom to maintain framing
- **Polar Angle Limits**: Prevent going below ground
- **Smooth Damping**: Smooth camera movement
- **Auto-Rotate**: Optional slow rotation for showcase

### Camera Behavior
- **Default Position**: Front-facing, slightly elevated
- **User Control**: Orbit, zoom, pan (restricted)
- **Auto-Rotate**: Slow rotation when idle (optional)
- **Reset Button**: Return to default view

## Controls

### Control Strategy
- **Orbit Controls**: Standard orbit controls for navigation
- **Touch Support**: Touch gestures for mobile
- **Keyboard Support**: Arrow keys for navigation
- **Smooth Damping**: Smooth camera movement
- **Restricted Movement**: Prevent losing the scene

### Control Implementation
```typescript
import { OrbitControls } from '@react-three/drei';

const Controls = () => {
  return (
    <OrbitControls
      makeDefault
      enableDamping
      dampingFactor={0.05}
      rotateSpeed={0.5}
      zoomSpeed={0.8}
      minDistance={3}
      maxDistance={10}
      minPolarAngle={Math.PI / 6}
      maxPolarAngle={Math.PI / 2}
    />
  );
};
```

### Control Restrictions
- **Min Distance**: 3 units (don't get too close)
- **Max Distance**: 10 units (don't get too far)
- **Min Polar Angle**: 30 degrees (don't go below ground)
- **Max Polar Angle**: 90 degrees (don't go above)
- **Enable Pan**: Disabled (keep scene centered)

## Performance

### Performance Strategy
- **Low Poly Models**: Optimize geometry for performance
- **Texture Compression**: Compress textures for faster loading
- **LOD (Level of Detail)**: Use simpler models at distance
- **Frustum Culling**: Don't render what's not visible
- **Instancing**: Reuse geometry where possible

### Performance Optimization
```typescript
// Use instancing for repeated objects
import { InstancedMesh } from '@react-three/drei';

const InstancedObjects = () => {
  return (
    <InstancedMesh
      args={[geometry, material, count]}
      geometry={boxGeometry}
      material={woodMaterial}
    />
  );
};

// Use LOD for distance-based detail
import { LOD } from '@react-three/drei';

const LODObject = () => {
  return (
    <LOD>
      <mesh geometry={highDetailGeometry} distance={[0, 5]} />
      <mesh geometry={mediumDetailGeometry} distance={[5, 10]} />
      <mesh geometry={lowDetailGeometry} distance={[10, 20]} />
    </LOD>
  );
};
```

### Performance Targets
- **Frame Rate**: 60fps on desktop, 30fps on mobile
- **Load Time**: < 3 seconds initial load
- **Memory Usage**: < 200MB
- **Draw Calls**: < 100
- **Triangles**: < 100,000

## Mobile Fallback

### Mobile Strategy
- **Simplified Scene**: Fewer objects, simpler geometry
- **Lower Resolution Textures**: Smaller texture files
- **No Post-Processing**: Disable expensive effects
- **Touch Controls**: Touch-friendly controls
- **Performance Mode**: Auto-detect and adjust

### Mobile Implementation
```typescript
const isMobile = () => {
  return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
};

const Scene3D = () => {
  const mobile = isMobile();

  return (
    <Canvas
      dpr={mobile ? 1 : [1, 2]}
      gl={{ antialias: !mobile }}
    >
      <Suspense fallback={<LoadingSpinner />}>
        {mobile ? <MobileScene /> : <DesktopScene />}
      </Suspense>
    </Canvas>
  );
};
```

### Mobile Optimizations
- **Pixel Ratio**: 1x on mobile, 1-2x on desktop
- **Antialiasing**: Disabled on mobile
- **Shadows**: Lower resolution on mobile
- **Textures**: 512x512 on mobile, 1024x1024 on desktop
- **Geometry**: Simplified on mobile

## Reduced Motion Behavior

### Reduced Motion Strategy
- **Disable Animations**: No auto-rotate or camera movement
- **Static Scene**: Scene is static, no motion
- **User Control Only**: Scene only moves on user interaction
- **No Particles**: Disable particle effects
- **No Post-Processing**: Disable expensive effects

### Reduced Motion Implementation
```typescript
const prefersReducedMotion = () => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

const Scene3D = () => {
  const reducedMotion = prefersReducedMotion();

  return (
    <Canvas>
      <Suspense fallback={<LoadingSpinner />}>
        <SceneContent reducedMotion={reducedMotion} />
      </Suspense>
      {!reducedMotion && <AutoRotate />}
    </Canvas>
  );
};
```

## Shadow Strategy

### Shadow Strategy
- **Soft Shadows**: Large, soft shadows for realism
- **Shadow Map Size**: 1024x1024 or 2048x2048
- **Shadow Bias**: Adjust to prevent artifacts
- **Shadow Cascades**: Use cascades for large scenes
- **Shadow Quality**: Medium quality for performance

### Shadow Implementation
```typescript
const DirectionalLightWithShadows = () => {
  return (
    <DirectionalLight
      position={[5, 5, 5]}
      intensity={1}
      castShadow
      shadow-mapSize-width={1024}
      shadow-mapSize-height={1024}
      shadow-camera-near={0.5}
      shadow-camera-far={50}
      shadow-camera-left={-10}
      shadow-camera-right={10}
      shadow-camera-top={10}
      shadow-camera-bottom={-10}
      shadow-bias={-0.0001}
    />
  );
};
```

### Shadow Quality
- **Desktop**: 2048x2048 shadow maps
- **Mobile**: 1024x1024 shadow maps
- **Soft Shadows**: PCFSoftShadowMap
- **Shadow Bias**: -0.0001 to prevent artifacts

## Postprocessing Philosophy

### Postprocessing Strategy
- **Minimal Effects**: Subtle enhancements only
- **Bloom**: Optional, subtle bloom for highlights
- **Color Correction**: Optional, slight color adjustment
- **Vignette**: Optional, subtle vignette for focus
- **Performance**: Disable on mobile

### Postprocessing Implementation
```typescript
import { EffectComposer, Bloom } from '@react-three/postprocessing';

const PostProcessing = () => {
  return (
    <EffectComposer>
      <Bloom luminanceThreshold={0.5} luminanceSmoothing={0.9} height={300} />
    </EffectComposer>
  );
};
```

### Postprocessing Effects
- **Bloom**: Subtle bloom for light sources
- **Color Correction**: Warm color grading
- **Vignette**: Subtle vignette for focus
- **Chromatic Aberration**: Disabled (too distracting)
- **Film Grain**: Disabled (too noisy)

## Future GLTF Replacement Strategy

### Current Approach
- **Procedural Geometry**: Use Three.js primitives for now
- **Simple Materials**: Basic materials without textures
- **Placeholder Models**: Simple shapes to represent furniture

### Future Strategy
- **GLTF Models**: Replace with high-quality GLTF models
- **Custom Models**: Commission custom 3D models
- **Texture Maps**: Add color, normal, roughness maps
- **Optimization**: Optimize models for web performance
- **Loading**: Implement proper asset loading

### GLTF Implementation Plan
```typescript
// Future GLTF loading
import { useGLTF } from '@react-three/drei';

const Model = () => {
  const { scene } = useGLTF('/models/chair.gltf');
  return <primitive object={scene} />;
};
```

## Asset Loading

### Loading Strategy
- **Progressive Loading**: Load assets progressively
- **Suspense**: Use React Suspense for loading states
- **Loading Screen**: Show loading screen during asset load
- **Error Handling**: Handle loading errors gracefully
- **Preloading**: Preload critical assets

### Loading Implementation
```typescript
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Model = () => {
  const gltf = useLoader(GLTFLoader, '/models/chair.gltf');
  return <primitive object={gltf.scene} />;
};

const Scene3D = () => {
  return (
    <Canvas>
      <Suspense fallback={<LoadingScreen />}>
        <Model />
      </Suspense>
    </Canvas>
  );
};
```

### Loading States
- **Initial Load**: Show loading screen
- **Asset Load**: Show progress indicator
- **Error**: Show error message with retry
- **Complete**: Fade out loading screen

## Suspense

### Suspense Strategy
- **Component-Level Suspense**: Wrap each 3D component
- **Loading Fallback**: Show loading spinner or skeleton
- **Error Boundary**: Catch loading errors
- **Progressive Loading**: Load assets as needed

### Suspense Implementation
```typescript
import { Suspense } from 'react';

const Scene3D = () => {
  return (
    <Canvas>
      <Suspense fallback={<LoadingSpinner />}>
        <Lighting />
        <MainModel />
        <SecondaryObjects />
      </Suspense>
    </Canvas>
  );
};
```

## Error Handling

### Error Strategy
- **Error Boundaries**: Catch 3D rendering errors
- **Fallback UI**: Show fallback UI on error
- **Error Logging**: Log errors for debugging
- **User Feedback**: Show user-friendly error messages
- **Retry Option**: Allow user to retry loading

### Error Implementation
```typescript
import { ErrorBoundary } from 'react-error-boundary';

const Scene3D = () => {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={(error) => console.error('3D Error:', error)}
    >
      <Canvas>
        <Suspense fallback={<LoadingSpinner />}>
          <SceneContent />
        </Suspense>
      </Canvas>
    </ErrorBoundary>
  );
};

const ErrorFallback = () => {
  return (
    <div>
      <p>Failed to load 3D scene</p>
      <button onClick={() => window.location.reload()}>Retry</button>
    </div>
  );
};
```

## 3D Scene Use Cases

### Hero Section 3D
- **Purpose**: Showcase 3D model of furniture or space
- **Interaction**: User can rotate and zoom
- **Performance**: Optimized for quick load
- **Mobile**: Simplified version or fallback to image

### Product Showcase 3D
- **Purpose**: Show 3D model of product
- **Interaction**: User can rotate and inspect
- **Features**: Hotspots for product details
- **Mobile**: Touch-friendly controls

### Architectural Visualization 3D
- **Purpose**: Show 3D model of space
- **Interaction**: Walkthrough or orbit
- **Features**: Day/night cycle, material switching
- **Mobile**: Simplified walkthrough

## 3D Accessibility

### Accessibility Strategy
- **Keyboard Control**: Keyboard navigation for 3D scene
- **Screen Reader**: Alt text and descriptions
- **Reduced Motion**: Disable animations
- **Fallback**: 2D image fallback for 3D content
- **Focus Management**: Manage focus in 3D scene

### Accessibility Implementation
```typescript
const Scene3D = () => {
  const reducedMotion = prefersReducedMotion();

  return (
    <>
      <Canvas>
        <Suspense fallback={<LoadingSpinner />}>
          <SceneContent reducedMotion={reducedMotion} />
        </Suspense>
      </Canvas>
      {reducedMotion && <FallbackImage src="/images/fallback.jpg" alt="3D scene fallback" />}
    </>
  );
};
```

## 3D Performance Monitoring

### Performance Metrics
- **Frame Rate**: Monitor FPS
- **Load Time**: Measure asset load time
- **Memory Usage**: Monitor memory consumption
- **Draw Calls**: Count draw calls
- **Triangles**: Count triangle count

### Monitoring Implementation
```typescript
import { Stats } from '@react-three/drei';

const Scene3D = () => {
  return (
    <Canvas>
      <Stats />
      <SceneContent />
    </Canvas>
  );
};
```

## 3D Documentation

### Component Documentation
Each 3D component must document:
- Purpose and use case
- Performance characteristics
- Mobile behavior
- Accessibility considerations
- Loading strategy
- Error handling
