import React, { useEffect, useState } from 'react'
import "./Chat.css"
import { useParams } from "react-router-dom"
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined"
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined"
import db from "./firebase";
import Message from "./Message";
import ChatInput from "./ChatInput";

function Chat() {
  const { roomId } = useParams();
  const [roomDeatais, setRoomDetails] = useState(null)
  const [roomMessages, setRoomMessages] = useState([])

  useEffect(() => {
    if (roomId) {
      db.collection('rooms').doc(roomId).onSnapshot(snapshot =>
        setRoomDetails(snapshot.data())
      )

      db.collection('rooms').doc(roomId).collection('messages').orderBy('timestamp', 'asc').onSnapshot(
        snapshot => setRoomMessages(snapshot.docs.map(doc => doc.data())
        )
      )

    }
  }, [roomId])
  //console.log(roomDeatais);
  console.log(roomMessages);


  return (
    <div className="chat">
      <div className="chat__header">
        <div class="chat__headerLeft">
          <h4 className="chat__channelName">
            <strong>#{roomDeatais?.name}</strong>
            <StarBorderOutlinedIcon />
          </h4>
        </div>

        <div class="chat__headerRight">
          <p><InfoOutlinedIcon /> Details</p>
        </div>
      </div>

      <div class="chat__messages">
        {roomMessages.map(({ message, timestamp, user, userImage }) => (
          <Message
            message={message}
            timestamp={timestamp}
            user={user}
            userImage={userImage}
          />
        ))}
      </div>

      <ChatInput channelName={roomDeatais?.name} channelId={roomId} />
    </div>
  )
}

export default Chat
