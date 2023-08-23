import React, { use, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Datepicker from "react-tailwindcss-datepicker";
import { CheckboxList, MultipleSelectChip, FileInput } from "components";
import { UploadExpert } from "../../featuers/layout/UploadExpert";
import { getFieldHelperText } from "utils";
const steps = [
  "Expert Roles",
  "Select Your Expert Fields",
  "Upload Required Documents",
  "Upload Required Data",
  "Select Your working Dates",
];
//to do
// set the state to make the request here
// prepare file uplod functionality
// simple validation on expert data
// add the functionality of next only if he set the data requiered
//
export function HorizontalLinearStepper({
  activeStep,
  setActiveStep,
  expertData,
  setExpertData,
}) {
  const [skipped, setSkipped] = useState(new Set<number>());
  const [sheckedAll, setSheckedAll] = useState(false);
  const [file, setFile] = useState();
  const [value, setValue] = React.useState<{
    startDate: Date;
    endDate: number;
  }>({
    startDate: new Date(),
    endDate: new Date().setMonth(11),
  });
  const handleFileChange = (e) => {
    if (e?.target?.files) {
      setFile(e.target.files[0]);
    } else {
      setSheckedAll(false);
    }

    if (e?.target?.files[0]?.size > 20000000) {
      setSheckedAll(false);
    }
  };

  useEffect(() => {
    setExpertData({
      ...expertData,
      files: [file],
      fromData: value.startDate,
      toDate: value.endDate,
    });
  }, [expertData, file, setExpertData, value.endDate, value.startDate]);

  // const isStepOptional = (step: number) => {
  //   return step === 1;
  // };

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // const handleSkip = () => {
  //   if (!isStepOptional(activeStep)) {
  //     // You probably want to guard against something like this,
  //     // it should never occur unless someone's actively trying to break something.
  //     throw new Error("You can't skip a step that isn't optional.");
  //   }

  //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
  //   setSkipped((prevSkipped) => {
  //     const newSkipped = new Set(prevSkipped.values());
  //     newSkipped.add(activeStep);
  //     return newSkipped;
  //   });
  // };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleDateChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ width: "100%", height: "auto", padding: "0", overflow: "hidden" }}
    >
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: {
            optional?: React.ReactNode;
          } = {};
          // if (isStepOptional(index)) {
          //   labelProps.optional = (
          //     <Typography variant="caption">Optional</Typography>
          //   );
          // }
          // if (isStepSkipped(index)) {
          //   stepProps.completed = false;
          // }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            {/* {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )} */}

            <Button onClick={handleNext} disabled={!sheckedAll}>
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </Box>
        </React.Fragment>
      )}
      <div className="min-h-[30vh] overflow-hidden">
        {activeStep === 0 && (
          <CheckboxList sheckedAll={sheckedAll} setSheckedAll={setSheckedAll} />
        )}
        {/*   expertData, 
           1- give expert state and its setter to each component of the stepper (Done)
           1-1 see how you use formdata for file upload 
           2-make sure that the state updated coorectlly -- log it (Done)
           3- use swr hooks  
           4-access the user object and get the tocken 
           5-make the request and make sure that all data is sent 
           6-show the loading status 
           7-if it uploded show sucess popup (make it reusable) 
           8-make sure that all expert is uploded 
  setExpertData, */}
        {activeStep == 1 && (
          <MultipleSelectChip
            expertData={expertData}
            setExpertData={setExpertData}
          />
        )}
        {activeStep == 2 && (
          <>
            <h3 className=" text-xl font-semibold my-4">
              Upload Your CV to Complete{" "}
            </h3>
            <FileInput
              className="w-full h-[65%] absolute top-0 z-10"
              id="fileInput"
              onChange={handleFileChange}
              label="Upload Your CV"
              error={file && file?.size > 2000000}
              helperText={
                file &&
                file?.size > 2000000 &&
                getFieldHelperText("error", "The file is too big")
              }
            />
          </>
        )}
        {activeStep == 3 && (
          <>
            <h3 className=" text-xl font-semibold my-4">
              Upload These Requierd Data to Complete{" "}
            </h3>
            <UploadExpert
              expertData={expertData}
              setExpertData={setExpertData}
            />
          </>
        )}
        {activeStep == 4 && (
          <>
            <h3 className=" text-xl font-semibold my-4">
              Select Your Starting Period
            </h3>
            <Datepicker
              value={value}
              useRange={false}
              onChange={handleDateChange}
              popoverDirection="down"
              containerClassName="focus:outline-none"
              inputClassName="p-4 w-full"
            />
          </>
        )}
      </div>
    </Box>
  );
}

export default HorizontalLinearStepper;
