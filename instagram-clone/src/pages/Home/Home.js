import React from 'react'
import Header from '../../components/Header/Header';
import Feed from '../../components/Feed/Feed';
import BottomNav from '../../components/BottomNav/BottomNav';
import './Home.css';

const Home = () => {
  return (
    <div>
      <Header />
      <Feed />
      <BottomNav />
    </div>
  )
}

export default Home
