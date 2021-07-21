import React, { useState, useEffect } from 'react';
import './Chat.css';
import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, SearchOutlined, MoreVert, InsertEmoticon, Mic } from '@material-ui/icons';

function Chat() {
  const [seed, setSeed] = useState('');
  const [input, setInput] = useState('');  

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 1000000));
  }, []);

  const sendMesssage = (event) => {
      event.preventDefault();
      console.log("Your message:", input)

      setInput("");
  }

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src={`https://avatars.dicebear.com/api/micah/${seed}.svg`} />

        <div className="chat__headerinfo">
          <h3>Chat name</h3>
          <p>last seen at..</p>
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
        <p className={`chat__message ${true && 'chat__receiver'}`}>
          <span className="chat__name">Tomi Sarjamo</span>
          Test message
          <span className="chat__timestamp">14:54</span>
        </p>
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
            <input placeholder="Type a message" type="text" value={input} 
            onChange={(event) => setInput(event.target.value)}/>
            <button type="submit" onClick={sendMesssage}>Send</button>
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