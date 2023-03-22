import React from 'react';

const Card = (props) => {
  return (
    <div className="bg-white w-[430px] m-auto mt-[70px] mb-[70px] rounded shadow-lg px-14 py-8">{props.children}</div>
  );
};

export default Card;
