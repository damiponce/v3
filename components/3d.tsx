import * as THREE from 'three';
import { createRoot } from 'react-dom/client';
import React, { Suspense, useRef, useState } from 'react';
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
} from '@react-three/drei';

// IMPORTING
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useControls } from 'leva';
import { Pathtracer, usePathtracer } from '@react-three/gpu-pathtracer';
import { Macbook } from './models';

// import { suspend } from 'suspend-react';
// const lights = import('/public/assets/st_peters_square_night_1k.exr').then(
//   (module) => module.default,
// );

type Props = {
  children?: React.ReactNode;
};

function Box(props: ThreeElements['mesh']) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  useFrame(
    (state, delta) => (
      (meshRef.current.rotation.x += delta),
      (meshRef.current.rotation.y += delta),
      (meshRef.current.rotation.z += delta)
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
      <sphereGeometry args={[1, 32, 2]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  );
}

export function Model(props) {
  const {
    chip_color,
    chip_rough,
    chip_metal,
    pins_color,
    pins_rough,
    pins_metal,
  } = useControls({
    chip_color: '#161616',
    chip_rough: { value: 0.7, min: 0, max: 1, step: 0.01 },
    chip_metal: { value: 0.2, min: 0, max: 1, step: 0.01 },
    pins_color: '#ccc',
    pins_rough: { value: 0.95, min: 0, max: 1, step: 0.01 },
    pins_metal: { value: 1, min: 0, max: 1, step: 0.01 },
  });

  // @ts-ignore
  const { nodes, materials } = useGLTF('/assets/ic-cute-3.gltf');
  const meshRef = useRef<THREE.Mesh>(null!);

  // useFrame(
  //   (state, delta) => (
  //     (meshRef.current.rotation.y += delta), (meshRef.current.rotation.x = 0.5)
  //   ),
  // );
  useFrame(
    (state, delta) => (
      (meshRef.current.rotation.x = 1.0),
      // (meshRef.current.rotation.y = -0.2),
      (meshRef.current.rotation.z = -0.2),
      (meshRef.current.rotation.y += 0.5 * delta)
    ),
  );
  // useFrame(
  //   (state, delta) => (
  //     (meshRef.current.rotation.x = 0.0),
  //     // (meshRef.current.rotation.y = -0.2),
  //     (meshRef.current.rotation.z = -0.0),
  //     (meshRef.current.rotation.y += 0.0 * delta)
  //   ),
  // );
  return (
    <group {...props} dispose={null} ref={meshRef} scale={10}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Body.geometry}
        // material={materials['Material.001']}
        position={[0, 0.036, 0]}
        scale={[1.112, 0.203, 1.112]}
      >
        <meshStandardMaterial
          color={chip_color}
          metalness={chip_metal}
          roughness={chip_rough}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.PinsA.geometry}
        // material={materials['Material.002']}
        position={[-0.72, 0.029, 0]}
      >
        <meshStandardMaterial
          color={pins_color}
          metalness={pins_metal}
          roughness={pins_rough}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.PinsB.geometry}
        // material={materials['Material.002']}
        position={[0, 0.029, 0.72]}
        rotation={[0, Math.PI / 2, 0]}
      >
        <meshStandardMaterial
          color={pins_color}
          metalness={pins_metal}
          roughness={pins_rough}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload('/assets/ic-cute-3.gltf');

useGLTF.preload('/assets/macbook.gltf');

const Camera = ({ rt = false, enabled = false }) => {
  if (!rt) return <OrbitControls makeDefault enabled={enabled} />;
  const { reset } = usePathtracer();

  return (
    <OrbitControls onChange={() => reset()} makeDefault enabled={enabled} />
  );
};

const Container = ({ children }: Props) => {
  let pixelRatio = typeof window === 'undefined' ? 1 : window.devicePixelRatio;
  let AA = true;
  if (pixelRatio > 1) {
    AA = false;
  }

  function RendererHoC() {
    const { gl } = useThree();
    // console.log('Number of Triangles :', gl.info.render);
    return <></>;
  }

  return (
    <Canvas
      gl={{
        outputColorSpace: THREE.SRGBColorSpace,
        toneMapping: THREE.ACESFilmicToneMapping,
        powerPreference: 'high-performance',
        antialias: AA,
        pixelRatio: pixelRatio * 0.5,
      }}
    >
      <Suspense fallback={null}>
        {/* <Pathtracer
        samples={20}
        enabled={true}
        bounces={5}
        // frames={100}
        resolutionFactor={1}
        alpha={1}
        backgroundBlur={0.02}
      >*/}
        <RendererHoC />
        <Camera enabled />
        <OrthographicCamera makeDefault position={[0, 0, 20]} zoom={10} />
        <Environment files={'/assets/studio_small_03_1k.exr'} />
        {/* <Environment files={'/assets/white.exr'} /> */}
        {/* <rectAreaLight
          color={0x6600dd}
          intensity={30}
          position={[20, -5, 20]}
          width={30}
          height={30}
          lookAt={[0, 0, 0]}
        /> */}
        {/* <rectAreaLight
          color={0xdd0055}
          intensity={35}
          position={[-20, 10, 15]}
          width={30}
          height={30}
          lookAt={[0, 0, 0]}
        /> */}
        {/* <Box /> */}
        <Shadow />
        <Model />
        {/* <Macbook /> */}
        {/* <Stats /> */}
        <StatsGl />
      </Suspense>
    </Canvas>
  );
};

export default Container;
