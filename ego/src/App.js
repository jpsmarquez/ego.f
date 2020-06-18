import React,{useState, useEffect} from 'react';
import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom';
import * as firebase from "firebase/app";
import {Aplicacion} from "./config/firebaseconfig";
import Login from './views/Login';
import HomeA from './views/HomeAdmin';
import HomeE from './views/HomeE';
import Employees from './views/Employees';
import Employee from './views/Employee';
import Inversions from './views/Inversions';
import Inversion from './views/Inversion';
import InversionsEmp from './views/InversionsEmp';
import InversionEmployee from './views/InversionEmployee';
import Profile from './views/Profile';
import ProfileEmp from './views/ProfileEmp';
import FPass from './views/FPass';
import NewInversion from './views/createInversion';
import Register from './views/register';


export default function App() {
  const [logged, setlogged]=useState(null)

  const logout=()=>{
  firebase.auth().signOut()
  setlogged(null)
  };

  useEffect(()=>{
        firebase.auth().onAuthStateChanged(function(user) {
          console.log(user)
          if (user) {
            firebase.database().ref("/usuario/"+user.uid).on("value",snap=> {
             console.log(snap);
            setlogged(snap.val().tipo);
            
            })
          } else {
            setlogged(null) 
          }
        });
      });

    return (
      <BrowserRouter> 
        <Switch>
        <Route exact path="/" render={(props)=>(logged?<Redirect to="/Home" />:<Login {...props} /> )}/>
      
        <Route exact path="/Home"render={(props)=>(logged?
          logged==="A" ?
            <HomeA {...props}  logout={logout} />
            : <HomeE {...props}  logout={logout} />
        :<Login {...props}/> )} />

        <Route exact path="/Inversions"render={(props)=>(logged?
          logged==="A" ?
            <Inversions {...props}  logout={logout} />
            : <InversionsEmp {...props}  logout={logout} />
        :<Login {...props}/> )} />

        <Route exact path="/Inversion"render={(props)=>(logged?
          logged==="A" ?
            <Inversion {...props}  logout={logout} />
            : <InversionEmployee {...props}  logout={logout} />
        :<Login {...props}/> )} />

        <Route exact path="/Profile"render={(props)=>(logged?
          logged==="A" ?
            <Profile {...props}  logout={logout} />
            : <ProfileEmp {...props}  logout={logout} />
        :<Login {...props}/> )} />

        <Route exact path="/Employees"render={(props)=>(logged?
          logged==="A" ?
            <Employees {...props}  logout={logout} />
            :  null 
        :<Login {...props}/> )} />

        <Route exact path="/Employee"render={(props)=>(logged?
          logged==="A" ?
            <Employee {...props}  logout={logout} />
            :  null 
        :<Login {...props}/> )} />

        <Route exact path="/NewInversion"render={(props)=>(logged?
          logged==="A" ?
            <NewInversion {...props}  logout={logout} />
            :  null 
        :<Login {...props}/> )} />

        <Route exact path='/FPass' component={FPass}/>
        <Route exact path='/Register' component={Register}/>


        </Switch>
      </BrowserRouter>
    );
};
