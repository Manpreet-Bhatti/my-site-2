import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { loadComputerModel } from "../lib/computer-loader";
import { ModelContainer, ModelSpinner } from "./model-loader";

function easeOutCircle(x) {
  return Math.sqrt(1 - Math.pow(x - 1, 4));
}

const useWindowResize = (container, renderer) => {
  const handleWindowResize = useCallback(() => {
    if (container && renderer) {
      renderer.setSize(container.clientWidth, container.clientHeight);
    }
  }, [container, renderer]);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize, false);
    return () => {
      window.removeEventListener("resize", handleWindowResize, false);
    };
  }, [handleWindowResize]);
};

const ComputerModel = () => {
  const refContainer = useRef();
  const [loading, setLoading] = useState(true);
  const refRenderer = useRef();

  const target = useMemo(() => new THREE.Vector3(0, 0.25, 0), []);
  const initialCameraPosition = useMemo(
    () =>
      new THREE.Vector3(
        20 * Math.sin(0.2 * Math.PI),
        10,
        20 * Math.cos(0.2 * Math.PI)
      ),
    []
  );
  const ambientLight = useMemo(() => new THREE.AmbientLight(0xcccccc, 1), []);

  useEffect(() => {
    const { current: container } = refContainer;
    if (container) {
      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(container.clientWidth, container.clientHeight);
      container.appendChild(renderer.domElement);
      refRenderer.current = renderer;
      const scene = new THREE.Scene();
      const zoom = container.clientHeight * 0.005 + 0.5;
      const camera = new THREE.OrthographicCamera(
        -zoom,
        zoom,
        zoom,
        -zoom,
        0.01,
        50000
      );
      camera.position.copy(initialCameraPosition);
      camera.lookAt(target);
      scene.add(ambientLight);
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.autoRotate = true;
      controls.target = target;
      loadComputerModel(scene, "/computer.glb").then(() => {
        animate();
        setLoading(false);
      });

      let req = null;
      let frame = 0;
      const animate = () => {
        req = requestAnimationFrame(animate);
        frame = frame <= 100 ? frame + 1 : frame;

        if (frame <= 100) {
          const p = initialCameraPosition;
          const rotSpeed = -easeOutCircle(frame / 120) * Math.PI * 10;
          camera.position.y = 5;
          camera.position.x =
            p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed);
          camera.position.z =
            p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed);
          camera.lookAt(target);
        } else {
          controls.update();
        }
        renderer.render(scene, camera);
      };
      return () => {
        cancelAnimationFrame(req);
        renderer.domElement.remove();
        renderer.dispose();
      };
    }
  }, [target, initialCameraPosition, ambientLight]);

  const { current: container } = refContainer;
  const { current: renderer } = refRenderer;
  useWindowResize(container, renderer);

  return (
    <ModelContainer ref={refContainer}>
      {loading && <ModelSpinner />}
    </ModelContainer>
  );
};

export default ComputerModel;
