import React, { useEffect, useState } from 'react';
import { Avatar } from '@material-ui/core';
import './SidebarChat.css'

function SidebarChat({ addNewChat }) {
    const [random, setRandom] = useState("");

    useEffect(() => {
        setRandom(Math.floor(Math.random() * 1000000));
    }, []);

    const createChat = () => {
        const roomName = prompt("Please enter name for chat");
        if (roomName) {
            // enter a room n database
        }
    }

    return !addNewChat ? (
        <div className="sidebarchat">
            <Avatar src={`https://avatars.dicebear.com/api/human/${random}.svg`} />
            <div className="sidebarchat__info">
                <h2>Room name</h2>
                <p>last message</p>
            </div>
        </div>
    ) : (
        <div className="sidebarchat__newchat" onClick={createChat}>
            <h2>Add new Chat</h2>
        </div>
    )
};

export default SidebarChat;
