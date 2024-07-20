const UserProfile = ({ params }) => {
  const { id } = params;
  return <div className="mt-24">UserId : {id}</div>;
};

export default UserProfile;
