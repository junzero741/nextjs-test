'use client';
import { CameraControls, Environment, OrbitControls, Outlines } from '@react-three/drei';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

import { Physics, useSphere } from '@react-three/cannon';

export default function Balls({ count }: { count: number }) {
	return (
		<>
			<Canvas shadows gl={{ antialias: false }} dpr={[1, 1.5]} camera={{ position: [0, 0, 20], fov: 35, near: 1, far: 40 }}>
				<ambientLight intensity={0.5} />
				<color attach='background' args={['#dfdfdf']} />
				<spotLight intensity={1} angle={0.2} penumbra={1} position={[30, 30, 30]} castShadow shadow-mapSize={[512, 512]} />
				<CameraControls minDistance={5} maxDistance={30} />
				<Physics gravity={[0, 2, 0]} iterations={10}>
					<Pointer />
					<Clump count={count} />
				</Physics>
				<Environment files={'/adamsbridge.hdr'} />
			</Canvas>
		</>
	);
}

const mat = new THREE.Matrix4();
const vec = new THREE.Vector3();
const rfs = THREE.MathUtils.randFloatSpread;
const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);
const baubleMaterial = new THREE.MeshStandardMaterial({ color: 'white', roughness: 0, envMapIntensity: 1 });

type ClumpProps = {
	count: number;
};
function Clump({ count }: ClumpProps) {
	const [ref, api] = useSphere(() => ({
		args: [1],
		mass: 1,
		angularDamping: 0.1,
		linearDamping: 0.65,
		position: [rfs(20), rfs(20), rfs(20)],
	}));

	useFrame(() => {
		if (count) {
			for (let i = 0; i < count; i++) {
				if (ref.current) {
					const instancedMesh = ref.current as THREE.InstancedMesh;
					instancedMesh.getMatrixAt(i, mat);
				}
				api.at(i).applyForce(vec.setFromMatrixPosition(mat).normalize().multiplyScalar(-40).toArray(), [0, 0, 0]);
			}
		}
	});
	return (
		<instancedMesh ref={ref as any} castShadow receiveShadow args={[sphereGeometry, baubleMaterial, count]}>
			<Outlines thickness={0} />
		</instancedMesh>
	);
}

function Pointer() {
	const viewport = useThree((state) => state.viewport);
	const [, api] = useSphere(() => ({ type: 'Kinematic', args: [3], position: [0, 0, 0] }));
	return useFrame((state) => api.position.set((state.pointer.x * viewport.width) / 2, (state.pointer.y * viewport.height) / 2, 0));
}
