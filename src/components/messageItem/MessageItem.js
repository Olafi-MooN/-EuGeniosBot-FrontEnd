import React from 'react';
import './messageItem.css';

const MessageItem = ({key, data, user}) => {
    return(
        <div className="messageLine"
        style={{justifyContent: data.author === user.id ? "flex-end" : "flex-start" }}>
            <div className="messageItem">
                <div className="messageText">
                    {data.message}
                </div>
                <div className="messageDate">
                    19:00
                </div>
            </div>
        </div>
    )
}

export default MessageItem;
