"use client";
import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import {
  HorizontalLinearStepper,
  CheckboxList,
  NoSsr,
  SnackBar,
} from "components";
import { useAxios, useToggle } from "Hooks";
// import { useSWRHook } from "Hooks/useSWRHooks";
import { useSWRMutationHook } from "Hooks/useSWRHooks";
import { getAuthorizationHeader } from "utils";

export function ExpertDilog() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [expertData, setExpertData] = React.useState({
    catagories: [],
    files: [],
    hourlyRate: 0,
    bio: "",
    daysOfWork: [],
    from: "",
    to: "",
  });

  const { isOpen, close, open } = useToggle();
  const {
    isOpen: isOpenSnack,
    close: closeSnack,
    open: openSnack,
  } = useToggle();
  const formData = new FormData();

  const {
    fetchData: uploadExpert,
    error,
    loading,
  } = useAxios({
    config: {
      url: "https://worrisome-pocketbook-calf.cyclic.app/api/v1/experts",
      method: "POST",
    },
    options: {
      manual: true,
      withAuthHeader: true,
    },
    onSuccess: (data) => {
      console.log(data);
      close();
      openSnack();
    },
  });

  const submitStepper = () => {
    formData.append("catagories", expertData.catagories);
    formData.append("files", expertData.files);
    formData.append("hourlyRate", expertData.hourlyRate);
    formData.append("expertBio", expertData.bio);
    formData.append("daysOfWork", expertData.daysOfWork);
    formData.append("fromTime", expertData.from);
    formData.append("toTime", expertData.to);
    uploadExpert(formData);
  };

  return (
    <NoSsr>
      <Button variant="outlined" onClick={open}>
        Become Expert
      </Button>

      <SnackBar
        withButton={false}
        open={openSnack}
        close={closeSnack}
        isOpen={isOpenSnack}
        type="success"
        sucessMessage="Your Expert Request has sent Successfully"
        className="absolute"
      />

      <Dialog
        open={isOpen}
        onClose={close}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="md"
        className="h-[800px]"
      >
        <DialogTitle
          id="alert-dialog-title"
          sx={{ width: 450, color: "rgb(99 102 241)" }}
          // styles={{ h1: { color: "red" } }}
        >
          {"To Become Expert you need to \n "}
          <p>Complete these steps</p>
        </DialogTitle>
        <DialogContent>
          <HorizontalLinearStepper
            activeStep={activeStep}
            setActiveStep={setActiveStep}
            expertData={expertData}
            setExpertData={setExpertData}
          />
        </DialogContent>

        {Object.values(expertData).filter(
          (value) => value !== undefined || null
        ).length == 9 && (
          <DialogActions>
            {activeStep == 4 && (
              <Button
                fullWidth={true}
                className="!bg-blue-light !text-white !mx-16"
                onClick={submitStepper}
                autoFocus
              >
                {!loading ? "Apply" : "Loadding..."}
              </Button>
            )}
          </DialogActions>
        )}
      </Dialog>
    </NoSsr>
  );
}

export default ExpertDilog;
