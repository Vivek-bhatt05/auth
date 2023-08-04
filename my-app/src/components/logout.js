import React from 'react'
import { GoogleLogout } from 'react-google-login'

const clientId= "804950120639-0176109v4dhiji5qtr1hosi00oml8d5g.apps.googleusercontent.com"

const Logout = () => {

    const onSuccess=()=>{
        console.log("Log out successfull")
    }
  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText={'Logout'}
        onLogoutSuccess={onSuccess}
        />
    </div>
  )
}

export default Logout
