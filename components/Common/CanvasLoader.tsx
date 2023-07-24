import { FC } from "react";
import { Html, useProgress } from "@react-three/drei";

interface Props {}

const CanvasLoader: FC<Props> = (props): JSX.Element => {
  // Progress là số phần trăm của tiến độ load 3D Model
  const { progress } = useProgress();
  return (
    <Html>
      <span className="canvas-load">
        <p
          style={{
            fontSize: 14,
            color: "#f1f1f1",
            fontWeight: 800,
          }}
        >
          {progress.toFixed(2)}%
        </p>
      </span>
    </Html>
  );
};

export default CanvasLoader;
