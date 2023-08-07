import React, { useEffect, useState } from 'react'
import './Feed.css'
import CreateIcon from '@mui/icons-material/Create'
import ImageIcon from '@mui/icons-material/Image'
import SubscriptionsIcon from '@mui/icons-material/Subscriptions'
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay'
import EventNoteIcon from '@mui/icons-material/EventNote'
import InputOption from './InputOption'
import Post from './Post'
import { db } from './firebase'
import firebase from 'firebase'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import FlipMove from 'react-flip-move'


  
 

function Feed() {
    const user = useSelector(selectUser)

     const[input , setInput]=useState('')
    const [posts, setPosts] = useState([])
    
    useEffect(() => {
        db.collection('posts').orderBy('timestamp','desc').onSnapshot(snapshot => (setPosts(snapshot.docs.map(doc => (
            {
                id: doc.id,
                data:doc.data()
             }
         )))))
    },[])
    
    const sendPost = (e) => {
        e.preventDefault()
        db.collection('posts').add({
            name: user.displayName,
            description: user.email,
            message: input,
            photoURL: user.photoURL,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        
        setInput('')
    }


  return (
      <div className='feed'>
          <div className="feed-inputContainer">
              <div className="feed-input">
                  <CreateIcon />
                  <form>
                      <input type='text' value={input} onChange={e => setInput(e.target.value)}/>
                      <button onClick={sendPost} type='submit'>Send</button>
                  </form>
              </div>
              <div className='feed-inputOptions'>
                  <InputOption title='Photo' Icon={ImageIcon}  color='#70B5F9'/>
                  <InputOption title='Video' Icon={SubscriptionsIcon}  color='#E7A33E'/>
                  <InputOption title='Event' Icon={EventNoteIcon}  color='#C0CBCD'/>
                  <InputOption title='Write Article' Icon={CalendarViewDayIcon}  color='#7FC15E'/>
              </div>
          </div>
          <FlipMove>
          {posts.map(({id,data:{name,description,message,photoURL}}) => (
              <Post
                  key={id}
                  name={name}
                  description={description}
                  message={message}
                  photoURl={photoURL}
              />
          )
          )}

           </FlipMove>
    </div>
  )
}

export default Feed