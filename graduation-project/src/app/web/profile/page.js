"use client";
import ProfileHeader from "featuers/pages/Profile/ProfileHeader";
import About from "featuers/pages/Profile/About";
import Resume from "featuers/pages/Profile/Resume";
import Posts from "featuers/pages/Profile/Posts";
import Reviwes from "featuers/pages/Profile/Reviwes";
import SendUpdatedDataPopupNormal from "featuers/pages/Profile/SendUpdatedDataPopupNormal";
import React, { useState } from "react";

const Profile = () => {
  const [profileSection, setProfileSection] = useState("posts");
  const [pops, setPops] = useState(false);

  const handleProfileSection = (section) => {
    setProfileSection(section);
  };

  const handlePops = (pops) => {
    setPops(pops);
  };

  return (
    <>


      <br></br>
      <br></br>
      <div className="">
        <ProfileHeader handleProfileSection={handleProfileSection} />
        <div className="flex">
          {profileSection === "resume" && <Resume />}
          {profileSection === "posts" && <Posts />}
          {profileSection === "reviwes" && <Reviwes />}

          <About handlePops={setPops} />
        </div>
      </div>
      
      {pops && <SendUpdatedDataPopupNormal handlePops={setPops}/>}
    </>
  );
};
export default Profile;
