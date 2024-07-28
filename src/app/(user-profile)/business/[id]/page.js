import BusinessInfo from "@/components/userProfile/BusinessInfo";
import axios from "axios";

async function getBusinessDetail(id) {
  const business = await axios
    .get(`http://localhost:3000/api/business/${id}`)
    .then((res) => res.data)
    .catch((err) => console.log(err));
  return business;
}

const BusinessInfoPage = async ({ params }) => {
  const { id } = params;
  const business = await getBusinessDetail(id);
  return (
    <div>
      <BusinessInfo {...business}/>
    </div>
  );
};

export default BusinessInfoPage;
