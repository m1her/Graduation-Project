import React, { useEffect } from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { MultiInputTimeRangeField } from "@mui/x-date-pickers-pro/MultiInputTimeRangeField";
// import { SingleInputTimeRangeField } from "@mui/x-date-pickers-pro/SingleInputTimeRangeField";
//   requiredExpertData = { requiredExpertData };
//   setRequiredExpertData = { setRequiredExpertData };
export function TimePickerValue({ requiredExpertData, setRequiredExpertData }) {
  const [time, setTime] = React.useState();
  useEffect(() => {
    let ampm = "";
    if (time?.$H > 12) {
      ampm = "pm";
    } else {
      ampm = "am";
    }

    setRequiredExpertData({
      ...requiredExpertData,
      from: time && time[0] && `${time[0]?.$H}:${time[0]?.$m}${ampm}`,
      to: time && time[1] && `${time[1]?.$H}:${time[1]?.$m}${ampm}`,
    });
  }, [time]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["MultiInputTimeRangeField"]}>
        <MultiInputTimeRangeField
          value={time}
          ampm={false}
          slotProps={{
            textField: ({ position }) => ({
              label: position === "start" ? "From" : "To",
            }),
          }}
          onChange={(newTimeRange) => setTime(newTimeRange)}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}

export default TimePickerValue;
