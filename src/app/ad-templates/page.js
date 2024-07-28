/* eslint-disable @next/next/no-img-element */
import adTypes from "@/data/adTypes";
import Image from "next/image";

const AdTemplates = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 mt-24">
      {adTypes.map((types) => {
        return (
          <div key={types.id}>
            <img
              src={`/src-ad-templates/src-template-${types.varient}.png`}
              className="w-72 h-72 rounded-md"
              alt={`src-template-${types.varient}`}
            />
            <div className="text-center mt-2">{types.varient} template</div>
          </div>
        );
      })}
    </div>
  );
};

export default AdTemplates;
