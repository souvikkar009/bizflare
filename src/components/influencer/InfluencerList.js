import InfluencerCard from "./InfluencerCard";

const InfluencerList = ({ allInfluencersData }) => {
  return (
    <div className="flex flex-col gap-4 mt-8">
      {allInfluencersData &&
        allInfluencersData.map((influenerData) => {
          return (
            <InfluencerCard {...influenerData} key={influenerData.instaId} />
          );
        })}
    </div>
  );
};

export default InfluencerList;
