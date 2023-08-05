"use client";
import { useAxios } from "Hooks";
import Search from "featuers/pages/Search";
import { useEffect, useState } from "react";
import { ExpertCard, Skeleton } from "components";

const Browse = () => {
  const [experts, setExperts] = useState([]);
  const [users, setUsers] = useState([]);

  const {
    fetchData: getUsers,
    error,
    loading,
  } = useAxios({
    config: {
      url: "https://worrisome-pocketbook-calf.cyclic.app/api/v1/users/profile?limit=5&sort=-createdAt",
      method: "GET",
    },
    options: {
      manual: true,
    },
    onSuccess: (data) => {
      setUsers(data.data.users);
    },
  });

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
    getUsers();
    getExperts();
  }, [getUsers, getExperts]);

  console.log(experts, "experts");
  return (
    <div className="w-[80%] flex-col mt-2 px-4 py-2">
      <div className="text-2xl font-semibold leading-6 text-gray-900 my-6">
        Browse
      </div>

      <Search users={users} loading={loading} />

      {experts &&
        experts.map((expert, index) => {
          return <ExpertCard key={index} expertData={expert} />;
        })}
      {ExpertLoading && <Skeleton className="w-full" />}
    </div>
  );
};
export default Browse;
