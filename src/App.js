import React from 'react';

import Navbar from './components/Navbar';
import './index.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import Profile from './components/Profile';
import { Route ,Routes} from "react-router-dom";
import {AuthProvider} from "./components/contexts/AuthContext";
import {ProtectedRoute, RedirectRoute} from "./components/contexts/ProtectedRoute";
import AddTask from './components/AddTask';
import AllTask from './components/AllTask';

function App() {
  return (<>
  
<AuthProvider>
    <Navbar/>
    
    <Routes>
      <Route  path='/' element = {<Home/>}/>
<Route path = "/login" element ={<RedirectRoute>
<Login/>
</RedirectRoute>
} />

<Route path = "/signup" element = {<RedirectRoute>
  <Signup/>
</RedirectRoute>
  } 
   />

<Route path='/profile' element = {

<ProtectedRoute>
  <Profile/>
</ProtectedRoute>

  }>
     <Route path='addTask' element = {<AddTask/>}/>
     <Route path='tasks' element = {<AllTask/>}/>
    </Route> 
 
  

    </Routes>

    </AuthProvider>
    </>
  );
}

export default App;
