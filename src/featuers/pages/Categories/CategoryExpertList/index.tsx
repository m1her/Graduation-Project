"use client";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { Card, Spinner } from "components";
import Rating from "components/Rating";
import { useAxios } from "Hooks";
import Image from "next/image";
import { useEffect, useState } from "react";

const CategoryExpertList = ({ type }) => {
  const [experts, setExperts] = useState([]);
  const {
    fetchData: getExperts,
    error: Experterror,
    loading: ExpertLoading,
  } = useAxios({
    config: {
      url: "https://worrisome-pocketbook-calf.cyclic.app/api/v1/experts",
      method: "GET",
    },
    options: {
      manual: true,
    },
    onSuccess: (data) => {
      setExperts(data.data.experts);
    },
  });

  useEffect(() => {
    getExperts();
  }, [getExperts]);

  return (
    <Card className="!p-0 w-[49%]">
      <div className="p-4 border-b text-lg font-semibold">
        {"Top " + type + " Experts"}
      </div>
      <div>
        {ExpertLoading ? (
          <div className="w-full flex justify-center mt-1">
            <Spinner />
          </div>
        ) : experts.filter((expert) => expert.catagories.includes("math"))
            .length > 0 ? (
          experts
            .filter((expert) => expert.catagories.includes("math"))
            .map((expert) => (
              <div
                className="flex items-center justify-between p-2 border-b"
                key={expert._id}
              >
                <div className="flex items-center">
                  <div className="bg-gray-300 w-14 h-14 rounded-full mr-2">
                    <Image
                      alt=" "
                      width={250}
                      height={250}
                      src={
                        expert.profileImage
                          ? `https://drive.google.com/uc?id=${expert.profileImage}`
                          : "https://cdn.vectorstock.com/i/preview-1x/32/12/default-avatar-profile-icon-vector-39013212.jpg"
                      }
                    />
                  </div>
                  <div>
                    <div className="font-medium">{expert.user.name}</div>
                    <Rating rating={4} />
                  </div>
                </div>
                <div className="p-2 shadow hover:shadow-gray-400 rounded cursor-pointer text-indigo-500 hover:text-indigo-700">
                  <EnvelopeIcon className="h-5 w-5" />
                </div>
              </div>
            ))
        ) : (
          <div className="text-center text-gray-500">No experts</div>
        )}
      </div>
    </Card>
  );
};
export default CategoryExpertList;
