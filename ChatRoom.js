import React, { useState, useEffect } from 'react';
import './ChatRoom.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { database } from '../firebase';
import { ref, push, onValue } from 'firebase/database';

const ChatRoom = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  // ✅ 현재 사용자 이름 (테스트용 임시 이름, 실제로는 로그인 정보로 받아와야 함)
  const currentUser = '나';

  const toggleMenu = () => {
    setShowMenu(prev => !prev);
  };

  // ✅ 메시지 전송
  const sendMessage = () => {
    if (message.trim() === '') return;
    push(ref(database, 'messages'), {
      text: message,
      sender: currentUser,
      timestamp: Date.now()
    });
    setMessage('');
  };

  // ✅ 실시간 메시지 수신
  useEffect(() => {
    const messageRef = ref(database, 'messages');
    onValue(messageRef, (snapshot) => {
      const data = snapshot.val();
      const messageList = data ? Object.values(data) : [];
      setMessages(messageList);
    });
  }, []);

  return (
    <div className="chatroom-container">
      <button className="back" onClick={() => window.history.back()}>←</button>

      <button className="ham" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </button>

      {showMenu && (
        <div className="hide3">
          <button className="invite">대화상대 초대하기</button>
          <button className="getout">채팅방 나가기</button>
        </div>
      )}

      {/* ✅ 메시지 출력 */}
      <div className="message-box">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`message ${msg.sender === currentUser ? 'my-message' : 'other-message'}`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* ✅ 하단 input */}
      <div className="input-fixed">
        <input
          type="text"
          className="text"
          placeholder="메시지 보내기"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
        />
      </div>
    </div>
  );
};


export default ChatRoom;
