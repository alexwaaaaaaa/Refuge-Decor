import React from "react";
import Skeleton from "./Skeleton";

export default function SkeletonCard() {
  return (
    <div className="bg-[#EFE7D8] rounded-2xl overflow-hidden border border-[#D8CBB8]/25">
      <Skeleton variant="rectangular" className="w-full aspect-[4/3]" />
      <div className="p-6 space-y-3">
        <Skeleton variant="text" width="60%" />
        <Skeleton variant="text" width="80%" />
        <Skeleton variant="text" width="40%" />
      </div>
    </div>
  );
}
