import React, { FC } from "react";
import useUser from "../../../utils/hooks/useUser";

interface UserProfileProps {
  userId: number;
}

const UserProfile: FC<UserProfileProps> = ({ userId }) => {
  const { user, loading, error } = useUser(userId);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>{user?.name}</h1>
      <p>Email: {user?.email}</p>
    </div>
  );
};

export default UserProfile;
