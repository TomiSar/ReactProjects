import React, { useState, useEffect } from 'react';
import './Feed.css';
import Inputoption from './Inputoption';
import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from './Post';
import { db } from '../../firebase';
import firebase from 'firebase';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import FlipMove from 'react-flip-move';

function Feed() {
  const [input, setInput] = useState('');
  const [posts, setPosts] = useState([]);
  const user = useSelector(selectUser);

  useEffect(() => {
    const unsubscribe = db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => 
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
    );
    
    return () => {
      unsubscribe();
    }
  }, []);

  const sendPost = (event) => {
    event.preventDefault();

    db.collection('posts').add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoURL || '',
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput('');
  };

  return (
    <div className="feed">
      <div className="feed__inputcontainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input value={input} onChange={(event) => setInput(event.target.value)} type="text" />
            <button onClick={sendPost} type="submit">Send</button>
          </form>
        </div>
        <div className="feed__inputoptions">
          <Inputoption Icon={ImageIcon} title="Photo" color="#70b5f9" />
          <Inputoption Icon={SubscriptionsIcon} title="Video" color="#7e7a33e" />
          <Inputoption Icon={EventNoteIcon} title="Event" color="#c0cbcd" />
          <Inputoption Icon={CalendarViewDayIcon} title="Write article" color="#7fc15e" />
        </div>
      </div>

      <FlipMove>
        {posts.map(({ id, data: { name, description, message, photoUrl }}) => (
          <Post key={id} name={name} description={description} message={message} photoUrl={photoUrl} />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;