import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader.js";

import { EventEmitter } from "events";

class Resources extends EventEmitter {
  constructor(assets) {
    super();

    this.assets = assets;

    this.items = {};
    this.queue = this.assets.length;
    this.loaded = 0;

    this.loadingEl = document.querySelector(".loading");
    this.barEl = document.querySelector(".loading__bar");

    this.setLoaders();

    this.startLoading();

    this.setReady();
  }

  setReady() {
    this.on("ready", () => {
      window.setTimeout(() => {
        this.barEl.classList.add("ended");
        this.barEl.style.transform = "";
        window.setTimeout(() => {
          this.loadingEl.classList.add("ended");
          window.setTimeout(() => {
            this.loadingEl.style.zIndex = -1;
          }, 1500);
        }, 1000);
      }, 500);
    });
  }

  setLoaders() {
    this.loaders = {};
    this.loaders.gltfLoader = new GLTFLoader();
    this.loaders.fbxloader = new FBXLoader();
    this.loaders.textureLoader = new THREE.TextureLoader();
    this.loaders.cubeTextureLoader = new THREE.CubeTextureLoader();
  }

  startLoading() {
    for (const source of this.assets) {
      if (source.type === "gltfModel") {
        this.loaders.gltfLoader.load(source.path, (file) => {
          this.sourceLoaded(source, file);
        });
      } else if (source.type === "texture") {
        this.loaders.textureLoader.load(source.path, (file) => {
          this.sourceLoaded(source, file);
        });
      } else if (source.type === "fbx") {
        this.loaders.fbxloader.load(source.path, (file) => {
          this.sourceLoaded(source, file);
        });
      } else if (source.type === "cubeTexture") {
        this.loaders.cubeTextureLoader.load(source.path, (file) => {
          this.sourceLoaded(source, file);
        });
      }
    }
  }

  sourceLoaded(asset, file) {
    this.items[asset.name] = file;

    this.loaded++;

    const progress = this.loaded / this.queue;
    this.barEl.style.transform = `scaleX(${progress})`;

    if (this.loaded === this.queue) {
      this.emit("ready");
    }
  }
}

export default Resources;
