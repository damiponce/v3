import * as THREE from 'three';
import { useRef } from 'react';
import { Canvas, ThreeElements, useFrame } from '@react-three/fiber';
import {
  useGLTF,
  Bounds,
  Edges,
  Center,
  Text3D,
  OrbitControls,
} from '@react-three/drei';
// use ↓ "DebugLayerMaterial as LayerMaterial" ↓ here for integrated leva debug panels
import { DebugLayerMaterial, LayerMaterial, Depth, Fresnel } from 'lamina';
import { useControls } from 'leva';

function ThreeD({ errorCode }: { errorCode: string }) {
  // const { rotX, rotY, rotZ } = useControls({
  //   rotX: { value: 0, min: -Math.PI, max: Math.PI },
  //   rotY: { value: 0, min: -Math.PI, max: Math.PI },
  //   rotZ: { value: 0, min: -Math.PI, max: Math.PI },
  // });
  return (
    <Canvas
      orthographic
      dpr={[1, 2]}
      camera={{ position: [0, 0, 10], zoom: 100 }}
      gl={{
        outputColorSpace: THREE.SRGBColorSpace,
        toneMapping: THREE.ACESFilmicToneMapping,
        antialias: true,
      }}
    >
      {/* <group rotation={[rotX, rotY, rotZ]}> */}
      <group rotation={[1.5, -0.24, 1.44]}>
        {/* <group rotation={[Math.PI / 3, -Math.PI / 12, Math.PI / 2]}> */}
        <Bounds fit clip observe margin={1.25}>
          <Cursor errorCode={errorCode} />
          <Cursor
            errorCode={'not found'}
            offset={[0, -0.4, 1]}
            scale={[0.2, 0.2, 0.2]}
          />
        </Bounds>
        <gridHelper
          args={[10, 40, '#101010', '#050505']}
          position={[-0.4, 0, 0]}
          rotation={[0, 0, Math.PI / 2]}
        />
      </group>
      {/* <OrbitControls /> */}
    </Canvas>
  );
}

function Cursor({
  errorCode,
  offset = [0, 0, 0],
  ...props
}: {
  errorCode: string;
  offset?: [number, number, number];
  props?: ThreeElements['mesh'];
}) {
  const ref = useRef(null!);

  // const { gradient } = useControls({
  //   gradient: { value: 0.7, min: 0, max: 1 },
  // });

  const gradient = 0.7;

  const offsetX = 0.48;
  const offsetY = 0.36;
  const offsetZ = 0;

  // Animate gradient
  useFrame((state) => {
    const sin = Math.sin(state.clock.elapsedTime / 2);
    const cos = Math.cos(state.clock.elapsedTime / 2);
    ref.current.layers[0] &&
    ref.current.layers[1] &&
    ref.current.layers[2] &&
    ref.current.layers[3]
      ? (ref.current.layers[0].origin.set(
          offsetX + cos / 2,
          offsetY + 0,
          offsetZ + 0,
        ),
        ref.current.layers[1].origin.set(
          offsetX + cos,
          offsetY + sin,
          offsetZ + cos,
        ),
        ref.current.layers[2].origin.set(
          offsetX + sin,
          offsetY + cos,
          offsetZ + sin,
        ),
        ref.current.layers[3].origin.set(
          offsetX + cos,
          offsetY + sin,
          offsetZ + cos,
        ))
      : null;
  });

  return (
    <Center>
      <Text3D
        {...props}
        font='/Scandia.json'
        ref={ref}
        rotation={[0, Math.PI / 2, -Math.PI / 2]}
        position={[offset[0], offset[1], offset[2]]}
        curveSegments={32}
        height={0.7}
        // bevelEnabled={false}
        // bevelThickness={0.05}
        // bevelSize={0.02}
        // bevelOffset={0}
        // bevelSegments={10}
        // castShadow
        // receiveShadow
      >
        {errorCode.toString()}
        <LayerMaterial ref={ref} toneMapped={false}>
          <Depth
            colorA='#ff0080'
            colorB='black'
            alpha={1}
            mode='normal'
            near={0.5 * gradient}
            far={0.5}
            origin={[0, 0, 0]}
          />
          <Depth
            colorA='blue'
            colorB='#f7b955'
            alpha={1}
            mode='add'
            near={2 * gradient}
            far={2}
            origin={[0, 1, 1]}
          />
          <Depth
            colorA='green'
            colorB='#f7b955'
            alpha={1}
            mode='add'
            near={3 * gradient}
            far={3}
            origin={[0, 1, -1]}
          />
          <Depth
            colorA='white'
            colorB='red'
            alpha={1}
            mode='overlay'
            near={1.5 * gradient}
            far={1.5}
            origin={[1, -1, -1]}
          />
          <Fresnel
            mode='add'
            color='lightgrey'
            intensity={0.5}
            power={1.5}
            bias={0.05}
          />
        </LayerMaterial>
        <Edges color='black' />
      </Text3D>
    </Center>
  );
}

export default ThreeD;
