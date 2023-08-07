import React from "react";
// import { Button } from "components";
//my-4   !bg-blue-ligh+ Add Session
import Datepicker from "react-tailwindcss-datepicker";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useAxios, useToggle } from "Hooks";
import { TimePickerValue, SnackBar, Loading } from "components";

const isSessionAvaliable = (
  startTime,
  endTime,
  startExpertTime,
  endExpertTime
) => {
  const start = parseInt(startTime?.split(":")[0]);
  const end = parseInt(endTime?.split(":")[0]);
  const expertStart = parseInt(startExpertTime?.split(":")[0]);
  const expertEnd = parseInt(endExpertTime?.split(":")[0]);

  if (start >= expertStart && end <= expertEnd) {
    return true;
  } else {
    return false;
  }
};

export const AddSession = ({ expertAvailableHours, addLoading }) => {
  const { open: openModal, close: closeModal, isOpen } = useToggle();
  const [sessionDay, setSessionDay] = useState({
    startDate: new Date(),
    endDate: new Date().setMonth(11),
  });
  const [sessionTime, setSessionTime] = useState("");

  const {
    isOpen: isOpenSnack,
    close: closeSnack,
    open: openSnack,
  } = useToggle();

  const {
    isOpen: isErrorSnack,
    close: closeErrorSnack,
    open: openErrorSnack,
  } = useToggle();

  const {
    fetchData: addSession,
    error,
    loading,
  } = useAxios({
    config: {
      url: "https://worrisome-pocketbook-calf.cyclic.app/api/v1/session/user/",
      method: "POST",
    },
    options: {
      manual: true,
      withAuthHeader: true,
    },
    onSuccess: (data) => {
      console.log(data);
      openSnack();
      closeModal();
      //Open Success snak bar
    },
    onError: (data) => {
      console.log(data);
      openErrorSnack();
      //   closeModal();
      //  openErrorSnack();
    },
  });

  const handleDayChange = (newDay) => {
    setSessionDay(newDay);
  };

  const handleBookingSession = () => {
    //we need the expert ID
    // we need the start Time
    // we need to revaildate the page or reflect that session on the calender
    closeErrorSnack();
    closeSnack();

    addSession({
      expertId: "647c306609318861cc49b059",
      sessionStart: `${sessionDay.startDate} ${sessionTime.from.replace(
        "am",
        "0"
      )}:00Z`,
    });
  };

  console.log(error);
  return (
    <>
      <SnackBar
        withButton={false}
        open={openErrorSnack}
        close={closeErrorSnack}
        isOpen={isErrorSnack}
        type="error"
        sucessMessage={`Your Session was not Added because \n${error?.message} , Try another time`}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        TransitionComponent="top"
      />
      <SnackBar
        withButton={false}
        open={openSnack}
        close={closeSnack}
        isOpen={isOpenSnack}
        type="success"
        sucessMessage="Your Session is Added Successfully "
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        TransitionComponent="top"
      />
      <div className="inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md !bg-indigo-600 my-4  bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          {addLoading ? "Loading..." : "Add Session"}
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10 overflow-scroll"
          onClose={closeModal}
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
                <Dialog.Panel className="w-full max-w-md transform overflow-auto rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Book A Session
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      You Have to select from the available Hours Only and there
                      is No sessios registered at this time to book the session
                      successfully
                    </p>
                    <p className="my-2 text-sm">Note: Follow 24/h pattern</p>
                  </div>
                  <div>
                    <TimePickerValue
                      requiredExpertData={sessionTime}
                      setRequiredExpertData={setSessionTime}
                    />
                  </div>
                  <div className="my-4 z-20">
                    <Datepicker
                      value={sessionDay}
                      useRange={false}
                      asSingle={true}
                      displayFormat={"YYYY-MM-DD"}
                      onChange={handleDayChange}
                      popoverDirection="up"
                      containerClassName="focus:outline-none z-10"
                      inputClassName="p-4 w-full z-10"
                    />
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className={`inline-flex justify-center  ${
                        isSessionAvaliable(
                          sessionTime?.from,
                          sessionTime?.to,
                          expertAvailableHours?.fromTime,
                          expertAvailableHours?.toTime
                        )
                          ? "!bg-indigo-600"
                          : "!bg-gray-300"
                      } rounded-md border border-transparent  px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2`}
                      onClick={() => {
                        handleBookingSession();
                        closeModal;
                      }}
                      disabled={
                        !isSessionAvaliable(
                          sessionTime?.from,
                          sessionTime?.to,
                          expertAvailableHours?.fromTime,
                          expertAvailableHours?.toTime
                        )
                      }
                    >
                      {loading ? "Loading..." : "Book"}
                    </button>
                    {!isSessionAvaliable(
                      sessionTime?.from,
                      sessionTime?.to,
                      expertAvailableHours?.fromTime,
                      expertAvailableHours?.toTime
                    ) && (
                      <p className=" text-sm text-red-500">
                        The Session should be on the range of Expert Avaliable
                        hours
                      </p>
                    )}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default AddSession;
