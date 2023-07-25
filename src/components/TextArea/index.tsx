import { ReactNode } from "react";
import { forwardRef, useState } from "react";

type CommonFormElementsType = {
  label?: ReactNode;
  helperText?: ReactNode;
  error?: boolean;
  withoutHelperText?: boolean;
};
type TextAreaProps = CommonFormElementsType & {
  placeholder?: string;
  id: string | number;
  rows?: number;
  labelClassName?: string;
  className?: string;
};
export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      label,
      placeholder,
      id,
      rows = 4,
      labelClassName,
      className,
      error = false,
      withoutHelperText = false,
      helperText,
      ...rest
    },
    ref
  ) => {
    const classNames = {
      label: `block mb-1  text-gray-dark${labelClassName ?? ""}`,
      textArea: `block p-2.5 w-full text-sm text-gray-dark border focus:ring-0 focus:border-blue-400 focus:outline-none rounded-md ${className}`,
      helperText: "inline-flex min-h-[20px] text-xs mt-1",
      error: "!border-red focus:!border-red",
    };
    const [isFocused, setIsFocused] = useState(false);
    const handleFocus = () => {
      setIsFocused(true);
    };
    const handleBlur = () => {
      setIsFocused(false);
    };
    return (
      <div className="relative my-3">
        <label htmlFor={`area-${id}`} className={classNames.label}>
          {label}
        </label>
        <textarea
          id={`area-${id}`}
          rows={rows}
          className={`${classNames.textArea} ${error ? classNames.error : ""}`}
          placeholder={placeholder}
          ref={ref}
          {...rest}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        {/* {label && isFocused && !error ? (
          <label htmlFor={`area-${id}`} className={classNames.label}>
            {label}
          </label>
        ) : null} */}

        {!withoutHelperText && (
          <p className={classNames.helperText}>{helperText}</p>
        )}
      </div>
    );
  }
);

TextArea.displayName = "TextArea";
export default TextArea;
