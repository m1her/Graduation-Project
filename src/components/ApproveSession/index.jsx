import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { EnvelopeIcon, CheckCircleIcon } from "@heroicons/react/24/outline";
import { XMarkIcon, CheckIcon } from "@heroicons/react/24/solid";
import TextArea from "components/TextArea";
import { useAxios, useToggle } from "Hooks";
import { SnackBar } from "components";
export function ApproveSession({ action, id }) {
  let [isOpen, setIsOpen] = useState(false);
  const [rejectionReson, setRejectionReson] = useState("");

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  const {
    isOpen: isOpenSnack,
    close: closeSnack,
    open: openSnack,
  } = useToggle();

  const {
    fetchData: sessionAction,
    error,
    loading,
  } = useAxios({
    config: {
      url: `https://worrisome-pocketbook-calf.cyclic.app/api/v1/session/expert/${id}`,
      method: "PUT",
    },
    options: {
      manual: true,
      withAuthHeader: true,
    },
    onSuccess: (data) => {
      console.log(data);
      openSnack();
      closeModal();
      setMutate((prev) => prev + 1);
      // close();
    },
    onError: (data) => {
      // setErrorMeesage(data.message);
      // close();
      // openErrorSnack();
    },
  });

  const handleApprove = () => {
    sessionAction({
      status: "approved",
    });
    closeModal();
    setMutate((prev) => prev + 1);
  };
  const handleReject = () => {
    sessionAction({
      status: "rejected",
      reason: rejectionReson,
    });
    closeModal();
  };

  console.log(rejectionReson, "setRejectionReson");

  return (
    <>
      <SnackBar
        withButton={false}
        open={openSnack}
        close={closeSnack}
        isOpen={isOpenSnack}
        type="success"
        sucessMessage="Your Action has been sent  Successfully"
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        TransitionComponent="top"
      />
      <div className=" inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          {action == "approve" ? (
            <CheckCircleIcon className="w-6 h-6 text-green-500" />
          ) : (
            <XMarkIcon className="w-5 h-5 text-red-500 border-2 rounded-full  border-red-500 " />
          )}
        </button>
      </div>

      <Transition appear show={isOpen}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            // as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  {action == "aprove" ? (
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      Approve Session
                    </Dialog.Title>
                  ) : (
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      Reject Session
                    </Dialog.Title>
                  )}
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      {`  Are you Sure you want to ${action} This Session`}
                    </p>
                  </div>
                  {action == "reject" && (
                    <>
                      <p className="my-2">Reson for your Rejection</p>
                      <TextArea
                        onChange={(e) => setRejectionReson(e.target.value)}
                      />
                    </>
                  )}

                  <div className="mt-4">
                    {action == "approve" ? (
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent !bg-green-500 px-4 py-2 text-sm font-medium !text-white  focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={() => {
                          handleApprove();
                          closeModal;
                        }}
                      >
                        {loading ? "Loadding" : "Approve"}
                      </button>
                    ) : (
                      //   <XMarkIcon className="w-5 h-5 text-red-500 border-2 rounded-full  border-red-500 " />
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent !bg-red-500 px-4 py-2 text-sm font-medium !text-white  focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={() => {
                          handleReject();
                          closeModal;
                        }}
                      >
                        {loading ? "Loadding" : "Reject"}
                      </button>
                    )}
                    {}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default ApproveSession;
