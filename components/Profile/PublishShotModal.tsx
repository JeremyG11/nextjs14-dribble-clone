import React from "react";
import Modal from "../Reusable/Modal";
import { useModal } from "@/hooks/modal";

export function PublishShotModal() {
  const { isOpen, type } = useModal();
  const isPublishShotModal = isOpen && type === "publishShotModal";

  return <Modal isOpen={isPublishShotModal}>PublishShotModal</Modal>;
}
