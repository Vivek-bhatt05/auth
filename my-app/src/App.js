import { gapi } from 'gapi-script';
import { useEffect } from 'react';
import './App.css';
import Login from './components/login';
import Logout from './components/logout';

const clientId= "804950120639-0176109v4dhiji5qtr1hosi00oml8d5g.apps.googleusercontent.com"

function App() {

  useEffect(()=>{
    function start (){
      gapi.client.init({
        clientId : clientId,
        scope: ''
      })
    }
    gapi.load('client:auth2',start) 

  },[])


  return (
    <div className="App">
      <Login />
      <Logout />

    </div>
  );
}

export default App;
