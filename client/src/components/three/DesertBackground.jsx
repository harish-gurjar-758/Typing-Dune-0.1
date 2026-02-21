import { Canvas, useThree } from "@react-three/fiber";
import { useEffect, memo } from "react";
import * as THREE from "three";

/* ===============================
   Context Safety Component
================================= */
function ContextFix() {
    const { gl } = useThree();

    useEffect(() => {
        const handleContextLost = (event) => {
            event.preventDefault();
            console.warn("WebGL Context Lost");
        };

        gl.domElement.addEventListener(
            "webglcontextlost",
            handleContextLost,
            false
        );

        return () => {
            gl.domElement.removeEventListener(
                "webglcontextlost",
                handleContextLost
            );
        };
    }, [gl]);

    return null;
}

/* ===============================
   Desert Mesh (Memoized)
================================= */
const DesertPlane = memo(function DesertPlane() {
    return (
        <mesh
            rotation={[-Math.PI / 2, 0, 0]}
            receiveShadow
        >
            <planeGeometry args={[100, 100, 64, 64]} />
            <meshStandardMaterial
                color="#E3B778"
                roughness={1}
                metalness={0}
            />
        </mesh>
    );
});

/* ===============================
   Main Background Component
================================= */
function DesertBackground() {
    return (
        <div className="absolute inset-0 -z-10">
            <Canvas
                dpr={[1, 1.5]} // Limit DPR for stability
                camera={{ position: [0, 10, 20], fov: 50 }}
                gl={{
                    antialias: true,
                    alpha: false,
                    powerPreference: "high-performance",
                }}
                onCreated={({ scene }) => {
                    scene.fog = new THREE.Fog("#0f172a", 20, 80);
                }}
            >
                <ContextFix />

                {/* Lighting */}
                <ambientLight intensity={0.6} />
                <directionalLight
                    position={[10, 20, 10]}
                    intensity={1}
                    castShadow
                />

                {/* Desert Ground */}
                <DesertPlane />
            </Canvas>
        </div>
    );
}

export default memo(DesertBackground);