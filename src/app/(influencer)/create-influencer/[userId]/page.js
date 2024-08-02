import EditInfluencerInfo from "@/components/influencer/EditInfluencerInfo";
const BusinessInfo = ({ params }) => {
  const { userId } = params;
  return (
    <div>
      <EditInfluencerInfo userId={params} />
    </div>
  );
};

export default BusinessInfo;
