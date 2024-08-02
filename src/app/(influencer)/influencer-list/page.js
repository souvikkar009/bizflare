import InfluencerList from "@/components/influencer/InfluencerList";
import axios from "axios";
import React from "react";

const InfluencerListPage = async () => {
  const { allInfluencers } = await axios
    .get(`http://localhost:3000/api/getAllInfluencers`)
    .then((res) => res.data)
    .catch((error) => console.log(error));
  return (
    <div>
      <div className="text-center font-semibold text-2xl mt-4 text-brand-1 mb-4">
        Choose your social media influencer for your campaign
      </div>
      <InfluencerList allInfluencersData={allInfluencers} />
    </div>
  );
};

export default InfluencerListPage;
