"use client";
import ProfileHeader from "featuers/pages/Profile/ProfileHeader";
import About from "featuers/pages/Profile/About";
import Resume from "featuers/pages/Profile/Resume";
import Posts from "featuers/pages/Profile/Posts";
import Reviwes from "featuers/pages/Profile/Reviwes";
import Callender from "featuers/pages/Profile/Callender";
import SendUpdatedDataPopupNormal from "featuers/pages/Profile/SendUpdatedDataPopupNormal";
import React, { useState, useEffect } from "react";

const Profile = () => {
  const [profileSection, setProfileSection] = useState("posts");
  const [pops, setPops] = useState(false);
  const [posts, setPosts] = useState([]);
  const [noPosts, SetNoPosts] = useState("");

  const handleProfileSection = (section) => {
    setProfileSection(section);
  };

  const handlePops = (pops) => {
    setPops(pops);
  };

  useEffect(() => {
    const getUsersPosts = async () => {
      const Token = localStorage.getItem("Token")
      try {
        const response = await fetch(
          "https://worrisome-pocketbook-calf.cyclic.app/api/v1/post/647c306609318861cc49b059",
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
        setPosts(data.data.fulldata.expertPost)
        console.log(data.data.fulldata.expertPost);
        if (data.data.fulldata.expertPost.length == 0) {
          SetNoPosts("No posts yet for this expert");
        } else {
          SetNoPosts("");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    getUsersPosts();
    }, []);

  return (
    <div className="w-[80%] flex-col mt-2 px-4 py-2">
      <ProfileHeader handleProfileSection={handleProfileSection} />
      <div className="flex">
        {profileSection === "resume" && <Resume />}
        {profileSection === "posts" && <Posts posts={posts} noPosts={noPosts} />}
        {profileSection === "reviwes" && <Reviwes />}
        {profileSection === "callender" && <Callender />}

        {profileSection != "callender" && <About handlePops={setPops} />}
      </div>

      {pops && <SendUpdatedDataPopupNormal handlePops={setPops} />}
    </div>
  );
};
export default Profile;
