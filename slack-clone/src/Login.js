import React from 'react'
import { Button } from '@material-ui/core'
import { auth, provider } from './firebase'
import { useStateValue } from './StateProvider'
import './Login.css'
import { actionType } from './reducer'

function Login() {
  const [state, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then(result => {
        console.log(result);
        dispatch({
          type: actionType.SET_USER,
          user: result.user
        })
      })
      .catch(error => { alert(error.message) })
  }


  return (
    <div className="login">
      <div class="login__container">
        <img
          src="https://emergent-enterprise.com/wp-content/uploads/2019/01/slacklogo-620x350.png"
          alt=""
        />
        <h1>
          Sign in Bob slack
                </h1>
        <Button onClick={signIn}>Sign in with google</Button>
      </div>
    </div>
  )
}

export default Login
