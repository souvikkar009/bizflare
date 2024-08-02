"use client";
import { Input, Stack, usePanGesture } from "@chakra-ui/react";
import { Radio, RadioGroup } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";

const EditInfluencerInfo = ({ userId }) => {
  const _uId = userId.userId;
  const initialState = {
    instaId: "",
    fee: "",
    followers: "",
  };

  const [influencerData, setInfluencerData] = useState(initialState);

  const uploadInfluencerInfo = async () => {
    if (!influencerData.instaId || !influencerData.fee) {
      alert("All Fields Are Required");
      return;
    }
    console.log(influencerData.instaId, influencerData.fee);
    console.log(userId);
    const { success, message, userRole } = await axios
      .post(`http://localhost:3000/api/influencer/${_uId}`, {
        instaId: influencerData.instaId,
        fee: influencerData.fee,
        followers: influencerData.followers,
      })
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        console.log(error);
      });

    if (success) {
      const _userData = JSON.parse(localStorage.getItem("userData"));
      _userData.userRole = userRole;
      localStorage.setItem("userData", JSON.stringify(_userData));
      alert(message);
      window.location.replace(`/influencer/${_uId}`);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    uploadInfluencerInfo();
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white w-4/5 mx-auto p-8 mt-8 rounded-md text-brand-1 font-medium flex flex-col gap-4"
    >
      <div className="flex flex-col gap-2">
        <div>Instagram username (Public Account)</div>
        <Input
          variant="unstyled"
          type="text"
          placeholder="Only Instagram Id"
          bg={"brand.bg2"}
          py={2}
          px={4}
          value={influencerData.instaId}
          name="instaId"
          onChange={(e) => {
            setInfluencerData({
              ...influencerData,
              [e.target.name]: e.target.value,
            });
          }}
        />
      </div>
      <div className="flex flex-col gap-2">
        <div>Followers</div>
        <Input
          variant="unstyled"
          type="Number"
          placeholder="Number of Followers"
          bg={"brand.bg2"}
          py={2}
          px={4}
          value={influencerData.followers}
          name="followers"
          onChange={(e) => {
            setInfluencerData({
              ...influencerData,
              [e.target.name]: e.target.value,
            });
          }}
        />
      </div>
      <div className="flex flex-col gap-2">
        <div>Min Fee For Campaign</div>
        <Input
          variant="unstyled"
          type="Number"
          placeholder="Fee"
          bg={"brand.bg2"}
          py={2}
          px={4}
          value={influencerData.fee}
          name="fee"
          onChange={(e) => {
            setInfluencerData({
              ...influencerData,
              [e.target.name]: e.target.value,
            });
          }}
        />
      </div>
      <div className="flex items-center justify-center">
        <button
          type="submit"
          className="bg-brand-3 text-white py-2 w-1/6 hover:bg-brand-1 rounded-md cursor-pointer"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default EditInfluencerInfo;
