import {
  BoxGeometry,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from "three";
import Assets from "./utils/assets";
import Camera from "./camera";
import Renderer from "./renderer";
import Sizes from "./utils/sizes";
import Time from "./utils/time";
import Resources from "./utils/resources";
import World from "./world/world";
import Theme from './theme'
import Preloader from "./preloader";
import Controls from "./world/controls.js";
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
    this.resources = new Resources(Assets);
    this.theme = new Theme()
    this.world = new World();

    this.sizes.on("resize", () => {
      this.resize();
    });
    this.time.on("update", () => {
      this.update();
    });

    this.preloader = new Preloader();

    this.preloader.on("enablecontrols", () => {
        this.controls = new Controls();
    });
  }

  resize() {
    this.camera.resize();
    this.world.resize();
    this.renderer.resize();
  }

  update() {
    this.preloader.update();
    this.camera.update();
    this.world.update();
    this.renderer.update();
    if (this.controls) {
      this.controls.update();
    }
  }
}

export const Experience = new _Experience();
