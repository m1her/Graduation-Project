"use client";
import { useAxios } from "Hooks";
import Search from "featuers/pages/Search";
import { useEffect, useState } from "react";
import { ExpertCard, Skeleton } from "components";

const Browse = () => {
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
    <div className="w-[80%] flex-col mt-2 px-4 py-2">
      <div className="text-2xl font-semibold leading-6 text-gray-900 my-6">
        Browse
      </div>
      <Search experts={experts} loading={ExpertLoading} />
    </div>
  );
};
export default Browse;
