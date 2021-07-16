import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { auth, db } from '../../firebase';
import firebase from 'firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

function ChatInput({ channelName, channelId, chatRef }) {
    const [input, setInput] = useState(''); // const inputRef = useRef(null);
    const [user] = useAuthState(auth);

    const sendMessage = (event) => {
        event.preventDefault(); // Prevents refresh

        if (!channelId) {
            return false;
        }

        db.collection('rooms').doc(channelId).collection('messages').add({
            message: input, // (useRef) message: input
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user: user.displayName,
            userImage: user.photoURL
        });

        chatRef.current.scrollIntoView({
            behavior: 'smooth',
        });

        setInput(''); // inputRef.current.value = ''; (useRef)
    };

    return <ChatInputContainer>
        <form>
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