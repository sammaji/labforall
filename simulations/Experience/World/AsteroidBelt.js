import * as THREE from "three";
import { lerp } from "three/src/math/MathUtils";

import Experience from "../Experience";

class AsteroidBelt {
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

    const positions = new Float32Array(2000 * 3);

    for (let i = 0; i < 2000; i++) {
      const vertice = i * 3;

      let theta = Math.random() * 2 * Math.PI;
      let omega = lerp(30000, 50000, Math.random()) - Math.random() * 2 * 1000;

      positions[vertice + 0] = Math.sin(theta) * omega;
      positions[vertice + 1] = (Math.random() - 0.5) * 250;
      positions[vertice + 2] = Math.cos(theta) * omega;
    }

    const attribute = new THREE.BufferAttribute(positions, 3);

    this.geometry.setAttribute("position", attribute);
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
    this.mesh.rotation.y = -1 * (this.time.elapsed / 300000);
  }
}

export default AsteroidBelt;
