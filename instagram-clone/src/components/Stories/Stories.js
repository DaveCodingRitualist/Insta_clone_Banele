import React from "react";
import './Stories.css'

const Stories = () => {
  const storiesData = [
    { username: "Mac Kahey", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQit6_CRhrqTrzH_A1Mbc6ApFK7UHlAlmn4Pg&s" },
    { username: "kayla Gomez", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdt5agrbg_JjfAbfVvn6YBhtBwqeD74sMAMg&s" },
    { username: "JD", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzxbxbSjIEGjNF1rqzTxJhUF2EsKkRlyY4nA&s" },
    { username: "Fatima Badawy", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoLJzo8BarpXTQnDnkyBZuZYYE6Oxq6sKkyA&s" },
    // Add more stories here
  ];

  return (
    <div className="stories">
      {storiesData.map((story, index) => (
        <div className="story" key={index}>
          <img src={story.img} alt={`${story.username} story`} />
          <span>{story.username}</span>
        </div>
      ))}
    </div>
  );
};

export default Stories;
