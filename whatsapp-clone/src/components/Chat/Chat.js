import React, { useState, useEffect } from 'react';
import './Chat.css';
import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, SearchOutlined, MoreVert, InsertEmoticon, Mic } from '@material-ui/icons';
import { useParams } from 'react-router-dom';
import db from '../../firebase';
import { useStateValue } from '../StateProvider';
import firebase from 'firebase';

function Chat() {
  const [seed, setSeed] = useState('');
  const [input, setInput] = useState('');
  const { roomId } = useParams();
  const [roomName, setRoomName] = useState('');
  const [messages, setMessages] = useState([]);
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    if (roomId) {
      db.collection('rooms').doc(roomId)
        .onSnapshot((snapshot) => setRoomName(snapshot.data().name));

      db.collection('rooms').doc(roomId).collection('messages').orderBy('timestamp', 'asc')
        .onSnapshot((snapshot) => setMessages(snapshot.docs.map(doc => doc.data())));
    }
  }, [roomId]);

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 1000000));
  }, [roomId]);

  const sendMesssage = (event) => {
    event.preventDefault();
    
    db.collection('rooms').doc(roomId).collection('messages').add({
        message: input,
        name: user.displayName,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    
    
    setInput('');
  };

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src={`https://avatars.dicebear.com/api/micah/${seed}.svg`} />

        <div className="chat__headerinfo">
          <h3>{roomName}</h3>
          <p>last seen {" "} {new Date(messages[messages.length -1]?.timestamp?.toDate()).toLocaleString()}</p>
        </div>

        <div className="chat__headerright">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>

      <div className="chat__body">
        { messages.map(message => (
            <p className={`chat__message ${message.name === user.displayName && 'chat__receiver'}`}>
            <span className="chat__name">{message.name}</span>
            {message.message}
            <span className="chat__timestamp">
              {new Date(message.timestamp?.toDate()).toLocaleString()}
            </span>
          </p>
        ))}
      </div>

      <div className="chat__footer">
        <div className="chat__footerlefticons">
          <IconButton>
            <InsertEmoticon />
          </IconButton>
          <IconButton className="chat__footerlefticonsattach">
            <AttachFile />
          </IconButton>
        </div>
        <form>
          <input
            placeholder="Type a message"
            type="text"
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <button type="submit" onClick={sendMesssage}>
            Send
          </button>
        </form>
        <div className="chat__footerrighticon">
          <IconButton>
            <Mic />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Chat;
