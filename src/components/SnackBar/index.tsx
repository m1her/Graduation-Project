import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export function SnackBar({
  withButton = false,
  ButtonData = "open SnackBar",
  type = "success",
  sucessMessage,
  errorMessage,
  warningMessage,
  infoMessage,
  open,
  close,
  isOpen,
}) {
  // const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    open();
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    close();
  };

  // switch (type) {
  //   case "success":
  //     return <Alert severity="success">{sucessMessage}</Alert>;
  //   case "error":
  //     return <Alert severity="error">{errorMessage}</Alert>;
  //   case "info":
  //     return <Alert severity="info">{infoMessage}</Alert>;
  //   case "warning":
  //     return <Alert severity="warning">{warningMessage}</Alert>;
  //   default :
  //     return null;
  // }

  return (
    <>
      {withButton && (
        <Button variant="outlined" onClick={handleClick}>
          {ButtonData}
        </Button>
      )}
      {isOpen && (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          {
            <Alert onClose={handleClose} severity={type} sx={{ width: "100%" }}>
              {sucessMessage || errorMessage || warningMessage || infoMessage}
            </Alert>
          }
        </Snackbar>
      )}
      {/* <Alert severity="error">This is an error message!</Alert>
      <Alert severity="warning">This is a warning message!</Alert>
      <Alert severity="info">This is an information message!</Alert>
      <Alert severity="success">This is a success message!</Alert> */}
    </>
  );
}

export default SnackBar;
