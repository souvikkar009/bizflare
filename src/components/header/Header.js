"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaUser, FaUserCircle } from "react-icons/fa";
import { useDisclosure } from "@chakra-ui/react";
import { IoNotificationsOutline, IoNotificationsSharp } from "react-icons/io5";
import AuthForm from "../authForm/AuthForm";
import { MdOndemandVideo } from "react-icons/md";
import ProfileMenu from "./ProfileMenu";
import Link from "next/link";
import PartnerMenu from "./PartnerMenu";

const Header = () => {
  const [isSignedIn, setIsSignedIn] = useState("loading");

  useEffect(() => {
    const _isSignedIn = JSON.parse(localStorage.getItem("isSignedIn"));
    setIsSignedIn(_isSignedIn ? "yes" : "no");
  }, []);

  const {
    isOpen: isAuthOpen,
    onOpen: onAuthOpen,
    onClose: onAuthClose,
  } = useDisclosure();

  return (
    <div className="bg-brand-bg1 z-50 fixed top-0 w-screen h-20 border border-b-slate-300">
      <div className="flex items-center justify-between h-full px-8 font-semibold">
        <div className="flex items-center gap-10 text-brand-1">
          <div
            onClick={() => window.location.replace("/")}
            className="text-brand-3 text-2xl flex items-center gap-2 cursor-pointer"
          >
            <Image src={"/logo/logo.png"} width={36} height={36} alt="logo" />
            <span className="text-3xl">BizFlare</span>
          </div>
          <div className="header-ele">Learn</div>
          <div className="header-ele">Pricing</div>

          <Link
            href={isSignedIn === "yes" ? "/upload-template" : "/"}
            className="header-ele"
          >
            Contribute Template
          </Link>
          <div>
            <PartnerMenu />
          </div>
        </div>

        <div className="flex items-center gap-6">
          {isSignedIn === "yes" && (
            <>
              <div>
                <IoNotificationsOutline className="text-brand-1 text-2xl cursor-pointer" />
              </div>
              <div className="pt-[6px]">
                <ProfileMenu />
              </div>
            </>
          )}
          {isSignedIn === "no" && (
            <div className="flex items-center gap-8">
              <Link
                href={"/demo"}
                className="flex items-center gap-1 cursor-pointer p-2 rounded hover:text-brand-3 active:text-brand-3"
              >
                <MdOndemandVideo className="text-2xl" />
                <span>Demo</span>
              </Link>

              <div
                className="flex items-center gap-1 cursor-pointer border border-brand-1 px-4 py-2 rounded hover:text-brand-3 hover:border-brand-3"
                onClick={onAuthOpen}
              >
                <FaUser className="text-lg" />
                <span>Signin</span>
              </div>
            </div>
          )}
        </div>
      </div>
      <div>
        <AuthForm isOpen={isAuthOpen} onClose={onAuthClose} />
      </div>
    </div>
  );
};

export default Header;
