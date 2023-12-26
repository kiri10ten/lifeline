import * as THREE from "three"
import  App  from "../index"

export default class Camera{

    constructor() {

        this.setInstance()

    }
        
        setInstance(){
            this.instance = new THREE.PerspectiveCamera(
                35,
                window.innerWidth / window.innerHeight,
                0.1,
                100);
        
            this.instance.position.z = 5;

            // this.app =new App( )

            console.log(this.app)

        }
      
    }
