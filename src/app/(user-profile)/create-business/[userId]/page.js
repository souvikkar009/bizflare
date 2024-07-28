import EditBusinessInfo from "@/components/userProfile/EditBusinessInfo";
const BusinessInfo = ({ params }) => {
  const { userId } = params;
  return (
    <div>
      <EditBusinessInfo userId={params} />
    </div>
  );
};

export default BusinessInfo;
