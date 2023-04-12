import { useMemo } from "react";
// import ReactPhoneInput from "react-phone-input-2"; 
import ReactPhoneInput from "lib/PhoneInput-2";
import "react-phone-input-2/lib/high-res.css";
import usePhoneInputMutation from "./usePhoneInputMutation";
import type { PhoneInputType } from "../types";

export const PhoneInput: PhoneInputType = ({
  label,
  id,
  helperText,
  className,
  inputClassName,
  inputSize = "medium",
  error = false,
  withoutHelperText = false,
  country = "ps",
  preferredCountries = [],
  enableSearch = true,
  inputProps,
  ...rest
}) => {
  usePhoneInputMutation();
  const classNames = useMemo(() => {
    const classes = {
      inputContainer: `mb-1 relative text-gray-dark ${className ?? ""}`,
      label: "block mb-2 text-sm font-bold text-gray-900 -mt-1",
      input: `!block !w-full !h-9 !px-4 !pl-16 !bg-gray-50 !border !border-gray-300 focus:!ring-0 focus:!border-gray-700 !rounded-md ${
        inputClassName || ""
      }`,
      button:
        "!bg-transparent !border-none [&>div]:border-r [&>div]:border-gray [&>div:hover]:!bg-transparent [&_.selected-flag.open]:!bg-transparent [&_.arrow]:!border-none",
      helperText: "inline-flex min-h-[20px] text-xs mt-1",
    };

    if (inputSize === "large") {
      classes.input += " py-4 !text-lg";
      classes.inputContainer += " text-lg";
    } else if (inputSize === "small") {
      classes.input += " py-2 !text-sm";
      classes.inputContainer += " text-sm";
    } else {
      classes.input += " py-3 !text-base";
      classes.inputContainer += " text-base";
    }

    if (error) {
      classes.input += " !border-red focus:!border-red";
    }

    return classes;
  }, [className, inputClassName, inputSize, error]);

  return (
    <div className={classNames.inputContainer}>
      {label && (
        <label htmlFor={id} className={classNames.label}>
          {label}
        </label>
      )}
      <ReactPhoneInput
        inputProps={{
          id: id,
          ...inputProps,
        }}
        specialLabel=""
        inputClass={classNames.input}
        buttonClass={classNames.button}
        country={country}
        preferredCountries={["ps", "il", ...preferredCountries]}
        masks={{ ps: "... ... ...", il: "... ... ..." }}
        enableSearch={enableSearch}
        {...rest}
      />
      {!withoutHelperText && (
        <p className={classNames.helperText}>{helperText}</p>
      )}
    </div>
  );
};

export default PhoneInput;
