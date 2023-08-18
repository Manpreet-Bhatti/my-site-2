import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { RetroComputerModel } from "./RetroComputerModel.jsx";
import { ModelContainer, ModelSpinner } from "./model-loader.js";

const ComputerModel = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ModelContainer>
      {loading ? (
        <ModelSpinner />
      ) : (
        <Canvas>
          <RetroComputerModel />
        </Canvas>
      )}
    </ModelContainer>
  );
};

export default ComputerModel;
