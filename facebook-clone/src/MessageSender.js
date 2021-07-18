import React, { useState } from 'react';
import { Avatar } from '@material-ui/core';
import './MessageSender.css';

// Material-UI icons
import { Videocam, PhotoLibrary, InsertEmoticon} from '@material-ui/icons'

function MessageSender() {
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();



    setInput("");
    setImageUrl("");
  };

  return (
    <div className="messagesender">
      <div className="messagesender__top">
        <Avatar />
        <form>
          <input
            value={input}
            onChange={(event) => setInput(event.target.value)}
            className="messagesender__input"
            placeholder={`What's on your mind?`}
          />

          <input
            value={imageUrl}
            onChange={(event) => setImageUrl(event.target.value)}
            placeholder={'Image URL (Optional)'}/>

          <button onClick={handleSubmit} type="submit">
            Hidden submit
          </button>
        </form>
      </div>

      <div className="messagesender__bottom">
        <div className="messagesender__option">
          <Videocam style={{ color: 'red' }} />
          <h3>Live video</h3>
        </div>
        <div className="messagesender__option">
          <PhotoLibrary style={{ color: 'green' }} />
          <h3>Photo/Video</h3>
        </div>
        <div className="messagesender__option">
          <InsertEmoticon style={{ color: 'yellow' }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
