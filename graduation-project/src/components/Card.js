import React from 'react';

const Card = (props) => {
  console.log(props.width);
  return (
    <div className={`!w-[430px] bg-white m-auto mt-[70px] mb-[70px] rounded shadow-lg px-14 py-8`}>{props.children}</div>
  );
};

export default Card;
