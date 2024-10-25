import React from 'react';
import Post from '../Post/Post';
import Stories from '../Stories/Stories';


const Feed = () => {
  const posts = [
    {
      id: 1,
      username: 'user1',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNPTZdVhettUOgL4gulcQCozdbr2gvz4nOcQ&s',
      caption: 'Enjoying the sunset!',
      likes: 200,
    },
    {
      id: 2,
      username: 'user2',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6yyshGlRrDQcsYAexu6oW6QhlIs0aGjEqxw&s',
      caption: 'At the beach!',
      likes: 150,
    },
    {
      id: 3,
      username: 'user3',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfL6RAv8oqwYSg2l6I4lm0tW-spfLdmgQKSg&s',
      caption: 'At the club!',
      likes: 70,
    },
    {
      id: 4,
      username: 'user4',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfL6RAv8oqwYSg2l6I4lm0tW-spfLdmgQKSg&s',
      caption: 'At the Restaurant!',
      likes: 30,
    },
    {
      id: 5,
      username: 'user5',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfL6RAv8oqwYSg2l6I4lm0tW-spfLdmgQKSg&s',
      caption: 'At the bar!',
      likes: 100,
    },
    // More posts can be added here
  ];
  
  return (
    <div className="feed">
    <Stories />
    {posts && posts.length > 0 ? (
      posts.map((post) => <Post key={post.id} postData={post} />)
    ) : (
      <p>No posts available</p>  // Fallback message if no posts are available
    )}
  </div>
  )
}

export default Feed
