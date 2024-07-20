"use client";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  IconButton,
} from "@chakra-ui/react";
import axios from "axios";
import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";

const ProfileMenu = () => {
  const userData = JSON.parse(localStorage.getItem("userData"));
  console.log(userData);
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
