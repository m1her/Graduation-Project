"use client";
import { Card, Select } from "components";
import SearchTitleAndFilter from "./SearchedUsersCard";
import SearchedUsersCard from "./SearchedUsersCard";
import { useEffect, useRef, useState } from "react";

const Search = ({ users, loading }) => {
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [userType, setUserType] = useState("expert");
  const [category, setCategory] = useState("All");
  const [filter, setFilter] = useState("Top");

  const filterHandler = (e) => {
    setFilter(e.target.value);
  };
  const categoryHandler = (e) => {
    setCategory(e.target.value);
  };
  const userTypeHandler = (e) => {
    setUserType(e.target.value);
  };

  useEffect(() => {
    console.log(users.filter((user) => user.role == userType));
    setFilteredUsers(users.filter((user) => user.role == userType));
  }, [userType, category, filter, users]);

  return (
    <Card className=" relative w-[850px] rounded-sm">
      <Card className=" -m-4 h-fit flex items-center justify-between mb-4">
        <div className="text-gray-700 font-semibold text-2xl">
          {(filter == "LeastPrice"
            ? filter.substring(0, 5) + " " + filter.slice(5)
            : filter.substring(0, 4) + " " + filter.slice(4)) +
            " " +
            userType.charAt(0).toUpperCase() +
            userType.slice(1) +
            "s"}
        </div>
        <div className="flex items-center ">
          <div className="flex items-center mr-2">
            <div className="text-gray-600 text-sm font-semibold mr-2">
              User type:
            </div>
            <Select
              name="userType"
              id="userType"
              className="text-sm cursor-pointer"
              selectClassName="h-9 bg-gray-100 cursor-pointer"
              labelClassName="block mb-2 text-sm font-bold text-gray-900"
              selectSize="small"
              onChange={userTypeHandler}
              value={userType}
              options={[
                {
                  value: "expert",
                  label: "Experts",
                },
                {
                  value: "user",
                  label: "Users",
                },
              ]}
            />
          </div>
          <div className="flex items-center mr-2">
            <div className="text-gray-600 text-sm font-semibold mr-2">
              Category:
            </div>
            <Select
              name="category"
              id="category"
              className="text-sm cursor-pointer"
              selectClassName="h-9 bg-gray-100 cursor-pointer"
              labelClassName="block mb-2 text-sm font-bold text-gray-900"
              selectSize="small"
              onChange={categoryHandler}
              value={category}
              options={[
                {
                  value: "All",
                  label: "All",
                },
                {
                  value: "Finance",
                  label: "Finance",
                },
                {
                  value: "Technology",
                  label: "Technology",
                },
                {
                  value: "SocialMedia",
                  label: "Social Media",
                },
                {
                  value: "Realestate",
                  label: "Realestate",
                },
                {
                  value: "Investment",
                  label: "Investment",
                },
              ]}
            />
          </div>
          <div className="flex items-center">
            <div className="text-gray-600 text-sm font-semibold mr-2">
              Filter:
            </div>
            <Select
              name="filter"
              id="filter"
              className="text-sm cursor-pointer"
              selectClassName="h-9 bg-gray-100 cursor-pointer"
              labelClassName="block mb-2 text-sm font-bold text-gray-900"
              selectSize="small"
              onChange={filterHandler}
              value={filter}
              options={[
                {
                  value: "Top",
                  label: "Top",
                },
                {
                  value: "LeastPrice",
                  label: "Least Price",
                },
                {
                  value: "MostRated",
                  label: "Most Rated",
                },
                {
                  value: "MostActive",
                  label: "Most Active",
                },
              ]}
            />
          </div>
        </div>
      </Card>
      {!loading ? (
        filteredUsers.map((user, index) => (
          <SearchedUsersCard user={user} key={index} />
        ))
      ) : (
        <div role="status" className="w-full flex justify-center">
          <svg
            aria-hidden="true"
            className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-200 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      )}
    </Card>
  );
};
export default Search;
