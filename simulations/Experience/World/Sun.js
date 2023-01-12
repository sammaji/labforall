import * as THREE from "three";

import Experience from "../Experience";

class Sun {
  constructor() {
    this.components = new Experience();

    this.scene = this.components.scene;
    this.resources = this.components.resources;
    this.minCameraDistance = 500;

    this.setGeometry();

    this.setTextures();

    this.setMaterials();

    this.setMesh();

    this.setListeners();
  }

  setGeometry() {
    this.geometry = new THREE.SphereGeometry(69.634, 6400);
  }

  setTextures() {
    this.textures = {};

    this.textures.color = this.resources.items.sunTexture;
    this.textures.color.encoding = THREE.sRGBEncoding;
  }

  setMaterials() {
    this.material = new THREE.MeshBasicMaterial({
      map: this.textures.color,
    });
  }

  setMesh() {
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.scale.set(50, 50, 50);
    this.scene.add(this.mesh);
  }

  setListeners() {
    document.querySelector("#sunLocate").addEventListener("click", (e) => {
      this.components.camera.changeCenter(this.mesh, this.minCameraDistance);

      if (this.components.world.lastHighlitedOrbit) {
        this.components.world.lastHighlitedOrbit.material.color =
          new THREE.Color("#101010");
      }

      let info = document.querySelector("#info");
      info.style.visibility = "hidden";
    });
  }
}

export default Sun;
