import * as THREE from "three";
import Experience from "../Experience";

class Environment {
  constructor() {
    this.components = new Experience();
    this.scene = this.components.scene;
    this.resources = this.components.resources;

    this.setAmbientLight();
    this.setSunLight();
    this.setEnvironmentMap();
  }

  setAmbientLight() {
    this.ambientLight = new THREE.AmbientLight("#eeeeee", 0.2);
    this.scene.add(this.ambientLight);
  }

  setSunLight() {
    this.sunLight = new THREE.PointLight("#eeeeee", 1, 0, 0);
    this.sunLight.position.set(0, 0, 0);
    this.scene.add(this.sunLight);
  }

  setEnvironmentMap() {
    this.environmentMap = {};
    this.environmentMap.intensity = 0.4;
    this.environmentMap.texture = this.resources.items.environmentMapTexture;
    this.environmentMap.texture.encoding = THREE.sRGBEncoding;

    this.scene.environment = this.environmentMap.texture;

    this.environmentMap.updateMaterials = () => {
      this.scene.traverse((child) => {
        if (
          child instanceof THREE.Mesh &&
          child.material instanceof THREE.MeshStandardMaterial
        ) {
          child.material.envMap = this.environmentMap.texture;
          child.material.envMapIntensity = this.environmentMap.intensity;
          child.material.needsUpdate = true;
        }
      });
    };
    this.environmentMap.updateMaterials();
  }
}

export default Environment;
