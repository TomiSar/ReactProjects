import React, { useState } from 'react';
import './Feed.css';
import Inputoption from './Inputoption';
import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from './Post';

function Feed() {
    const [posts, setPosts] = useState([]);

    const sendPost = (event) => {
        event.preventDefault();
        // setPosts("");
    }

  return (
    <div className="feed">
      <div className="feed__inputcontainer">
        <div className="feed__input">
            <CreateIcon />
            <form>
                <input type="text" placeholder="Start a post" />
                <button type="submit" onClick={sendPost}>Send</button>
            </form>
        </div>
        <div className="feed__inputoptions">
            <Inputoption Icon={ImageIcon} title="Photo" color="#70b5f9"/>
            <Inputoption Icon={SubscriptionsIcon} title="Video" color="#7e7a33e"/>
            <Inputoption Icon={EventNoteIcon} title="Event" color="#c0cbcd"/>
            <Inputoption Icon={CalendarViewDayIcon} title="Write article" color="#7fc15e"/>
        </div>
      </div>
      {/* Posts */}
     { posts.map((post) => (
         <Post />
     ))}

      <Post name="Tomi Sarjamo" description="Desription for message" message="This works" photoUrl=""/>
    </div>
  );
}

export default Feed;
