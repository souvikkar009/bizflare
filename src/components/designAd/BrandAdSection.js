"use client";
"use client";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  flexbox,
  Center,
} from "@chakra-ui/react";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { LuRefreshCw } from "react-icons/lu";

const BrandAdSection = () => {
  const [brandAds, setBrandAds] = useState([]);
  const [userData, setUserData] = useState({});
  const [selectedImg, setSelectedImg] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  useEffect(() => {
    setUserData(JSON.parse(localStorage.getItem("userData")));
  }, []);
  const handleGenerate = async (e) => {
    e.preventDefault();
    const finalImg = await axios
      .post(`http://localhost:3000/api/genAds/genBrandAds`, {
        businessId: userData.businessId,
      })
      .then((res) => res.data)
      .catch((error) => {
        console.log(error);
      });
    setBrandAds(finalImg);
  };
  return (
    <div>
      <div className="flex items-center justify-center">
        <button
          type="button"
          className="bg-brand-3 text-white rounded-md py-2 px-6 gap-2 text-lg flex items-center justify-center"
          onClick={handleGenerate}
        >
          <span>Generate</span>
          <LuRefreshCw />
        </button>
      </div>
      <div className="my-6 flex w-full flex-wrap gap-4 justify-center">
        {brandAds &&
          brandAds.map((img_src) => {
            return (
              <Image
                width={400}
                height={400}
                src={img_src}
                alt="demoAdImg"
                key={brandAds.indexOf(img_src)}
                className="rounded-md cursor-pointer hover:opacity-80"
                onClick={() => {
                  onOpen();
                  setSelectedImg(img_src);
                }}
              />
            );
          })}
      </div>
      <Drawer placement={"top"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader textAlign={"center"}>
            Use the ad creative in Ad Platform
          </DrawerHeader>
          <DrawerBody>
            <div className="flex flex-col gap-4">
              <div className="text-center text-lg flex items-center justify-center ">
                <div className="border border-brand-1 py-2 px-4 cursor-pointer rounded-md">
                  Meta Ad
                </div>
              </div>
              <div className="text-center text-lg flex items-center justify-center">
                <div className="border border-brand-1 py-2 px-4 cursor-pointer rounded-md">
                  Google Ad
                </div>
              </div>
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default BrandAdSection;
