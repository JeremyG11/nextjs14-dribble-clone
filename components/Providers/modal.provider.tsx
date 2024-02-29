"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const DynamicPublishShotModal = dynamic(() =>
  import("@/components/Profile/PublishShotModal").then(
    (mod) => mod.PublishShotModal
  )
);
const DynamicDisplayShotModal = dynamic(() =>
  import("@/components/shared/DisplayShotModal").then(
    (mod) => mod.DisplayShotModal
  )
);

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <DynamicPublishShotModal />
      <DynamicDisplayShotModal />
    </>
  );
};
