import React from 'react'
import {GoogleLogin} from 'react-google-login'

const clientId= "399374585727-ees19nj8oo5rura530nkbrrnhdj2je6m.apps.googleusercontent.com"

const Login = () => {

    const onSucces=(res)=>{
        console.log("Login Success", res )
    }

    const onFailure=(err)=>{
        console.log("Login falied", err )
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
