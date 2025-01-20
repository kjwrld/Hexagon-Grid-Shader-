import { useRef } from "react";
import { extend, useFrame } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";
import {
    hexagonVertexShader,
    hexagonFragmentShader,
} from "../shaders/hexagonShader";

const HexagonMaterial = shaderMaterial(
    {
        uTime: 0,
    },
    hexagonVertexShader,
    hexagonFragmentShader
);

extend({ HexagonMaterial });

export default function HexagonBox() {
    const materialRef = useRef();

    useFrame((state) => {
        if (materialRef.current) {
            materialRef.current.uTime = state.clock.elapsedTime; // Update time for animation
        }
    });

    return (
        <mesh>
            <boxGeometry args={[2, 2, 2]} />
            <hexagonMaterial ref={materialRef} />
        </mesh>
    );
}
