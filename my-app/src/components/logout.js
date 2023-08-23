// import React from 'react'
// import { GoogleLogout } from 'react-google-login'

// const clientId= "804950120639-0176109v4dhiji5qtr1hosi00oml8d5g.apps.googleusercontent.com"

// const Logout = () => {

//     const onSuccess=()=>{
//         console.log("Log out successfull")
//     }
//   return (
//     <div>
//       <GoogleLogout
//         clientId={clientId}
//         buttonText={'Logout'}
//         onLogoutSuccess={onSuccess}
//         />
//     </div>
//   )
// }

// export default Logout

import React from 'react';

// const clientId = "804950120639-0176109v4dhiji5qtr1hosi00oml8d5g.apps.googleusercontent.com";

const Logout = () => {
  const onSuccess = () => {
    console.log("Logout successful");
  };

  const handleLogout = () => {
    const auth2 = window.gapi.auth2.getAuthInstance();
    if (auth2 != null) {
      auth2.signOut().then(onSuccess);
    }
  };

  return (
    <div style={{marginTop:"30px"}}>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
