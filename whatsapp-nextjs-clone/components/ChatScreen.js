import { useState } from 'react'
import { useCollection } from 'react-firebase-hooks/firestore'
import { Avatar, IconButton } from '@material-ui/core'
import { useRouter } from 'next/router'
import { useAuthState } from 'react-firebase-hooks/auth'
import styled from 'styled-components'
import { auth, db } from '../firebase'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import AttachFileIcon from '@material-ui/icons/AttachFile'
import MicIcon from '@material-ui/icons/Mic'
import Message from './Message'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import firebase from 'firebase'
import getRecipientEmail from '../utils/getRecipientEmail'
import TimeAgo from 'timeago-react'
import { useRef } from 'react'

const ChatScreen = ({ chat, messages }) => {
  const [user] = useAuthState(auth)
  const [input, setInput] = useState('')
  const endOfMessageRef = useRef(null)
  const router = useRouter()
  const [messageSnapshot] = useCollection(
    db.collection('chats').doc(router.query.id).collection('messages').orderBy('timestamp', 'asc')
  )

  const [recipientSnapshot] = useCollection(
    db.collection('users').where('email', '==', getRecipientEmail(chat.users, user))
  )

  const showMessage = () => {
    if (messageSnapshot) {
      console.log('aaaaaa', 'clientside')
      return messageSnapshot.docs.map((message) => (
        <Message
          key={message.id}
          user={message.data().user}
          message={{
            ...message.data(),
            timestamp: message.data().timestamp?.toDate().getTime(),
          }}
        />
      ))
    } else {
      console.log('aaaaaa', 'serverside')
      return JSON.parse(messages).map((message) => (
        <Message key={message.id} user={message.user} message={message} />
      ))
    }
  }

  const scrollToBottom = () => {
    endOfMessageRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  const sendMessage = (e) => {
    e.preventDefault()

    // Update the last seen...
    db.collection('users').doc(user.uid).set(
      {
        lastSeen: firebase.firestore.FieldValue.serverTimestamp(),
      },
      { merge: true }
    )

    db.collection('chats').doc(router.query.id).collection('messages').add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      message: input,
      user: user.email,
      photoURL: user.photoURL,
    })

    setInput('')
    scrollToBottom()
  }

  const recipient = recipientSnapshot?.docs?.[0]?.data()
  const recipientEmail = getRecipientEmail(chat.users, user)

  return (
    <Container>
      <Header>
        {recipient ? <Avatar src={recipient?.photoURL} /> : <Avatar>{recipientEmail[0]}</Avatar>}

        <HeaderInfomation>
          <h3>{recipientEmail}</h3>
          {recipientSnapshot ? (
            <p>
              Last active:{' '}
              {recipient?.lastSeen?.toDate() ? (
                <TimeAgo datetime={recipient?.lastSeen?.toDate()} />
              ) : (
                'unavailable'
              )}
            </p>
          ) : (
            <p>Loading Last active...</p>
          )}
        </HeaderInfomation>

        <HeaderIcons>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </HeaderIcons>
      </Header>

      <MessageContainer>
        {showMessage()}
        <EndOfMessage ref={endOfMessageRef} />
      </MessageContainer>

      <InputContainer>
        <InsertEmoticonIcon />
        <Input value={input} onChange={(e) => setInput(e.target.value)} />
        <button hidden disalbed={!input} type="submit" onClick={sendMessage}>
          Send Message
        </button>
        <MicIcon />
      </InputContainer>
    </Container>
  )
}

export default ChatScreen

const Container = styled.div``

const Header = styled.div`
  position: sticky;
  background-color: white;
  z-index: 100;
  top: 0;
  display: flex;
  padding: 11px;
  align-items: center;
  border-bottom: 1px solid whitesmoke;
`

const HeaderInfomation = styled.div`
  margin-left: 15px;
  flex: 1;

  > h3 {
    margin-bottom: 3px;
  }

  > p {
    font-size: 14px;
    color: gray;
  }
`

const HeaderIcons = styled.div``

const MessageContainer = styled.div`
  padding: 30px;
  background-color: #e5ded8;
  min-height: 90vh;
`

const EndOfMessage = styled.div`
  margin-bottom: 50px;
`

const InputContainer = styled.form`
  display: flex;
  align-items: center;
  padding: 10px;
  position: sticky;
  bottom: 0;
  background-color: white;
  z-index: 100;
`

const Input = styled.input`
  flex: 1;
  outline: 0;
  border: none;
  border-radius: 10px;
  padding: 20px;
  background-color: whitesmoke;
  margin-left: 15px;
  margin-right: 15px;
`
