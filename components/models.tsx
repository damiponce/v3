import { useGLTF } from '@react-three/drei';

export function Macbook(props) {
  // @ts-ignore
  const { nodes, materials } = useGLTF('/assets/macbook.gltf');
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001.geometry}
        material={materials.Laptop}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001_1.geometry}
        material={materials[' Spaeaker Laptop ']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001_2.geometry}
        material={materials.Keyboard}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001_3.geometry}
        material={materials['Track Pad']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001_4.geometry}
        material={materials.Feet}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001_5.geometry}
        material={materials['Screen Grey']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001_6.geometry}
        material={materials.Image}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001_7.geometry}
        material={materials.Image}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001_8.geometry}
        material={materials['Black Gloss']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001_9.geometry}
        material={materials.Keys}
      />
    </group>
  );
}
