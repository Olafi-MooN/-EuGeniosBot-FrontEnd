import React from 'react';
import './ChatListItem.css';
import '../../App.css'

const ChatListItem = ({onClick, active, data}) => {
    return (
        <div 
            className={`list ${active? 'active':''}`}
            onClick={onClick}
            
        > 
            <div className="imagem">
                <img src={data.avatar} alt="profile"/>
            </div>
            <div className="center">
                <div className="name-user">
                    <h1>{data.title}</h1>
                </div>
                <div className="message">
                    <p>Estou te mandando uma mensagem Estou te mandando uma mensagem Estou te mandando uma mensagem</p>
                </div>
            </div>
            <div className="hour">12:00</div>
        </div>
    )
}

export default ChatListItem;