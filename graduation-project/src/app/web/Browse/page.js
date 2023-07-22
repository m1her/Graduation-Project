'use client';
import { useAxios } from "Hooks";
import Search from "featuers/pages/Search";
import { useEffect, useState } from "react";


const Browse = () => {
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

      useEffect(() => {
        getUsers();
      }, [getUsers]);

  return (
    <div className="w-[80%] flex-col mt-2 px-4 py-2">
         <div className="text-2xl font-semibold leading-6 text-gray-900 my-6">
        Browse
      </div>

      <Search users={users} loading={loading} />
    </div>
  );
};
export default Browse;
