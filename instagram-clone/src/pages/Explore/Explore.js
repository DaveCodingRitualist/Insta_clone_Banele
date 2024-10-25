import React from 'react';
import './Explore.css';
import Header from '../../components/Header/Header';
import BottomNav from '../../components/BottomNav/BottomNav';

const Explore = () => {
  const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4C5KVw44ZxfPR-WJHX6fdutFikflNkNDjMpm9TwRMieov9hBOjOm3o6jtQZ4A1h2bJzQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsN43LsjXI0PLTy3yPQJRBhwFWCwwmz-d85w&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6mq4hL3r0a4sHhrDkXOG8DG4gBnNK5zD9wQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzEz9LZwr0MDKziEgemnPI8uAwBzdn5X8g2w&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUT8AUnmycKnS1gZjEb7XTCx-mDAB_zGrrSQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3kMV1dQEpS52ZEEAXUD_ShjYVTbONFrwhWg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTemS16axEMENe5MgxO0NKOGJBVD7BBxOQNA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDv3BWqN4LujCIgQqXWqsAkPXoGIGU0QcARg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe3nTcW5RWeiw_Yp8tkpHzfI0LKnPYHIaOrQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRYGj2g3qgJ2N4CyYYZ_sl6hlSpL7jg-sDog&s"
  ]
  
  return (
    <>
    <Header />
    <div className='explore-grid'>
      {images.map((image, index) => (
        <img key={index} src={image} alt={`explore-${index}`} className='explore-image' />
      ))}
    </div>
    <BottomNav />
    </>
  );
};

export default Explore
