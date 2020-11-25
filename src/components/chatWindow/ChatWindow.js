import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './chatWindow.css';

import MessageItem from '../messageItem/MessageItem';

import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import SendIcon from '@material-ui/icons/Send';
import MicIcon from '@material-ui/icons/Mic';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

const ChatWindow = ({ name, img, user }) => {

    const [text, setText] = useState('');
    const [sessionId, setSessionId] = useState('');
    const [listening, setListening] = useState(false);
    const [listMessage, setListMessage] = useState([]);
    
    // consumindo a API
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER_API_NODE}/session`)
        .then(function (response) {
            setSessionId(response.data.session_id);
        })
        .catch(function (error) {
            console.log(error);
        });
    }, []);

    const handleClickMic = () => { 
        setListening(true);
        alert('Ainda não implementado');
    }
    const handleStopClickMic = () => { 
        setListening(false);
    }
    const handleSendMessage = () => { 
        setListMessage(listMessage => [...listMessage, {author: 'user', message: text}]);
        
        axios.get(`${process.env.REACT_APP_SERVER_API_NODE}/message/${sessionId}/text/${text}`)
        .then(function (response) {
            setListMessage(listMessage => [...listMessage, {author: 1234, message: response.data.output.generic[0].text}])
        })
        .catch(function (error) {
            console.log(error);
        });

        console.log(listMessage)
        setText('');
    } 

    return (
        <div className="chatWindow">
            <div className="chatWindowHeader">
                <div className="headerLeft">
                    <img src={img} alt="" />
                    <div className="infoTop">
                        <h1>{name}</h1>
                        <p>online</p>
                    </div>
                </div>
                <div className="headerRight">
                    <SearchIcon style={{ color: '#b1b3b5' }} onClick={() => alert('Ainda não esta disponível')} />
                    <MoreVertIcon style={{ color: '#b1b3b5' }} onClick={() => alert('Ainda não esta disponível')} />
                </div>
            </div>
            <div className="chatWindowBody">
                {listMessage.map((item, key) => <MessageItem key={key} data={item} user={user}/>)}
            </div>
            <div className="chatWindowFooter">
                <div className="footerZoneOne">
                    <InsertEmoticonIcon style={{ color: '#b1b3b5' }} onClick={() => alert('Ainda não esta disponível')} />
                    <AttachFileIcon style={{ color: '#b1b3b5' }} onClick={() => alert('Ainda não esta disponível')} />
                </div>
                <div className="footerZoneTwo">
                    <input type="text" name="text" 
                        placeholder="Digite uma mensagem" 
                        value={text} 
                        onChange={e => setText(e.target.value)}
                        autoComplete="off"  
                        onKeyPress={ (event) => {
                                if (event.key === "Enter") handleSendMessage();     
                        }}/>
                </div>
                <div className="footerZoneThree">
                    {text === '' ?
                        <> <MicIcon
                            style={{ color: listening ? '#126ECE' : '#b1b3b5' }}
                            onClick={handleClickMic} />
                            
                            {listening === true && <HighlightOffIcon 
                            style={{color: '#cb3837'}}
                            onClick={handleStopClickMic}/>} </> :
                        
                        <SendIcon
                            style={{ color: '#b1b3b5' }}
                            onClick={handleSendMessage} />
                    }
                </div>
            </div>
        </div>
    )
}


export default ChatWindow;