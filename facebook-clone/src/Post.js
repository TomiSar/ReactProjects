import { Avatar } from '@material-ui/core';
import { ThumbUp, ChatBubbleOutline, NearMe, AccountCircle, ExpandMore } from '@material-ui/icons';
import React from 'react';
import './Post.css';

function Post({ profilePicture, image, userName, timestamp, message }) {
    return (
        <div className="post">
            <div className="post__top">
                <Avatar src={profilePicture} className="post__avatar"/>

                <div className="post__topinfo">
                    <h3>{userName}</h3>
                    <p>{timestamp}</p>
                    {/* <p>{new Date(timestamp?.toDate()).toLocaleString()}</p> */}
                </div>
            </div>

            <div className="post__bottom">
                <p>{message}</p>
            </div>

            <div className="post__image">
                <img src={image} alt="" />
            </div>

            <div className="post__options">
                <div className="post__option">
                    <ThumbUp />
                    <p>Like</p>
                </div>
                <div className="post__option">
                    <ChatBubbleOutline />
                    <p>Comment</p>
                </div>
                <div className="post__option">
                    <NearMe />
                    <p>Share</p>
                </div>
                <div className="post__option">
                    <AccountCircle />
                    <ExpandMore />
                </div>
            </div>
        </div>
    )
}

export default Post;