import * as THREE from "three";

import Experience from "../Experience";

class Stars {
  constructor() {
    this.components = new Experience();

    this.scene = this.components.scene;
    this.resources = this.components.resources;

    this.setGeometry();

    this.setMaterials();

    this.setMesh();
  }

  setGeometry() {
    this.geometry = new THREE.BufferGeometry();

    const positions = new Float32Array(5000 * 3);

    for (let i = 0; i < 5000; i++) {
      const vertices = i * 3;

      let theta = THREE.MathUtils.randFloatSpread(360);
      let omega = THREE.MathUtils.randFloatSpread(360);

      positions[vertices + 0] =
        (Math.random() + 1) * Math.sin(theta) * Math.cos(omega) * 100000000;
      positions[vertices + 1] =
        (Math.random() + 1) * Math.sin(theta) * Math.sin(omega) * 100000000;
      positions[vertices + 2] =
        (Math.random() + 1) * Math.cos(theta) * 100000000;
    }

    const attributes = new THREE.BufferAttribute(positions, 3);
    this.geometry.setAttribute("position", attributes);
  }

  setMaterials() {
    this.material = new THREE.PointsMaterial({
      size: 1.2,
      sizeAttenuation: false,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      color: "#eeeeee",
    });
  }

  setMesh() {
    this.mesh = new THREE.Points(this.geometry, this.material);
    this.scene.add(this.mesh);
  }
}

export default Stars;
