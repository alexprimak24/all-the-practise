import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

function ProfilesPages() {
  const profiles = [1, 2, 3, 4, 5];
  return (
    <div>
      {profiles.map((profile) => (
        <NavLink key={profile} to={`/profiles/${profile}`}>
          Profile {profile}
        </NavLink>
      ))}
      <Outlet />
    </div>
  );
}

export default ProfilesPages;
