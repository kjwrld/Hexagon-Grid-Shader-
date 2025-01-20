export const hexagonVertexShader = `
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

export const hexagonFragmentShader = `
varying vec2 vUv;

uniform float uTime;

float hex(vec2 p) {
    const float sqrt3 = 1.73205080757; // √3 for hexagonal proportions
    p.x *= sqrt3; // Adjust x-coordinates for hexagonal alignment
    p.y += mod(floor(p.x), 2.0) * 0.5; // Offset alternating rows
    p = abs(mod(p, 1.0) - 0.5); // Map to [0, 0.5] for symmetry
    return abs(max(p.x * 1.5 + p.y, p.y * 2.0) - 1.0); // Hexagonal edge
}

void main() {
    vec2 uv = vUv * 10.0; // Scale UVs for grid density
    float h = hex(uv); // Get hexagonal grid
    float hexPattern = step(0.1, h); // Adjust line thickness
    gl_FragColor = vec4(vec3(hexPattern), 1.0); // White hexagons on black background
}
`;
