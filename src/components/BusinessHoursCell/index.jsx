// BusinessHoursCell.js
import React from "react";

export const BusinessHoursCell = ({ date }) => {
  const handleButtonClick = () => {
    // Add your logic here when the button is clicked
    console.log(
      `Button clicked for business hour on: ${date.toLocaleString()}`
    );
  };

  return (
    <div>
      {date ? <p>{date?.toLocaleString()}</p> : <p>no data</p>}
      <button onClick={handleButtonClick}>not Button</button>
    </div>
  );
};

export default BusinessHoursCell;
