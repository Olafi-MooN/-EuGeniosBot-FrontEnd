import React, { useState, useEffect} from 'react';
import './App.css';

import ChatListItem from './components/chatListItem/ChatListItem';
import ChatIntro from './components/chatIntro/ChatIntro';
import ChatWindow from './components/chatWindow/ChatWindow';

import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';

function App() {

  const [chatList, setChatList] = useState([
    {chatId: 1, title: 'EuGêniosBot', avatar: 'https://www.bounteous.com/sites/default/files/styles/default/public/insights/2018-10/previews/Understanding%20Bot%20and%20Spider%20Filtering%20from%20Google%20Analytics.jpg?itok=hdwmPagb'},
  ]);
  const [chatActive, setChatActive] = useState({});
  const [user, setUser] = useState(
    {
      id: 'user',
      avatar: 'https://avatars0.githubusercontent.com/u/54686408?s=400&u=0c058e3ef358e53838a2259b0f000f0982caca14&v=4',
      name: 'Admin'
    });

  return (
    <div className="container">

      <div className="ctn-left">
        <div className="ctn-left-top">
          <img src={user.avatar} alt="profile" />
          <div className="icons">
            <div className="btn-icons">
              <DonutLargeIcon style={{ color: '#b1b3b5' }} onClick={() => alert('Ainda não esta disponível')}/>
            </div>
            <div className="btn-icons">
              <ChatIcon style={{ color: '#b1b3b5' }} onClick={() => alert('Ainda não esta disponível')}/>
            </div>
            <div className="btn-icons" style={{ color: '#b1b3b5' }}>
              <MoreVertIcon onClick={() => alert('Ainda não esta disponível')}/>
            </div>
          </div>
        </div>
        <div className="search">
          <div className="search-bar">
           <SearchIcon style={{ color: '#b1b3b5' }} />
           <input id="search" type="search" placeholder="Procurar ou começar uma nova conversa" autoComplete="off" />
          </div>
        </div>
        <div className="chatList">
          {chatList.map((item, key) => {
            return(
              <ChatListItem 
              data={item}
              key={key}
              active={chatActive.chatId === chatList[key].chatId}
              onClick={() => setChatActive(chatList[key])}/> 
            )
          }
          )}
        </div>
      </div>

      <div className="ctn-right">
        {chatActive.chatId !== undefined &&  <ChatWindow name={chatActive.title} img={chatActive.avatar} user={user}/>}
        {chatActive.chatId === undefined &&  <ChatIntro/>}
      </div>

    </div>
  );
}

export default App;
