import { AppContext } from "../context/AppContext";
import { useContext, useEffect } from "react";
import Card from "../components/Card";

const Profile = () => {
  const { getProfile, profile } = useContext(AppContext);
  useEffect(() => {
    getProfile();
  });

  return (
    <div className="flex mt-10 ">
      {profile.map((item) => (
        <Card item={item} key={item._id} />
      ))}
    </div>
  );
};

export default Profile;
