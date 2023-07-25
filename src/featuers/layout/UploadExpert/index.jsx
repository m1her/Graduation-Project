"use client";
import React, { useState, useEffect } from "react";
import { Input, TextArea, SelectDay, TimePickerValue } from "components";

export const UploadExpert = ({ expertData, setExpertData }) => {
  const [requiredExpertData, setRequiredExpertData] = useState({
    hourlyRate: "",
    bio: "",
    from: "",
    to: "",
    daysOfWork: [],
  });

  const handleRequiredDataChange = (e) => {
    setRequiredExpertData({
      ...requiredExpertData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    setExpertData({
      ...expertData,
      ...requiredExpertData,
    });
  }, [requiredExpertData]);

  return (
    <div className="my-8">
      <div className="flex-col items-start gap-10">
        <div className="flex  justify-between my-6 w-full">
          <Input
            name="hourlyRate"
            size="small"
            label="Hourly Rate"
            type="number"
            placeholder="$"
            withoutHelperText={true}
            pattern="[0-9]*"
            className="w-[47%] focus:outline-heddin"
            onChange={(e) => handleRequiredDataChange(e)}
          />
          <SelectDay
            requiredExpertData={requiredExpertData}
            setRequiredExpertData={setRequiredExpertData}
          />
        </div>

        <TimePickerValue
          requiredExpertData={requiredExpertData}
          setRequiredExpertData={setRequiredExpertData}
        />
      </div>
      <TextArea
        name="bio"
        label="Bio"
        placeholder="Introduce yourself "
        withoutHelperText={true}
        onChange={(e) => handleRequiredDataChange(e)}
      />
    </div>
  );
};

export default UploadExpert;
