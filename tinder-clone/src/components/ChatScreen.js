import React, { useState, useEffect } from 'react'
import './ChatScreen.css'
import Avatar from "@material-ui/core/Avatar"

function ChatScreen() {
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState([
    { message: "Hi" },
    { name: "Ada", image: "https://instagram.ftpe7-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p750x750/117393398_4728168117209086_3719168714734179430_n.jpg?_nc_ht=instagram.ftpe7-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=b2yUZtHP-7EAX_vj0Lw&oh=2c721341140619b5487c253c3310b1eb&oe=5F5EF5DA", message: "Hello" }
  ])

  const handleSend = (e) => {
    e.preventDefault();

    setMessages([...messages, { message: input }])
    setInput('');
  }

  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">YOU MATCHED XXX WITH ON 2020</p>
      {messages.map(message => (
        message.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen__image"
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen__message">{message.message}</p>
          </div>
        ) : (
            <div className="chatScreen__message">
              <p className="chatScreen__textUser">{message.message}</p>
            </div>
          )
      ))}


      <form className="chatScreen__input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="chatScreen__inputField"
          type="text"
          placeholder="Type a message..."
        />
        <button onClick={handleSend} type="submit" className="chatScreen__inputButton">SEND</button>
      </form>
    </div>
  )
}

export default ChatScreen
