import React from 'react';

const UserProfile = ({ userData }) => {
  return (
    <div className="user-profile">
      <h2>{userData.name}</h2>
      <p>Email: {userData.email}</p>
    </div>
  );
};

export default UserProfile;
