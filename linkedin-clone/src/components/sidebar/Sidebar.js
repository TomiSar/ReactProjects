import React from 'react';
import './Sidebar.css'
import { Avatar } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';

function Sidebar() {
    const user = useSelector(selectUser);

    const recentItem = (topic) => (
        <div className="sidebar__recentitem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    );

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://i.pinimg.com/originals/60/bf/7c/60bf7c84a3f4bb95b2a4d0697bbedbae.jpg" alt="" />
                <Avatar className="sidebar__avatar" src={user.photoURL}>{user.email[0].toUpperCase()}</Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed your profile</p>
                    <p className="sidebar__statnumber">3,561</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views of your post</p>
                    <p className="sidebar__statnumber">7,542</p>
                </div>
            </div>

            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('reactJS')}
                {recentItem('softwaredevelopment')}
                {recentItem('softwareengineering')}
                {recentItem('programming')}
                {recentItem('developer')}
            </div>
        </div>
    )
}

export default Sidebar;