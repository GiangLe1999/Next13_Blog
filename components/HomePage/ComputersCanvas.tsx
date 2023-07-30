"use client";

import { FC, Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Common/CanvasLoader";

interface Props {
  isMobile: boolean;
}

const Computers: FC<Props> = ({ isMobile }): JSX.Element => {
  // Load 3D model
  const computer = useGLTF("/en/desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      ></spotLight>
      <primitive
        object={computer.scene}
        // Kích thước & vị trí 3D Model
        scale={isMobile ? 0.65 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Khi vừa load, kiểm tra screen size đang ở mobile hay desktop
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set state để render phù hợp với screen size
    setIsMobile(mediaQuery.matches);

    const mediaQueryChangeHandler = (event: any) => {
      setIsMobile(event.matches);
    };

    // Theo dõi sự thay đổi của screen size
    mediaQuery.addEventListener("change", mediaQueryChangeHandler);

    return () => {
      mediaQuery.removeEventListener("change", mediaQueryChangeHandler);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      // Góc nhìn #D model
      //  fov là field of view: độ rộng của view
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      {/* Suspense của React cho phép render 1 loader khi mà 3D model đang loading */}
      <Suspense fallback={<CanvasLoader />}>
        {/* OrbitControls cho phép di chuyển model quay sang phải và trái */}
        <OrbitControls
          enableZoom={false}
          // Chỉ cho phép xoay model xung quanh 1 trục
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
