import React, { useState } from 'react'
import './Login.css'
import { auth } from './firebase'
import { useDispatch } from 'react-redux'
import { login } from './features/userSlice'

function Login() {

    const [name , setName] =useState('')
    const [password , setPassword] =useState('')
    const [email, setEmail] = useState('')
    const [pfp, setPfp] = useState('')
    const dispatch = useDispatch()
    
    const loginToApp =(e) => {
        e.preventDefault()
        auth.signInWithEmailAndPassword(email, password).then(userAuth => {
            dispatch(login({email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                photoURL:userAuth.user.photoURL}))
        }).catch(error => alert(error))
    }
    const register = () => {
        auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
            userAuth.user.updateProfile({
                displayName: name,
                photoURL:pfp
            }).then(() => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: name,
                    photoURL:pfp
                }))
            })
        }).catch((error)=> alert(error))
    }
  return (
      <div className='login'>
          <div className='logo'><h1>Linked</h1> <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="" /></div>

          <form >
              <input type="text"  value={name} onChange={e => setName(e.target.value)} placeholder='Full Name (required if registering)'/>
              <input type="text"  value={pfp} onChange={e => setPfp(e.target.value)} placeholder='Profile pic URL (optional)'/>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder='Email' />
              <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder='Password' />
              <button type='submit' onClick={loginToApp}>Sign In</button>
          </form>

          <p>Not a member?   <span className='login-register' onClick={register}>Register Now</span></p>
    </div>
  )
}

export default Login