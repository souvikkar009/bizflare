"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const BusinessInfo = (business) => {
  return (
    <div className="bg-white w-4/5 mx-auto p-8 mt-8 rounded-md text-brand-1 font-semibold flex flex-col gap-4">
      <div className="flex items-center justify-end">
        <span className="bg-brand-3 text-white py-2 px-4 rounded-md cursor-pointer">
          Edit Business Info
        </span>
      </div>
      <div className="user-info-area">
        <div>Business House Name</div>
        <div className="user-info">{business.businessName}</div>
      </div>
      <div className="user-info-area">
        <div>Industry</div>
        <div className="user-info">{business.businessIndustry}</div>
      </div>
      <div className="user-info-area">
        <div>Specific Domain</div>
        <div className="user-info">{business.businessDomain}</div>
      </div>
      <div className="user-info-area">
        <div>Business Type</div>
        <div className="user-info">{business.businessType}</div>
      </div>
      <div className="user-info-area">
        <div>Address</div>
        <div className="user-info">{business.businessAddress}</div>
      </div>
    </div>
  );
};

export default BusinessInfo;
