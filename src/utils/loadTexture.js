import { TextureLoader } from 'three';

export function loadTexture(url) {
    return new Promise((resolve, reject) => {
        const loader = new TextureLoader();
        loader.load(url, texture => resolve(texture), undefined, err => reject(err));
    });
}