import { useCallback, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";
import { useBorderRadius } from "../../hooks/useBorderRadius";

import { Container, Content } from "./styles";

export function Box3D() {
  const { fullCornerValue } = useBorderRadius();
  const refContent = useRef<HTMLDivElement | null>(null);

  const [scene] = useState(new THREE.Scene());
  const [renderer, setRenderer] = useState(
    new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    })
  );
  const [_camera, setCamera] = useState({} as THREE.OrthographicCamera);
  const [_controls, setControls] = useState({} as OrbitControls);
  const [target] = useState(new THREE.Vector3(-0.5, 1.2, 0));
  const [initialCameraPosition] = useState(
    new THREE.Vector3(
      20 * Math.sin(0.2 * Math.PI),
      10,
      20 * Math.cos(0.2 * Math.PI)
    )
  );

  function easeOutCirc(x: number) {
    return Math.sqrt(1 - Math.pow(x - 1, 4));
  }

  useEffect(() => {
    const { current: content } = refContent;

    if (content) {
      const screenW = content.clientWidth;
      const screenH = content.clientHeight;

      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(screenW, screenH);
      renderer.outputEncoding = THREE.sRGBEncoding;
      content.appendChild(renderer.domElement);
      setRenderer(renderer);

      const scale = screenH * 0.005 + 4.8;
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
      setCamera(camera);

      // const ambientLight = new THREE.AmbientLight(0xcccccc, 1);
      // scene.add(ambientLight);

      const controls = new OrbitControls(camera, renderer.domElement);
      controls.autoRotate = true;
      controls.target = target;
      setControls(controls);

      let req: any = null;
      let frame = 0;

      const animate = () => {
        req = requestAnimationFrame(animate);
        frame = frame <= 100 ? frame + 1 : frame;
        if (frame <= 100) {
          const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20;

          camera.position.y = 10;
          camera.position.x =
            initialCameraPosition.x * Math.cos(rotSpeed) +
            initialCameraPosition.z * Math.sin(rotSpeed);
          camera.position.z =
            initialCameraPosition.z * Math.cos(rotSpeed) -
            initialCameraPosition.x * Math.sin(rotSpeed);
          camera.lookAt(target);
        } else {
          controls.update();
        }
        renderer.render(scene, camera);
      };

      animate();

      return () => {
        console.log("unmount");
        cancelAnimationFrame(req);
        renderer.dispose();
      };
    }
  }, []);

  useEffect(() => {
    scene.clear();
    const geometry = new RoundedBoxGeometry(8, 8, 8, 6, fullCornerValue / 20);
    const material = new THREE.MeshBasicMaterial({ color: 0x7bccc1 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
  }, [fullCornerValue]);

  const handleWindowResize = useCallback(() => {
    const { current: container } = refContent;
    if (container && renderer) {
      const scW = container.clientWidth;
      const scH = container.clientHeight;

      renderer.setSize(scW, scH);
    }
  }, [renderer]);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize, false);
    return () => {
      window.removeEventListener("resize", handleWindowResize, false);
    };
  }, [renderer, handleWindowResize]);

  return (
    <Container>
      <Content ref={refContent} />
    </Container>
  );
}
