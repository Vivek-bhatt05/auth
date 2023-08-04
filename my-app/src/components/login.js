import React from 'react'
import {GoogleLogin} from 'react-google-login'

const clientId= "804950120639-0176109v4dhiji5qtr1hosi00oml8d5g.apps.googleusercontent.com"

const Login = () => {

    const onSucces=(res)=>{
        console.log("Login Success", res )
    }

    const onFailure=(res)=>{
        console.log("Login Success", res )
    }

  return (
    <div id='signinbutton'>
        <GoogleLogin
        clientId={clientId}
        buttonText='Login'
        onSuccess={onSucces}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
        />
    </div>
  )
}

export default Login
