import React, { useContext } from "react";
import userContext from "../context/userContext";

const Profile = () => {
  const { user } = useContext(userContext);

  if (!user) return <div>Please Login</div>;

  return <>
    <div>WelCome {user.userName}</div>
    <div>Your Password is {user.password}</div>
  </>;
};

export default Profile;
