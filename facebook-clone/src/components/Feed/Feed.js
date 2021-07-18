import React from 'react';
import './Feed.css';
import MessageSender from './MessageSender';
import Post from './Post';
import StoryReel from './StoryReel';

function Feed() {
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
            <Post 
                profilePicture="https://2sj8jt43nx8s3fh0fpaz8wf7-wpengine.netdna-ssl.com/wp-content/uploads/2019/08/picture-413075-f7332f07443c1f22d024ebadfc926932.jpg"
                image="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29kZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
                userName="Tomi Sarjamo"
                timestamp="23.41 sunday 18.07.21"
                message="First test comment"
            />
            <Post 
                profilePicture="https://2sj8jt43nx8s3fh0fpaz8wf7-wpengine.netdna-ssl.com/wp-content/uploads/2019/08/picture-413075-f7332f07443c1f22d024ebadfc926932.jpg"
                image="https://cdn.britannica.com/s:800x1000/30/199930-050-22822D75/computer.jpg"
                userName="Tomi Sarjamo"
                timestamp="23.52 sunday 18.07.21"
                message="Second test comment"
            />
        </div>
    )
}

export default Feed;