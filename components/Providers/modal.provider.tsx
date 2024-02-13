"use client";

import { useEffect, useState } from "react";
import { PublishShotModal } from "../Profile/PublishShotModal";
import { DisplayShotModal } from "../shared/DisplayShotModal";

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
      <PublishShotModal />
      <DisplayShotModal />
    </>
  );
};
