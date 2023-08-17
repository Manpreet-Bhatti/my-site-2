import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { loadComputerModel } from "../lib/computer-loader";
import { ModelContainer, ModelSpinner } from "./model-loader";

function easeOutCircle(x) {
  return Math.sqrt(1 - Math.pow(x - 1, 4));
}

function debounce(fn, delay) {
  let timerId;
  return (...args) => {
    if (timerId) clearTimeout(timerId);
    timerId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

const ComputerModel = () => {
  const refContainer = useRef();
  const [loading, setLoading] = useState(true);
  const refRenderer = useRef();
  const urlComputerGLB = "/resource/computer.gltf";

  const handleWindowResize = useCallback(() => {
    const { current: renderer } = refRenderer;
    const { current: container } = refContainer;
    if (container && renderer) {
      const scW = container.clientWidth;
      const scH = container.clientHeight;

      renderer.setSize(scW, scH);
    }
  }, []);

  const debouncedHandleResize = useMemo(
    () => debounce(handleWindowResize, 150),
    [handleWindowResize]
  );

  useEffect(() => {
    const { current: container } = refContainer;
    if (container) {
      const scW = container.clientWidth;
      const scH = container.clientHeight;

      const renderer = new THREE.WebGLRenderer({
        antialias: false,
        alpha: true,
      });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(scW, scH);
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.0;
      container.appendChild(renderer.domElement);
      refRenderer.current = renderer;
      const scene = new THREE.Scene();

      const isMobile = window.innerWidth < 768;

      const target = new THREE.Vector3(0, isMobile ? 0.85 : 0.45, 0);
      const initialCameraPosition = new THREE.Vector3(
        20 * Math.sin(0.2 * Math.PI),
        10,
        20 * Math.cos(0.2 * Math.PI)
      );

      const scale = isMobile ? scH * 0.007 + 0.5 : scH * 0.005 + 0.8;
      const camera = new THREE.OrthographicCamera(
        -scale,
        scale,
        scale,
        -scale,
        0.01,
        50000
      );
      camera.position.copy(initialCameraPosition);
      camera.lookAt(target);

      const ambientLight = new THREE.AmbientLight(0xcccccc, 1);
      scene.add(ambientLight);

      const controls = new OrbitControls(camera, renderer.domElement);
      controls.autoRotate = true;
      controls.target = target;

      const loadingManager = new THREE.LoadingManager();
      loadingManager.onLoad = () => {
        setLoading(false);
      };

      loadComputerModel(
        scene,
        urlComputerGLB,
        {
          receiveShadow: false,
          castShadow: false,
        },
        loadingManager
      )
        .then(() => {
          setLoading(false);
          animate();
        })
        .catch((error) => {
          console.error("An error occurred while loading the model:", error);
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
  });

  useEffect(() => {
    window.addEventListener("resize", debouncedHandleResize, false);
    return () => {
      window.removeEventListener("resize", debouncedHandleResize, false);
    };
  }, [debouncedHandleResize]);

  return (
    <ModelContainer ref={refContainer}>
      {loading && <ModelSpinner />}
    </ModelContainer>
  );
};

export default ComputerModel;
