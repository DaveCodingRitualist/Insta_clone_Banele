import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import DirectMessage from '../../assets/instagram-dm-image.png';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <img className="instagram-logo" src="https://lindseypublicover.wordpress.com/wp-content/uploads/2014/08/instagram-logo.png?w=978" alt="IG-logo" />
      
      {/* Add search bar here */}
      <input type="text" className="search-bar" placeholder="Search" />

      <div className="icon-interaction">
        <FontAwesomeIcon icon={faHeart} />
        <img className="Direct-message-icon" src={DirectMessage} alt="Dmicon" />
      </div>
    </div>
  );
};

export default Header;
