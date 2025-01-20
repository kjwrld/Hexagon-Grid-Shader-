import { Canvas } from "@react-three/fiber";
import {
    EffectComposer,
    ToneMapping,
    Bloom,
    Vignette,
} from "@react-three/postprocessing";
import HexagonBox from "./components/HexagonBox";
import { OrbitControls } from "@react-three/drei";

export default function App() {
    return (
        <Canvas>
            <color attach="background" args={["#202020"]} />
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} />
            <OrbitControls />
            <HexagonBox />
            <EffectComposer>
                {/* Apply ACES tone mapping */}
                <ToneMapping />
                {/* Add bloom for a glowing effect */}
                <Bloom
                    intensity={0.5}
                    luminanceThreshold={0.3}
                    luminanceSmoothing={0.1}
                />
                {/* Vignette for cinematic look */}
                <Vignette eskil={false} offset={0.1} darkness={0.8} />
            </EffectComposer>
        </Canvas>
    );
}
