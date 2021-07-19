import React from 'react';
import './Header.css';
import { Avatar, IconButton } from '@material-ui/core';
import { Search, Home, Flag, SubscriptionsOutlined, StoreOutlined, SupervisedUserCircle, Add, Forum, NotificationsActive, ExpandMore } from '@material-ui/icons';
import { useStateValue } from '../../StateProvider';

function Header() {
  const [{user}, dicpatch] = useStateValue();

  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1024px-Facebook_f_logo_%282019%29.svg.png"
          alt=""
        />
      </div>

      <div className="header__input">
        <Search />
        <input placeholder="Search Facebook" type="text" />
      </div>

      <div className="header__center">
        <div className="header__option header__option--active">
          <Home fontSize="large" />
        </div>
        <div className="header__option">
          <Flag fontSize="large" />
        </div>
        <div className="header__option">
          <SubscriptionsOutlined fontSize="large" />
        </div>
        <div className="header__option">
          <StoreOutlined fontSize="large" />
        </div>
        <div className="header__option">
          <SupervisedUserCircle fontSize="large" />
        </div>
      </div>

      <div className="header__right">
        <div className="header__info">
          <Avatar src={user.photoURL} />
          <h4>{user.displayName}</h4>
        </div>
        
        <IconButton>
            <Add />
        </IconButton>
        <IconButton>
            <Forum />
        </IconButton>
        <IconButton>
            <NotificationsActive />
        </IconButton>
        <IconButton>
            <ExpandMore />
        </IconButton>

      </div>
    </div>
  );
}

export default Header;