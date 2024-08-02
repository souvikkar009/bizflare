import DesignAdSideBar from "@/components/designAd/DesignAdSideBar";
import TemplateSideBar from "@/components/templates/TemplateSideBar";

const TemplateLayout = ({ children }) => {
  return (
    <div className="flex w-full">
      <div className="w-1/6 flex-shrink-0 h-screen pt-20 bg-brand-bg1 border-r sticky top-0 border-r-slate-300">
        <TemplateSideBar />
      </div>
      <div className="flex-shrink w-full pt-20">{children}</div>
    </div>
  );
};

export default TemplateLayout;
