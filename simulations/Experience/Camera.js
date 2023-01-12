import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

import Experience from "./Experience.js";

class Camera {
  constructor() {
    this.components = new Experience();

    this.sizes = this.components.sizes;
    this.scene = this.components.scene;
    this.canvas = this.components.canvas;

    this.origin = null;

    this.setCamera();

    this.controller = this.camera.clone();

    this.setControls();
  }

  setCamera() {
    this.camera = new THREE.PerspectiveCamera(
      this.sizes.fov,
      this.sizes.width / this.sizes.height,
      this.sizes.near,
      this.sizes.far
    );
    this.camera.position.set(-90, 25, -200);
    // window.addEventListener("keydown", () => {
    //   console.log(this.camera.position);
    // });
  }

  setControls() {
    this.controls = new OrbitControls(this.controller, this.canvas);
    this.controls.minDistance = 1000;
    this.controls.maxDistance = 2500000;
    this.controls.enableDamping = true;
    this.controls.enablePan = false;
  }

  resize() {
    this.camera.aspect = this.sizes.width / this.sizes.height;
    this.camera.updateProjectionMatrix();

    this.controller.aspect = this.sizes.width / this.sizes.height;
    this.controller.updateProjectionMatrix();
  }

  changeCenter(obj3d, camDist) {
    this.origin = obj3d;
    obj3d.add(this.camera);
    this.controls.minDistance = camDist;
  }

  update() {
    this.camera.copy(this.controller);

    this.controls.update();
  }
}

export default Camera;
