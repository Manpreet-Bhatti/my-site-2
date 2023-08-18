import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function RetroComputerModel(props) {
  const { nodes, materials } = useGLTF("/retro_computer.glb");
  const groupRef = useRef();

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.0125;
    }
  });

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={2}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.Object_4.geometry}
            material={materials.TextureGrid}
            position={[0, -0.6, -0.031]}
            rotation={[0.087, 0, 0]}
          />
          <mesh
            geometry={nodes.Object_6.geometry}
            material={materials.TextureGrid}
            position={[0, -0.1, 0.031]}
            rotation={[0.087, 0, 0]}
          />
          <mesh
            geometry={nodes.Object_8.geometry}
            material={materials.TextureGrid}
            position={[0.875, -0.538, 0.75]}
            rotation={[0.087, 0, 0]}
          />
          <mesh
            geometry={nodes.Object_10.geometry}
            material={materials.TextureGrid}
            position={[0, -0.538, 0.813]}
            rotation={[0.087, 0, 0]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/retro_computer.glb");
