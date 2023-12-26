import Camera from "./camera/camera";

import * as THREE from 'three'

console.log("Hello from index.js!");

camera = new Camera()
console.log(camera)

export default class App{

    constructor() {
        this.scene = new THREE.Scene();
        this.camera = new Camera()
        console.log(this.camera)
    }
}

