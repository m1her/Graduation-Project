import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import IconButton from "components/IconButton";
import { XMarkIcon } from "@heroicons/react/20/solid";

export function Modal({
  closeModal,
  isOpen,
  children,
  className = "",
  centerTitle = true,
  title = "",
  headerClasses = "",
  closeIconClasses = "",
}) {
  console.log(isOpen, closeModal);
  return (
    <Transition appear show={isOpen && isOpen ? true : false} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        onClose={closeModal && closeModal}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center">
            <Transition.Child
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
              className={"my-24 mx-4"}
            >
              <Dialog.Panel
                className={`sm:w-[450px] 2xl:w-[500px] transform overflow-hidden rounded-lg bg-white p-7 pb-10 text-left align-middle shadow-xl transition-all ${className}`}
              >
                <div
                  className={`relative flex items-center justify-${
                    centerTitle ? "center" : "start"
                  } mb-8 ${headerClasses}`}
                >
                  <span className={`text-lg`}>{title}</span>
                  <IconButton
                    className={`absolute right-0 ${closeIconClasses}`}
                    onClick={closeModal}
                  >
                    <XMarkIcon />
                  </IconButton>
                </div>
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export default Modal;
