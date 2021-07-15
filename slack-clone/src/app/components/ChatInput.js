import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { db } from '../../firebase';
import firebase from 'firebase';

function ChatInput({ channelName, channelId, chatRef }) {
    const [input, setInput] = useState('');
    // const inputRef = useRef(null);

    const sendMessage = event => {
        event.preventDefault(); // Prevents refresh

        if (!channelId) {
            return false;
        }

        db.collection('rooms').doc(channelId).collection('messages').add({
            message: input, // (useRef) message: input
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user: 'Tomi Sarjamo',
            userImage: 'https://media-exp1.licdn.com/dms/image/C4D03AQFv9YnH3mXhPw/profile-displayphoto-shrink_800_800/0/1604404700829?e=1631750400&v=beta&t=N45MLw7MPdWioCSKB2x9OlnEPbELawl9dFZEZ5bWzMU'
        });
        // inputRef.current.value = ''; (useRef)
        chatRef.current.scrollIntoView({
            behavior: 'smooth',
        });

        setInput('');
    };

    return <ChatInputContainer>
        <form>
            {/* <input ref={inputRef} placeholder={'Message #ROOM'}/> */}
            <input value={input} onChange={event => setInput(event.target.value)} placeholder={`Message #${channelName}`}/>
            <Button hidden type='submit' onClick={sendMessage} >
                SEND
            </Button>
        </form>
       </ChatInputContainer>
}

export default ChatInput;

const ChatInputContainer = styled.div`
  border-radius: 20px;

  > form {
    position: relative;
    display: flex;
    justify-content: center;
  }

  > form > input {
    position: fixed;
    bottom: 30px;
    width: 60%;
    border: 1px solid gray;
    padding: 20px;
    outline: none;
  }

  > form > Button {
    display: none !important;
  }
`;