import UserProfile from "@/components/userProfile/UserProfile";
import axios from "axios";

async function getUserDetail(id) {
  const user = await axios
    .get(`http://localhost:3000/api/user/${id}`)
    .then((res) => res.data)
    .catch((err) => console.log(err));
  return user;
}

const UserProfilePage = async ({ params }) => {
  const { id } = params;
  const user = await getUserDetail(id);
  return (
    <div>
      <UserProfile {...user} />
    </div>
  );
};

export default UserProfilePage;
