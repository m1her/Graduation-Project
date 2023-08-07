"use client";
import ProfileHeader from "featuers/pages/Profile/ProfileHeader";
import About from "featuers/pages/Profile/About";
import Resume from "featuers/pages/Profile/Resume";
import Posts from "featuers/pages/Profile/Posts";
import Reviwes from "featuers/pages/Profile/Reviwes";
import Callender from "featuers/pages/Profile/Callender";
import SendUpdatedDataPopupNormal from "featuers/pages/Profile/SendUpdatedDataPopupNormal";
import React, { useState, useEffect } from "react";
import { getStorageItem } from "utils";
import { Card } from "components";

const Profile = ({ params }) => {
  const [profileSection, setProfileSection] = useState("");
  const [pops, setPops] = useState(false);
  const [posts, setPosts] = useState([]);
  const [noPosts, SetNoPosts] = useState("");
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const currentUser = getStorageItem("User");
  const handleProfileSection = (section) => {
    setProfileSection(section);
  };

  const handlePops = (pops) => {
    setPops(pops);
  };

  const getUsersPosts = async (id) => {
    const Token = localStorage.getItem("Token");
    try {
      const response = await fetch(
        `https://worrisome-pocketbook-calf.cyclic.app/api/v1/post/${id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${Token}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log(data);
      setPosts(data.data.fulldata.expertPost);
      if (data.data.fulldata.expertPost.length == 0) {
        SetNoPosts("No posts yet for this expert");
      } else {
        SetNoPosts("");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    const getUser = async () => {
      const Token = localStorage.getItem("Token");
      try {
        const response = await fetch(
          `https://worrisome-pocketbook-calf.cyclic.app/api/v1/users/profile/${params.id}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${Token}`,
            },
          }
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setUser(data.data.user[0]);
        if (data.data.user[0].isExpert) {
          getUsersPosts(data.data.user[0].expert._id);
        }
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };
    getUser();
  }, []);

  return (
    <div className="w-[80%] flex-col mt-2 px-4 py-2">
      {isLoading ? (
        <>
          <div className="bg-white rounded-sm w-full h-[490px] shadow-md"></div>
          <div className="flex gap-4 mt-4 w-full h-[250px] ">
            <div className=" bg-white w-full h-full shadow-md"></div>
            <div className="bg-white w-[280px] h-full shadow-md"></div>
          </div>
        </>
      ) : (
        <>
          {" "}
          <ProfileHeader
            user={user}
            handleProfileSection={handleProfileSection}
            currentUserId={currentUser._id}
          />
          <div className="flex">
            {profileSection === "resume" && <Resume />}
            {profileSection === "posts" && (
              <Posts
                posts={posts}
                noPosts={noPosts}
                isVisitor={currentUser._id == user._id}
                name={user.name}
                profileImage={user.profileImage}
              />
            )}
            {profileSection === "reviwes" && <Reviwes />}
            {profileSection === "callender" && <Callender />}

            {profileSection != "callender" && (
              <About
                user={user}
                handlePops={setPops}
                currentUserId={currentUser._id}
              />
            )}
          </div>
          {pops && <SendUpdatedDataPopupNormal handlePops={setPops} />}
        </>
      )}
    </div>
  );
};
export default Profile;
