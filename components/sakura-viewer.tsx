"use client";

import dynamic from "next/dynamic";

const SakuraCanvas = dynamic(
  () => import("@/components/sakura-viewer-canvas"),
  { ssr: false }
);

export default function SakuraViewer() {
  return <SakuraCanvas />;
}
