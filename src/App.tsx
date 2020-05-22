import React, {useState} from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'


import LoginComponent from './components/LoginComponent'
import HomeComponent from './components/HomeComponent'
import navbarComponent from './components/NavbarComponent'


import { User } from './models/user'
import { Reimbursement } from './models/reimb'
import { AppBar, Toolbar, Typography} from '@material-ui/core'

function App() {
  //@ts-ignore
const [authUser, setAuthUser] = useState(null )
const [usersReimbs, setUserReimb]  = useState(new Reimbursement(0,0,new Date(),new Date(),'',0,0,0,0))

return (
   <>
    <Router>
      <AppBar color = "primary" position = "static">

      </AppBar>

      <Switch>
        <Route path = "/login" render={()=><LoginComponent authUser={authUser} setAuthUser={setAuthUser}/>}/>
        <Route path = "/home" render={()=><HomeComponent authUser={authUser} />}/> 
      </Switch>

    </Router>
   
   </>
  );
}

export default App;
