"use client";
import GeneralBusinessTypes from "@/data/BusinessTypeData/GeneralBusiness";
import SpecificBusinessTypes from "@/data/BusinessTypeData/SpecificBusiness";
import { Input, Select, Stack, usePanGesture } from "@chakra-ui/react";
import { Radio, RadioGroup } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";

const EditBusinessInfo = ({ userId, business }) => {
  const _uId = userId.userId;
  const initialState = _uId
    ? {
        bName: "",
        bIndustry: "",
        bDomain: "",
        bType: "",
        bAddress: "",
      }
    : {
        bName: "Nil",
        bIndustry: "Nil",
        bDomain: "Nil",
        bType: "",
        bAddress: "Nil",
      };
  const [businessData, setBusinessData] = useState(initialState);

  const uploadBusinessInfo = async () => {
    if (
      !businessData.bName ||
      !businessData.bIndustry ||
      !businessData.bDomain ||
      !businessData.bType ||
      !businessData.bAddress
    ) {
      alert("All Fields Are Required");
      return;
    }
    console.log({
      businessName: businessData.bName,
      businessIndustry: businessData.bIndustry,
      businessDomain: businessData.bDomain,
      businessType: businessData.bType,
      businessAddress: businessData.bAddress,
    });
    console.log(userId);
    const { success, message, businessId } = await axios
      .post(`http://localhost:3000/api/business/${_uId}`, {
        businessName: businessData.bName,
        businessIndustry: businessData.bIndustry,
        businessDomain: businessData.bDomain,
        businessType: businessData.bType,
        businessAddress: businessData.bAddress,
      })
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        console.log(error);
      });

    if (success) {
      const _userData = JSON.parse(localStorage.getItem("userData"));
      _userData.businessId = businessId;
      localStorage.setItem("userData", JSON.stringify(_userData));
      alert(message);
      window.location.replace(`/business/${businessId}`);
    }
  };

  const updateBusinessInfo = () => {};

  const handleSubmit = (e) => {
    e.preventDefault();
    userId ? uploadBusinessInfo() : updateBusinessInfo();
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white w-4/5 mx-auto p-8 mt-8 rounded-md text-brand-1 font-medium flex flex-col gap-4"
    >
      <div className="flex flex-col gap-2">
        <div>Business House Name</div>
        <Input
          variant="unstyled"
          placeholder="Business House Name"
          bg={"brand.bg2"}
          py={2}
          px={4}
          value={businessData.bName}
          name="bName"
          onChange={(e) => {
            setBusinessData({
              ...businessData,
              [e.target.name]: e.target.value,
            });
          }}
        />
      </div>
      <div className="flex flex-col gap-2">
        <div>Industry</div>
        <Select
          placeholder="Select Industry"
          bg={"brand.bg2"}
          name="bIndustry"
          size={"md"}
          onChange={(e) => {
            setBusinessData({
              ...businessData,
              [e.target.name]: e.target.value,
            });
          }}
          value={businessData.bIndustry}
        >
          {GeneralBusinessTypes.map((bType) => {
            return (
              <option value={bType.typeName} key={bType.id}>
                {bType.typeName}
              </option>
            );
          })}
        </Select>
      </div>
      <div className="flex flex-col gap-2">
        <div>Specific Domain</div>
        <Select
          placeholder="Select Specific Domain"
          bg={"brand.bg2"}
          name="bDomain"
          size={"md"}
          onChange={(e) => {
            setBusinessData({
              ...businessData,
              [e.target.name]: e.target.value,
            });
          }}
          value={businessData.bDomain}
        >
          {businessData.bIndustry &&
            SpecificBusinessTypes[businessData.bIndustry].map((domain) => {
              return (
                <option value={domain} key={domain}>
                  {domain}
                </option>
              );
            })}
        </Select>
      </div>
      <div className="flex flex-col gap-2">
        <div>Business Type</div>
        <RadioGroup
          name="bType"
          value={businessData.bType}
          onClick={(e) =>
            setBusinessData({
              ...businessData,
              [e.target.name]: e.target.value,
            })
          }
        >
          <Stack direction="row" gap={8}>
            <Radio value="online">Online</Radio>
            <Radio value="offline">Offline (Brick & Mortar)</Radio>
            <Radio value="hybrid">Hybrid (Brick & Click)</Radio>
          </Stack>
        </RadioGroup>
      </div>
      <div className="flex flex-col gap-2">
        <div>Address</div>
        <Input
          variant="unstyled"
          placeholder="Address"
          bg={"brand.bg2"}
          py={2}
          px={4}
          value={businessData.bAddress}
          name="bAddress"
          onChange={(e) => {
            setBusinessData({
              ...businessData,
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

export default EditBusinessInfo;
