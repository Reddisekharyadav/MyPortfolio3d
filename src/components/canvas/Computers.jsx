import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

// Accept screenSize as a prop from parent (Hero)
const Computers = ({ screenSize }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  console.log("Current screenSize:", screenSize);

  // Responsive scale and position
  let scale = 0.75;
  let position = [-1, -3.25, -1.5];
  if (screenSize === "tablet") {
  scale = 0.39;
  position = [5, -3, 0.5];
} else if (screenSize === "mobile") {
  scale = 0.49;
  position = [-10, -4, -3];
}

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={scale}
        position={position}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = ({ screenSize }) => {
  return (
    <div className="w-full h-screen relative">
      <Canvas
        frameloop='demand'
        shadows
        dpr={[1, 2]}
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
        className="w-full h-full absolute top-0 left-0"
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Computers screenSize={screenSize} />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default ComputersCanvas;