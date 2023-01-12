import * as THREE from "three";

import Experience from "../Experience";

class Planet {
  constructor(
    name,
    mass,
    radius,
    density,
    gravity,
    dayLength,
    perihelion,
    aphelion,
    semiMajorAxis,
    semiMinorAxis,
    distSun,
    orbitalPeriod,
    orbitalVelocity,
    orbitalEccentricity,
    orbitalInclination,
    planetaryTilt,
    planetaryRotationSpeed,
    camDist,
    texture,
    desc
  ) {
    this.components = new Experience();

    this.scene = this.components.scene;
    this.time = this.components.time;
    this.resources = this.components.resources;

    this.name = name;
    this.mass = mass;
    this.radius = radius;
    this.diameter = this.radius * 2;
    this.density = density;
    this.gravity = gravity;
    this.lengthOfDay = dayLength;
    this.perihelion = perihelion;
    this.aphelion = aphelion;
    this.semiMajorAxis = semiMajorAxis;
    this.semiMinorAxis = semiMinorAxis;
    this.distanceFromOrbitCenterToSun = distSun;
    this.orbitalPeriod = orbitalPeriod;
    this.orbitalVelocity = orbitalVelocity;
    this.orbitalEccentricity = orbitalEccentricity;
    this.orbitalInclination = orbitalInclination;
    this.planetaryTilt = planetaryTilt;
    this.planetaryRotationSpeed = planetaryRotationSpeed;
    this.camDist = camDist;
    this.texture = texture;
    this.desc = desc;
    this.startingAngle = Math.random() * 360;

    this.setGeometry();

    this.setTextures();

    this.setMaterials();

    this.setMesh();

    if (this.name == "earth") {
      this.setClouds();
    }

    this.setVisible();

    this.setPlanetaryTilt();

    this.createOrbitPath();

    this.setListeners();
  }

  setGeometry() {
    this.geometry = new THREE.SphereGeometry(this.radius, 64);
  }

  setTextures() {
    this.textures = {};

    this.textures.color = this.texture;
    this.textures.color.encoding = THREE.sRGBEncoding;

    if (this.name == "earth") {
      this.textures.clouds = this.resources.items.earthCloudsTexture;
      this.textures.clouds.encoding = THREE.sRGBEncoding;
    }
  }

  setMaterials() {
    this.material = new THREE.MeshPhongMaterial({
      map: this.textures.color,
    });

    if (this.name == "earth") {
      this.material.specularMap = this.resources.items.earthSpecularMapTexture;
      this.material.specular = new THREE.Color("grey");
      this.material.shininess = 7.8;
      this.material.normalMap = this.resources.items.earthNormalMapTexture;
    }
  }

  setMesh() {
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.scale.set(25, 25, 25);
    this.scene.add(this.mesh);
  }

  setClouds() {
    const cloudsGeometry = new THREE.SphereGeometry(this.radius + 0.02, 64);
    const cloudsMaterial = new THREE.MeshPhongMaterial({
      map: this.textures.clouds,
      transparent: true,
    });
    this.clouds = new THREE.Mesh(cloudsGeometry, cloudsMaterial);
    this.mesh.add(this.clouds);
  }

  setVisible() {
    const visibleGeometry = new THREE.SphereGeometry(0.00001, 64);
    const visibleMaterial = new THREE.MeshStandardMaterial({});
    this.visible = new THREE.Mesh(visibleGeometry, visibleMaterial);
    this.scene.add(this.visible);
  }

  setPlanetaryTilt() {
    this.mesh.rotateOnAxis(
      new THREE.Vector3(1, 0, 0),
      -(Math.PI / 180) * this.planetaryTilt
    );
  }

