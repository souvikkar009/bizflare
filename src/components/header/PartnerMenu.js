"use client";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import Link from "next/link";
import { useEffect, useState } from "react";

const PartnerMenu = () => {
  const [userData, setUserData] = useState({});
  useEffect(() => {
    setUserData(JSON.parse(localStorage.getItem("userData")));
  }, []);
  return (
    <Menu>
      <MenuButton className="hover:text-brand-3">
        <div>BizFlare Partners</div>
      </MenuButton>
      <MenuList>
        <MenuItem>
          <Link
            className="hover:text-brand-3"
            href={
              userData
                ? userData.userRole === `client`
                  ? `create-influencer/${userData.userId}`
                  : `/influencer/${userData.userId}`
                : `/`
            }
          >
            Influencer
          </Link>
        </MenuItem>
        <MenuItem>
          <div className="hover:text-brand-3">Designer</div>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default PartnerMenu;
