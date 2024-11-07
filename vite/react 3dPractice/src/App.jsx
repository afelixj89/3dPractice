import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
// import * as THREE from "three";
import { useRef } from "react";
// import { MeshLambertMaterial } from "three";

const RotatingCube = () => {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef}>
      <cylinderGeometry args={[1, 1, 3]} />

      <meshLambertMaterial
        attach="material"
        color="#468585"
        // eslint-disable-next-line 
        emissive="#468585"
      />
    </mesh>
  );
};

const App = () => {
  return (
    <Canvas
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <OrbitControls enableZoom={true} enablePan enableRotate />
      <directionalLight position={[1, 1, 1]} intensity={10} color={0x9cdba6} />
      <color attach="background" args={["#F0F0F0"]} />
      <RotatingCube />
    </Canvas>
  );
};

export default App;
