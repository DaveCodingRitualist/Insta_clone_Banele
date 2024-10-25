import React from 'react';
import './Profile.css';
import Header from '../../components/Header/Header';
import BottomNav from '../../components/BottomNav/BottomNav';

const Profile = () => {
  const user = {
    username: "Boya Ndlovu",
    bio: "Traveler | Foodie | Photographer",
    profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdARMXoopM4h1-Z0UvZ_-lQeUr2joWcxkjVg&s",
  };

  const posts = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpqCTDqUX6JuC695d8W2NsHm-eWrkH9h4qRA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1piCII-o7bFSiYMGh8OMXZrwwhDpBikHqGA&s",
    // Add more posts
  ];

  return (
    <>
    <Header />
    <div className="profile-container">
      <div className="profile-header">
        <img src={user.profilePic} alt="profile-pic" className="profile-pic" />
        <div className="profile-details">
          <h2>{user.username}</h2>
          <p>{user.bio}</p>
        </div>
      </div>
      <div className="profile-posts">
        {posts.map((post, index) => (
          <img key={index} src={post} alt={`post-${index}`} className="profile-post" />
        ))}
      </div>
    </div>
    <BottomNav />
    </>
  );
};

export default Profile;
