import { Avatar } from '@material-ui/core';
import React from 'react';
import Inputoption from '../feed/Inputoption';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import './Post.css';

function Post({ name, description, message, photoUrl }) {
    return (
        <div className="post">
            <div className="post__header">
                <Avatar />
                <div className="post__info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>

            <div className="post__body">
                <p>{message}</p>
            </div>

            <div className="post__buttons">
                <Inputoption Icon={ThumbUpAltOutlinedIcon} title="Like" color="gray"/>
                <Inputoption Icon={ChatOutlinedIcon} title="Comment" color="gray"/>
                <Inputoption Icon={ShareOutlinedIcon} title="Share" color="gray"/>
                <Inputoption Icon={SendOutlinedIcon} title="Send" color="gray"/>
            </div>
        </div>
    )
}

export default Post;
