import React from 'react';

const Card = (props) => {
  return (
    <div className="w-[430px] m-auto mt-[70px] mb-[70px] rounded shadow-lg p-10">{props.children}</div>
  );
};

export default Card;
