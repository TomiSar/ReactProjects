import React, { useState, useEffect } from 'react';
import db from '../../firebase';
import './Feed.css';
import MessageSender from './MessageSender';
import Post from './Post';
import StoryReel from './StoryReel';

function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts').orderBy('timestamp', 'desc').onSnapshot((snapshot) => {
            setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })));
        })
    }, [])

    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
            
            {/* Map all posts */}
            { posts.map(post => (
                <Post 
                    key={post.data.id}
                    profilePicture={post.data.profilePicture}
                    image={post.data.image}
                    userName={post.data.userName}
                    timestamp={post.data.timestamp}
                    message={post.data.message}
                />
            ))}

        </div>
    )
}

export default Feed;