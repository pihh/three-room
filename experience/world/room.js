import * as THREE from "three";
import { Experience } from "../experience.js";
import GSAP from "gsap";
import { RectAreaLightHelper } from "three/examples/jsm/helpers/RectAreaLightHelper.js";

export default class Room {
  constructor() {
    this.experience = Experience;
    this.scene = this.experience.scene;
    this.time = this.experience.time;
    this.resources = this.experience.resources;
    this.room = this.resources.items.room;
    this.actualRoom = this.room.scene;
    // this.roomChildren = {};

    // this.lerp = {
    //     current: 0,
    //     target: 0,
    //     ease: 0.1,
    // };

    // const geometry = new THREE.BoxGeometry( 1, 1, 1 )
    // const material = new THREE.MeshBasicMaterial({color:0xffffff})
    // const mesh = new THREE.Mesh(geometry,material)
    // this.scene.add(mesh)

    this.setModel();
    // this.setAnimation();
    // this.onMouseMove();
  }

  setModel() {
    this.scene.add(this.actualRoom);
  }
  update(){

  }
}
