"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";

const RoomPreview3D = dynamic(() => import("./RoomPreview3D"), {
  ssr: false,
  loading: () => null,
});

export default function RoomPreview3DLoader() {
  const [isReady, setIsReady] = useState(false);

  return (
    <div className="relative h-full w-full overflow-hidden bg-[#EFE7D8]">
      <Image
        src="/images/service-3d-poster.png"
        alt="Warm ranch living room concept preview"
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className={`object-cover transition-opacity duration-[400ms] ${
          isReady ? "opacity-0" : "opacity-100"
        }`}
        priority={false}
      />
      <div
        className={`absolute inset-0 transition-opacity duration-[400ms] ${
          isReady ? "opacity-100" : "opacity-0"
        }`}
      >
        <RoomPreview3D onCreated={() => setIsReady(true)} />
      </div>
    </div>
  );
}
