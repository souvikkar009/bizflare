"use client";
import { LuRefreshCw } from "react-icons/lu";

const DemoInputForm = () => {
  const handleDemoFormSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form className="w-full" onSubmit={handleDemoFormSubmit}>
      <div className="text-brand-1 flex items-center justify-center w-full gap-8">
        <div className="demoFormInputContainer">
          <div className="demoFormInputHeader">Business Name</div>
          <input
            type="text"
            placeholder="My Business Name"
            name="business-name"
            className="demoFormInput"
          />
        </div>
        <div className="demoFormInputContainer">
          <div className="demoFormInputHeader">General Business Category</div>
          <input
            type="text"
            placeholder="My General Business Type"
            name="general-business"
            className="demoFormInput"
          />
        </div>
        {/* <div className="demoFormInputContainer">
          <div className="demoFormInputHeader">Specific Business Category</div>
          <input
            type="text"
            placeholder="My Specific Business Category"
            name="specific-business"
            className="demoFormInput"
          />
        </div> */}
      </div>
      <div className="flex w-full items-center justify-center mt-4">
        <button
          type="submit"
          className="bg-brand-3 text-brand-bg1 flex items-center gap-2 justify-center py-2 px-4 rounded-md"
        >
          <span>Generate</span>
          <LuRefreshCw />
        </button>
      </div>
    </form>
  );
};

export default DemoInputForm;
