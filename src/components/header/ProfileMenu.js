"use client";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import axios from "axios";
import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";

const ProfileMenu = () => {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const handleSignOut = async () => {
    const { success, message } = await axios
      .get(`http://localhost:3000/api/auth/signout`)
      .then((response) => {
        return response.data;
      });

    if (!success) {
      alert(message);
      return;
    }
    localStorage.setItem("isSignedIn", false);
    localStorage.removeItem("userData");
    window.location.replace("/");

    console.log(success, message);
  };
  return (
    <Menu>
      <MenuButton>
        <FaUserCircle className="text-3xl" />
      </MenuButton>
      <MenuList>
        <MenuItem>
          <Link href={`/user/${userData.userId}`} className="w-full">
            My Profile
          </Link>
        </MenuItem>
        <MenuItem onClick={handleSignOut}>
          <div>SignOut</div>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default ProfileMenu;
