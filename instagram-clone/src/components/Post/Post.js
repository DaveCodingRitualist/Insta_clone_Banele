import React, { memo } from "react";
import "./Post.css";

const Post = memo(({ postData }) => {
  return (
    <div className="post">
      <h3 className="username">{postData.username}</h3>
      <img src={postData.imageUrl} alt="post" />
      <p className="caption">
        <span className="username">{postData.username}</span>
        {postData.caption}
      </p>
      <p className="likes">{postData.likes} likes</p>

      <div className="comments-section">
        {(postData.comments || []).map((comment, index) => (
          <p key={index} className="comment">
            <span className="username">{comment?.username} </span>
            {comment?.text}
          </p>
        ))}
      </div>
    </div>
  );
});

export default Post;
