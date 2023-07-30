import { FC, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import CanvasLoader from "../Common/CanvasLoader";
import { OrbitControls, useGLTF } from "@react-three/drei";

interface Props {}

const Earth: FC<Props> = (props): JSX.Element => {
  const earth = useGLTF("/en/planet/scene.gltf");
  return (
    <primitive
      object={earth.scene}
      scale={2.5}
      position-y={0}
      rotation-y={0}
      camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 6] }}
    />
  );
};

const EarthCanvas: FC<Props> = (props): JSX.Element => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{}}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
