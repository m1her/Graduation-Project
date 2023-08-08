"use client";
import { useToggle } from "Hooks";
import { Button, CustomizedAccordions, Input, SnackBar } from "components";
import { MagnifyingGlassIcon } from "lib/@heroicons";
import { useState } from "react";
const Support = () => {
  const [question, setQuestion] = useState("");
  const {
    isOpen: isOpenSnack,
    close: closeSnack,
    open: openSnack,
  } = useToggle();

  const {
    isOpen: isWarningSnack,
    close: closeWarningSnack,
    open: openWarningSnack,
  } = useToggle();

  const handleSendClick = () => {
    setQuestion("");
    question.split(" ").length >= 4 ? openSnack() : openWarningSnack();
  };
  return (
    <div className="w-[80%] h-[900px]  ">
      {/* <div className=" top-0 left-0 w-full bg-gray-50 py-28">
        <div className="text-5xl font-thin text-gray-600 ml-16">
          Leap Start Support
        </div>
      </div> */}
      <SnackBar
        withButton={false}
        open={openWarningSnack}
        close={closeWarningSnack}
        isOpen={isWarningSnack}
        type="warning"
        sucessMessage="Your Question Must Be more than 4 words ,  Try Again!"
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        TransitionComponent="top"
      />
      <SnackBar
        withButton={false}
        open={openSnack}
        close={closeSnack}
        isOpen={isOpenSnack}
        type="success"
        sucessMessage="Your Question has been sent  Successfully"
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        TransitionComponent="top"
      />
      <div className="flex-col items-center justify-center">
        <div className="text-4xl font-thin m-6  text-gray-600 text-center ">
          How Can We Help You ?
        </div>

        <div className="flex justify-center items-center gap-4">

          <Input
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Ask for Help To Get Out The Most  of Our Website "
            inputSize="large"
            inputClassName="!w-[600px] relative"
            className="flex items-end justify-center w-[600px]"

            startIcon={
              <MagnifyingGlassIcon className="w-10 h1-0 absolute top-2 right-2 z-10" />
            }

          />
          <Button
            className="!bg-indigo-500 w-[200px] !text-2xl"
            fullWidth={false}
            onClick={handleSendClick}
          >
            Send
          </Button>
        </div>
      </div>
      <div className="w-full pr-4">
        <CustomizedAccordions />
      </div>
    </div>
  );
};
export default Support;
