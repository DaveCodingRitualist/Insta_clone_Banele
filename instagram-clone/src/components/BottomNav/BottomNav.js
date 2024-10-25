import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  // Import FontAwesomeIcon
import { faHome, faSearch, faVideo, faUser } from '@fortawesome/free-solid-svg-icons';  // Import specific icons
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import './BottomNav.css';

const BottomNav = () => {
  return (
    <div className='bottom-nav'>
      <Link to='/home'>
        <FontAwesomeIcon icon={faHome} />
      </Link>
      <Link to='/explore'>
        <FontAwesomeIcon icon={faSearch} />
      </Link>
      <FontAwesomeIcon icon={faVideo} />
      <Link to='/profile'>
        <FontAwesomeIcon icon={faUser} />
      </Link>
    </div>
  );
};

export default BottomNav;
