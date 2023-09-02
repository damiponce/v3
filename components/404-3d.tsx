import * as THREE from 'three';
import { createRoot } from 'react-dom/client';
import React, {
  Suspense,
  use,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { Canvas, useFrame, ThreeElements, useThree } from '@react-three/fiber';
import {
  OrbitControls,
  OrthographicCamera,
  PerspectiveCamera,
  useGLTF,
  Stats,
  Environment,
  PerformanceMonitor,
  Wireframe,
  Lightformer,
  Stars,
  Shadow,
  StatsGl,
  Text3D,
  Center,
  Stage,
  Plane,
  SoftShadows,
  AccumulativeShadows,
  Backdrop,
  RandomizedLight,
  SpotLight,
  useDepthBuffer,
} from '@react-three/drei';

// IMPORTING

function Box(props: ThreeElements['mesh']) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  useFrame(
    (state, delta) => (
      meshRef.current.rotation.x,
      meshRef.current.rotation.y,
      meshRef.current.rotation.z
    ),
  );
  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={active ? 13 : 10}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry args={[1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  );
}

function Text(props: ThreeElements['mesh']) {
  const meshRef = useRef(null!);
  const baseOffset = 0.5;

  useFrame(
    (state, delta) => (meshRef.current.geometry.parameters.options.height = 10),
    // 1 + baseOffset + Math.sin(state.clock.getElapsedTime() * 2)),
  );

  useEffect(() => {
    console.log(meshRef.current);
    console.log(meshRef.current.geometry.parameters.options.height);
  }, [meshRef.current]);

  return (
    <Center>
      <Text3D
        {...props}
        font='/Scandia.json'
        ref={meshRef}
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, 0.32, 0]}
        curveSegments={32}
        bevelEnabled
        bevelThickness={0.05}
        bevelSize={0.02}
        bevelOffset={0}
        bevelSegments={10}
        castShadow
        receiveShadow
      >
        404
        <meshStandardMaterial color='#bbb' />
      </Text3D>
    </Center>
  );
}

const easeInOutCubic = (t) =>
  t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
function Sphere({ position = [0, 0, 0], ...props }) {
  const ref = useRef();
  const factor = useMemo(() => 0.5 + Math.random(), []);
  useFrame((state) => {
    const t = easeInOutCubic(
      (1 + Math.sin(state.clock.getElapsedTime() * factor)) / 2,
    );
    ref.current.position.y = position[1] + t * 4;
    ref.current.scale.y = 1 + t * 3;
  });
  return (
    <mesh ref={ref} position={position} {...props} castShadow receiveShadow>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshLambertMaterial color='white' roughness={0} metalness={0.1} />
    </mesh>
  );
}

function Spheres({ number = 20 }) {
  const ref = useRef();
  const positions = useMemo(
    () =>
      [...new Array(number)].map(() => [
        3 - Math.random() * 6,
        Math.random() * 4,
        3 - Math.random() * 6,
      ]),
    [],
  );
  useFrame(
    (state) =>
      (ref.current.rotation.y =
        Math.sin(state.clock.getElapsedTime() / 2) * Math.PI),
  );
  return (
    <group ref={ref}>
      {positions.map((pos, index) => (
        <Sphere key={index} position={pos} />
      ))}
    </group>
  );
}

const FourOhFour = () => {
  let pixelRatio = typeof window === 'undefined' ? 1 : window.devicePixelRatio;
  let AA = true;
  if (pixelRatio > 1) {
    AA = false;
  }
  // const depthBuffer = useDepthBuffer();

  return (
    <Canvas
      gl={{
        outputColorSpace: THREE.SRGBColorSpace,
        toneMapping: THREE.ACESFilmicToneMapping,
        // powerPreference: 'high-performance',
        antialias: AA,
        // pixelRatio: pixelRatio * 0.5,
      }}
      shadows
      // camera={{ position: [-5, 2, 10], fov: 90 }}
    >
      {/* <Suspense fallback={null}> */}
      {true && (
        <>
          <OrbitControls makeDefault />;
          <ambientLight intensity={0.2} />
          <Text />
          {/* <mesh
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, 0, 0]}
            receiveShadow
          >
            <planeGeometry args={[100, 100]} />
            <meshPhysicalMaterial transparent opacity={0.4} />
          </mesh> */}
          <SoftShadows />
          {/* <Environment files={'/assets/studio_small_03_1k.exr'} /> */}
          {/* <directionalLight
            position={[10, 10, -5]}
            intensity={2}
            castShadow
            // shadow-mapSize={1024}
          >
            <orthographicCamera
              attach='shadow-camera'
              args={[-50, 50, -50, 50, 0.1, 50]}
            />
          </directionalLight> */}
          <AccumulativeShadows temporal color='gray' frames={1} scale={10}>
            <RandomizedLight amount={8} position={[5, 5, -5]} />
            {/* <SpotLight
              // depthBuffer={depthBuffer}
              distance={5}
              angle={0.15}
              attenuation={5}
              anglePower={5}
            /> */}
          </AccumulativeShadows>
          {/* <directionalLight
            position={[3, 3, -3]}
            intensity={10}
            castShadow
          ></directionalLight> */}
          <OrthographicCamera makeDefault position={[20, 45, 50]} zoom={150} />
          <StatsGl />
        </>
      )}
      {false && (
        <>
          <SoftShadows />
          <ambientLight intensity={0.5} />
          <directionalLight
            castShadow
            position={[2.5, 8, 5]}
            intensity={1.5}
            shadow-mapSize={1024}
          >
            <orthographicCamera
              attach='shadow-camera'
              args={[-10, 10, -10, 10, 0.1, 50]}
            />
          </directionalLight>
          <pointLight position={[-10, 0, -20]} color='white' intensity={1} />
          <pointLight position={[0, -10, 0]} intensity={1} />
          <group position={[0, -3.5, 0]}>
            <mesh receiveShadow castShadow>
              <boxGeometry args={[4, 1, 1]} />
              <meshLambertMaterial />
            </mesh>
            <mesh
              rotation={[-Math.PI / 2, 0, 0]}
              position={[0, -0.5, 0]}
              receiveShadow
            >
              <planeGeometry args={[100, 100]} />
              <shadowMaterial transparent opacity={0.4} />
            </mesh>
            <Spheres />
          </group>
        </>
      )}
      {/* </Suspense> */}
    </Canvas>
  );
};

export default FourOhFour;
