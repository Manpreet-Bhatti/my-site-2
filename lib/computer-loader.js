import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export function loadComputerModel(scene, glbPath) {
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader();
    loader.load(
      glbPath,
      (gltf) => {
        const obj = gltf.scene;
        obj.name = "computer";
        obj.position.y = 0;
        obj.position.x = 0;
        scene.add(obj);
        resolve(obj);
      },
      undefined,
      function (error) {
        reject(error);
      }
    );
  });
}
