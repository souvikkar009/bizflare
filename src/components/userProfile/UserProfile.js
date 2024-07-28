"use client";
import React, { useState } from "react";

const UserProfile = (user) => {
  return (
    <div className="bg-white w-4/5 mx-auto p-8 mt-8 rounded-md text-brand-1 font-semibold flex flex-col gap-4">
      <div className="flex items-center justify-end">
        <span className="bg-brand-3 text-white py-2 px-4 rounded-md cursor-pointer">
          Edit Profile
        </span>
      </div>
      <div className="user-info-area">
        <div>Full Name</div>
        <div
          className="user-info"
          onInput={(e) => console.log(e.currentTarget.innerText)}
        >
          {user.userFullName}
        </div>
      </div>
      <div className="user-info-area">
        <div>Email</div>
        <div className="user-info">{user.userEmail}</div>
      </div>
      <div className="user-info-area">
        <div>Meta Ad Id</div>
        <div className="user-info">{user.metaAdId || `Nil`}</div>
      </div>
      <div className="user-info-area">
        <div>Google Ad Id</div>
        <div className="user-info">{user.googleAdId || `Nil`}</div>
      </div>
    </div>
  );
};

export default UserProfile;
