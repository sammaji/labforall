import * as THREE from "three";
import { lerp } from "three/src/math/MathUtils";
import Experience from "../Experience";

class KuiperBelt {
  constructor() {
    this.components = new Experience();

    this.scene = this.components.scene;
    this.time = this.components.time;
    this.resources = this.components.resources;

    this.setGeometry();

    this.setMaterials();

    this.setMesh();
  }

  setGeometry() {
    this.geometry = new THREE.BufferGeometry();

    const positions = new Float32Array(10000 * 3);

    for (let i = 0; i < 20000; i++) {
      const vertices = i * 3;

      let theta = 2 * Math.PI * Math.random();
      let omega =
        lerp(600000, 1000000, Math.random()) - Math.random() * 100 * 1000;

      positions[vertices + 0] = Math.sin(theta) * omega;
      positions[vertices + 1] = (Math.random() - 0.5) * 5000;
      positions[vertices + 2] = Math.cos(theta) * omega;
    }

    const attributes = new THREE.BufferAttribute(positions, 3);
    this.geometry.setAttribute("position", attributes);
  }

  setMaterials() {
    this.material = new THREE.PointsMaterial({
      size: 12,
      sizeAttenuation: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      color: "#eeeeee",
    });
  }

  setMesh() {
    this.mesh = new THREE.Points(this.geometry, this.material);
    this.scene.add(this.mesh);
  }

  update() {
    this.mesh.rotation.y = -1 * (this.time.elapsed / 500000);
  }
}

export default KuiperBelt;
