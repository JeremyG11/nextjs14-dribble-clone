import React from "react";
import Modal from "../Reusable/Modal";
import { useModal } from "@/hooks/modal";
import InputField from "../Reusable/InputField";
import { Button } from "../Reusable/Button";
import ShotCard from "../Home/ShotCard";

export function PublishShotModal() {
  const { isOpen, type } = useModal();
  const isPublishShotModal = isOpen && type === "publishShotModal";

  return (
    <Modal isOpen={isPublishShotModal} title="Final touches">
      <div className="flex items-center pb-10 w-full h-full">
        <div className="">
          <ShotCard />
        </div>
        <div className="flex flex-col space-y-5 w-3/5 mx-auto justify-center">
          <InputField label="Tags(Maximimum 20)" placeholder="Add Tags" />

          <div className="flex justify-between items-center">
            <Button className="py-2 px-5 text-sm font-medium border border-zinc-100">
              Close
            </Button>
            <div className="inline-flex">
              <Button className="py-2 px-5 text-sm font-medium mx-4 bg-zinc-100">
                Save as draft
              </Button>
              <Button className="px-3 py-1 md:py-3 md:px-6 text-white text-sm font-medium bg-primary">
                Publish now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
