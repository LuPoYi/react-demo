import React from 'react'
import './Chats.css'
import Chat from './Chat'

function Chats() {
  return (
    <div className="chats">
      <Chat
        name="Bob"
        message="Whats up"
        timestamp="40 seconds ago"
        profilePic="https://api.adorable.io/avatars/285/abott@adorable.png"
      />
      <Chat
        name="Ada"
        message="I dont know that..."
        timestamp="3 days ago"
        profilePic="https://api.adorable.io/avatars/285/2432432423.png"
      />
      <Chat
        name="Sara"
        message="GOGOOGOGOGOOGO"
        timestamp="3 days ago"
      />
    </div>
  )
}

export default Chats
