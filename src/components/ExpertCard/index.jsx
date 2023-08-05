import React, { useEffect, useState } from "react";
import { CalendarIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
// import Rating from "components/Rating";
import Rating from "@mui/material/Rating";
import Image from "next/image";
import Link from "next/link";
const fetchPersonImages = async (count) => {
  try {
    const response = await fetch(`https://randomuser.me/api/?results=${count}`);
    const data = await response.json();

    const personImages = data.results.map((user) => user.picture.large);
    return personImages;
  } catch (error) {
    console.error("Error fetching person images:", error);
    return [];
  }
};

export const ExpertCard = ({ expertData }) => {
  const { imgSrc, user, rating, bio, hourlyRate, countryFlag, catagories } =
    expertData;
  // const [expertImg, setExpertImg] = useState([]);
  const [value, setValue] = useState(2);

  // const generatePersonImages = async () => {
  //   const personImages = await fetchPersonImages(100); // Generate 10 fake person images
  //   setExpertImg(personImages);
  // };
  // useEffect(() => {
  //   generatePersonImages();
  // }, []);

  return (
    <div className="flex w-full justify-between items-center border shadow-sm py-4 my-4 m-2 p-4">
      <div className="flex items-center">
        <div className="flex-col">
          <Image
            alt="pfp"
            src={"https://randomuser.me/api/portraits/men/75.jpg"}
            height="100"
            width="100"
            className="w-28 h-28 object-cover object-center rounded-full"
          ></Image>
          <div className="mt-2 ml-2">
            {/* <Rating rating={3.5} /> */}
            <Rating
              name="simple-controlled"
              value={rating || value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
          </div>
        </div>
        <div className="ml-4 ">
          <div className="text-4xl font-semibold flex-col items-center">
           <Link href={`/web/Profile/${user._id}`}>{user.name}</Link> 
            {/* <div>Ahmed Thabet</div> */}

            <div className="text-xl font-semibold">${hourlyRate} USD/hr</div>
          </div>
          <div id="badges" className="flex items-center justify-start">
            {catagories.map((catagory) => {
              return (
                <div className="text-gray-500 w-fit p-1 text-xs mt-3 mx-1 border rounded-lg bg-gray-light">
                  {catagory}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="text-lg font-light   ">{user.bio}</div>

      <div className="flex flex-col items-end justify-between ">
        <div className="flex">
          <div className="w-9 h-9  p-1 mr-2">
            <EnvelopeIcon className="text-indigo-700 hover:text-indigo-800 hover:scale-150" />
          </div>
          <div className="w-9 h-9  p-1">
            <CalendarIcon className="text-indigo-600 hover:text-indigo-800 hover:scale-150" />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertCard;
