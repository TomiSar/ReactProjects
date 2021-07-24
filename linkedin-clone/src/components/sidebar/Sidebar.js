import React from 'react';
import './Sidebar.css'
import { Avatar } from '@material-ui/core';

function Sidebar() {
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
                <Avatar className="sidebar__avatar" src="https://media-exp1.licdn.com/dms/image/C4D03AQFv9YnH3mXhPw/profile-displayphoto-shrink_800_800/0/1604404700829?e=1632355200&v=beta&t=EsHlx9EUqA5bjltd8M_DiTIMpG7equ08X_4tw5gA0oc" />
                <h2>Tomi Sarjamo</h2>
                <h4>SW consultant</h4>
                <h4>tomppa.sarjamo@gmail.com</h4>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed your profile</p>
                    <p className="sidebar__statnumber">123</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views of your post</p>
                    <p className="sidebar__statnumber">1,542</p>
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

export default Sidebar