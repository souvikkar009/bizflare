/* eslint-disable @next/next/no-img-element */
"use client";
import { LuRefreshCw } from "react-icons/lu";
import { Select } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import GeneralBusinessTypes from "@/data/BusinessTypeData/GeneralBusiness";
import { useState } from "react";
import SpecificBusinessTypes from "@/data/BusinessTypeData/SpecificBusiness";
import axios from "axios";
import Image from "next/image";

const Demo = () => {
  const [demoImgs, setDemoImgs] = useState([]);
  const initialState = {
    businessName: "",
    generalBType: "",
    specificBType: "",
  };
  const [businessData, setbusinessData] = useState(initialState);
  const handleChange = (e) => {
    setbusinessData({
      ...businessData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const resDemoImgs = await axios
      .post(`http://localhost:3000/api/genAds/genDemoAds`, businessData)
      .then((res) => res.data)
      .catch((error) => {
        console.log(error);
      });
    setDemoImgs(resDemoImgs.finalImgs);
  };
  return (
    <div>
      <form className="w-full" onSubmit={handleSubmit}>
        <div className="text-brand-1 flex items-center justify-center w-full gap-8">
          <div className="demoFormInputContainer">
            <div className="demoFormInputHeader">Business Name</div>
            <Input
              placeholder="My Business Name"
              bg={"brand.bg1"}
              name="businessName"
              onChange={handleChange}
              value={businessData.businessName}
            />
          </div>
          <div className="demoFormInputContainer">
            <div className="demoFormInputHeader">Industry</div>
            <Select
              placeholder="Select Industry"
              bg={"brand.bg1"}
              name="generalBType"
              size={"md"}
              onChange={handleChange}
              value={businessData.generalBType}
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
          <div className="demoFormInputContainer">
            <div className="demoFormInputHeader">Specific Business Domain</div>
            <Select
              placeholder="Select Specific Business Doamin"
              bg={"brand.bg1"}
              name="specificBType"
              size={"md"}
              onChange={handleChange}
              value={businessData.specificBType}
            >
              {businessData.generalBType &&
                SpecificBusinessTypes[businessData.generalBType].map(
                  (sBType) => {
                    return (
                      <option value={sBType} key={sBType}>
                        {sBType}
                      </option>
                    );
                  }
                )}
            </Select>
          </div>
        </div>
        <div className="flex w-full items-center justify-center mt-4">
          <button
            type="submit"
            className="bg-brand-3 text-brand-bg1 hover:bg-brand-1 ease-linear duration-150 flex items-center gap-2 justify-center py-2 px-4 rounded-md"
          >
            <span>Generate</span>
            <LuRefreshCw />
          </button>
        </div>
      </form>

      <div className="my-6 flex w-full flex-wrap gap-4 justify-center">
        {demoImgs &&
          demoImgs.map((img_src) => {
            return (
              <Image
                width={400}
                height={400}
                src={img_src}
                alt="demoAdImg"
                key={demoImgs.indexOf(img_src)}
                className="rounded-md cursor-pointer hover:opacity-80"
              />
            );
          })}
      </div>
    </div>
  );
};

export default Demo;
