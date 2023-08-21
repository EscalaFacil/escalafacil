import React, { ReactNode } from "react";

interface ModalType {
  children?: ReactNode;
  isOpen: boolean;
  toggle: () => void;
}

export default function Modal(props: ModalType) {
  return (
    <>
      {props.isOpen && (
        // <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
        //   <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
        //     {props.children}
        //   </div>
        // </div>
        <div
          id="defaultModal"
          tabIndex={-1}
          aria-hidden="true"
          className="flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full"
          onClick={props.toggle}
        >
          <div
            className="relative p-4 w-full max-w-2xl h-full md:h-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal content */}
            <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
              {props.children}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