  createOrbitPath() {
    const curve = new THREE.EllipseCurve(
      0,
      0,
      this.semiMajorAxis,
      this.semiMinorAxis,
      0,
      Math.PI * 2,
      false,
      0
    );

    const points = curve.getPoints(50000);

    points.forEach((p) => {
      p.z = p.y;
      p.y = 0;
    });

    const geometry = new THREE.BufferGeometry().setFromPoints(points);

    const material = new THREE.LineBasicMaterial({
      color: 0x101010,
    });

    this.orbit = new THREE.Line(geometry, material);

    this.orbit.position.x =
      this.distanceFromOrbitCenterToSun *
      Math.cos(this.orbitalInclination * (Math.PI / 180));

    this.orbit.position.y = -(
      this.distanceFromOrbitCenterToSun *
      Math.sin(this.orbitalInclination * (Math.PI / 180))
    );

    this.orbit.rotation.z = -this.orbitalInclination * (Math.PI / 180);

    this.scene.add(this.orbit);
  }

  setListeners() {
    document
      .querySelector("#" + this.name + "Locate")
      .addEventListener("click", (e) => {
        this.components.camera.changeCenter(this.visible, this.camDist);

        if (this.components.world.lastHighlitedOrbit) {
          this.components.world.lastHighlitedOrbit.material.color =
            new THREE.Color("#101010");
        }

        this.orbit.material.color = new THREE.Color("#00254d");

        this.components.world.lastHighlitedOrbit = this.orbit;

        let info = document.querySelector("#info");

        info.querySelector("#name").innerHTML =
          this.name[0].toUpperCase() + this.name.slice(1).toLowerCase();
        info.querySelector("#mass").innerHTML =
          this.mass + " x 10<sup>24</sup> kg";
        info.querySelector("#diameter").innerHTML =
          this.diameter * 10000 + " km";
        info.querySelector("#gravity").innerHTML =
          this.gravity + " m/s<sup>2</sup>";
        info.querySelector("#lengthOfYear").innerHTML =
          this.orbitalPeriod + " days";
        info.querySelector("#lengthOfDay").innerHTML =
          this.lengthOfDay + " hours";
        info.querySelector("#desc").innerHTML = this.desc;

        info.style.visibility = "visible";
      });
  }

  update() {
    const currentAngle =
      this.startingAngle + this.time.elapsed * (this.orbitalVelocity / 100);

    this.mesh.position.x =
      Math.cos(currentAngle * (Math.PI / 180)) *
        (this.semiMajorAxis *
          Math.cos(this.orbitalInclination * (Math.PI / 180))) +
      this.distanceFromOrbitCenterToSun *
        Math.cos(this.orbitalInclination * (Math.PI / 180));
    this.mesh.position.z =
      Math.sin(currentAngle * (Math.PI / 180)) * this.semiMinorAxis;
    this.mesh.position.y =
      -(
        Math.sin((currentAngle + 90) * (Math.PI / 180)) *
        (this.semiMajorAxis *
          Math.sin(this.orbitalInclination * (Math.PI / 180)))
      ) -
      this.distanceFromOrbitCenterToSun *
        Math.sin(this.orbitalInclination * (Math.PI / 180));

    this.mesh.rotateY(this.planetaryRotationSpeed / 60 / this.radius / 5000);

    this.visible.position.x =
      Math.cos(currentAngle * (Math.PI / 180)) *
        (this.semiMajorAxis *
          Math.cos(this.orbitalInclination * (Math.PI / 180))) +
      this.distanceFromOrbitCenterToSun *
        Math.cos(this.orbitalInclination * (Math.PI / 180));
    this.visible.position.z =
      Math.sin(currentAngle * (Math.PI / 180)) * this.semiMinorAxis;
    this.visible.position.y =
      -(
        Math.sin((currentAngle + 90) * (Math.PI / 180)) *
        (this.semiMajorAxis *
          Math.sin(this.orbitalInclination * (Math.PI / 180)))
      ) -
      this.distanceFromOrbitCenterToSun *
        Math.sin(this.orbitalInclination * (Math.PI / 180));

    if (this.clouds) {
      this.clouds.rotateY(0.005 / this.lengthOfDay);
    }
  }
}

export default Planet;