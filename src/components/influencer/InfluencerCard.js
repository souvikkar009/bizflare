"use client";
import React, { useEffect, useState } from "react";

const InfluencerCard = (influencer) => {
  const [userData, setUserData] = useState({});
  useEffect(() => {
    setUserData(JSON.parse(localStorage.getItem("userData")));
  }, []);
  return (
    <div className="mx-auto w-3/5">
      {influencer && (
        <div className="flex items-start justify-between py-4 px-6 rounded-md border-brand-1 border bg-brand-bg1">
          <div>
            <div>
              <span className="font-semibold">Insta Id: </span>{" "}
              {influencer.instaId}
            </div>
            <div>
              <span className="font-semibold">Name: </span>
              {influencer.fullName}
            </div>
          </div>
          <div>
            <span className="font-semibold">Followers: </span>
            {influencer.followers}
          </div>
          <div>
            <span className="font-semibold">Min Fee: </span>
            {influencer.fee}
          </div>
        </div>
      )}
    </div>
  );
};

export default InfluencerCard;
