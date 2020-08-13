import React, { useState, useEffect } from 'react'
import './Sidebar.css'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import SidebarOption from './SidebarOption';
import AddIcon from '@material-ui/icons/Add';
import db from './firebase'
import { useStateValue } from './StateProvider'

function Sidebar() {
  const [{ user }] = useStateValue();
  const [channels, setChannels] = useState([])

  useEffect(() => {
    db.collection('rooms').onSnapshot(snapshot => (
      setChannels(
        snapshot.docs.map(doc => ({
          id: doc.id,
          name: doc.data().name
        })))
    ))
  }, [])


  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__info">
          <h3>
            <FiberManualRecordIcon />
            {user?.displayName}
          </h3>
        </div>
        <CreateIcon />
      </div>
      <SidebarOption Icon={InsertCommentIcon} title="Theard" />

      <hr />

      <SidebarOption title="ccc" />
      <hr />
      <SidebarOption Icon={AddIcon} title="Add Channel" addChannelOption />
      <hr />

      {channels.map(channel => (
        <SidebarOption title={channel.name} id={channel.id} />
      ))}
    </div>
  )
}

export default Sidebar
