import React from "react";

const Sidebar = () => {
  const suggestions = [
    { username: "bmw", img: "path_to_suggestion_image" },
    { username: "bugatti", img: "path_to_suggestion_image" },
    // Add more suggestions here
  ];

  return (
    <div className="right-side">
      <div className="profile">
        <img src="path_to_logged_in_user_image" alt="Profile" />
        <span>Logged in user</span>
      </div>

      <div className="suggestions">
        <h4>Suggested for you</h4>
        {suggestions.map((suggestion, index) => (
          <div className="suggestion" key={index}>
            <img src={suggestion.img} alt={`${suggestion.username} profile`} />
            <span>{suggestion.username}</span>
            <button>Follow</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
