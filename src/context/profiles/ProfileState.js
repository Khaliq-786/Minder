import React, { useState } from "react";
import ProfileContext from "./profileContext";

const ProfileState = (props) => {
  const profileinitial = {
    _id: "64c902b7de6c83868bc6d383",
    user: "64c9027dde6c83868bc6d37a",
    username: "khaliq786",
    first_name: "Khaliq",
    last_name: "Hussain",
    __v: 0,
  };
  const [profile, setProfile] = useState(profileinitial);
  return (
    <ProfileContext.Provider value={{ profile, setProfile }}>
      {props.children}
    </ProfileContext.Provider>
  );
};

export default ProfileState;
