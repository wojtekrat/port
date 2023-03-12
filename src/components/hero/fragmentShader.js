const fragmentShader = `
uniform float u_intensity;
uniform float u_time;
varying vec2 vUv;
varying float vDisplacement;
void main() {
    float distort = 2.0 * vDisplacement * u_intensity * sin(vUv.y * 10.0 + u_time);
    vec3 color = mix(
        mix(vec3(23.0, 23.0, 23.0) / 255.0, vec3(20.0, 83.0, 45.0) / 255.0, abs(vUv.y - 0.2) * 5.0),
        mix(vec3(22.0, 101.0, 52.0) / 255.0, vec3(22.0, 163.0, 74.0) / 255.0, abs(vUv.y - 0.5) * 5.0),
        abs(vUv.y - 0.8) * 5.0
    );
    gl_FragColor = vec4(color, 1.0);
}
`;
export default fragmentShader;