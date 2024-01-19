"use client";

import { useEffect, useState } from "react";
import { PublishShotModal } from "../Profile/PublishShotModal";

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
    </>
  );
};
