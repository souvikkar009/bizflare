"use client";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import Link from "next/link";

const PartnerMenu = () => {
  return (
    <Menu>
      <MenuButton className="hover:text-brand-3">
        <div>BizFlare Partners</div>
      </MenuButton>
      <MenuList>
        <MenuItem>
          <div className="hover:text-brand-3">Designer</div>
        </MenuItem>
        <MenuItem>
          <div className="hover:text-brand-3">Influencer</div>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default PartnerMenu;
