import {
  BoxGeometry,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from "three";
import Camera from "./camera";
import Renderer from "./renderer";
import Sizes from "./utils/sizes";
import Time from "./utils/time";

class _Experience {
  constructor() {
    this.sizes = new Sizes();
    this.time = new Time();
    this.scene = new Scene();
  }

  init(canvas) {
    this.canvas = canvas;
    this.camera = new Camera();
    this.renderer = new Renderer();
    this.sizes.on("resize", () => {
      this.resize();
    });
    this.time.on("update", () => {
      this.update();
    });
  }

  resize() {
    this.camera.resize();
    // this.world.resize();
    this.renderer.resize();
  }

  update() {
    // this.preloader.update();
    this.camera.update();
    // this.world.update();
    this.renderer.update();
    if (this.controls) {
      this.controls.update();
    }
  }
}

export const Experience = new _Experience();
