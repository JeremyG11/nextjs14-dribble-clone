import React from "react";
import { FaX } from "react-icons/fa6";

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
}
export default function Modal({ children, isOpen }: ModalProps) {
  return isOpen ? (
    <div className="bg-black/55 overflow-y-auto overflow-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-full max-h-full">
      <div className=" relative p-4 w-full max-w-md max-h-full">
        <div className="relative bg-white rounded-2xl shadow-2xl">
          {/* <button
            type="button"
            className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
            data-modal-hide="popup-modal"
          >
            <FaX />
          </button> */}
          <div className="p-4">{children}</div>
        </div>
      </div>
    </div>
  ) : null;
}
