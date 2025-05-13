// src/utils/loadModel.js
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export function loadGLTFModel(url) {
    return new Promise((resolve, reject) => {
        const loader = new GLTFLoader();
        loader.load(
            url,
            gltf => resolve(gltf),
            undefined,
            err => reject(err)
        );
    });
}
