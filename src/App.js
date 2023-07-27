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
import UserPage from './components/UserPage';
import { SearchValueProvider } from './components/contexts/SearchValueContext';

function App() {



  return (<>
  
<AuthProvider>
    <Navbar/>
    
<SearchValueProvider>
    <Routes>
      <Route  path='/' element = {<Home/>}/>

      <Route path='/:id' element = {
      <ProtectedRoute>
<UserPage/>
      </ProtectedRoute>
      }/>
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
  
    </Route> 
 
  

    </Routes>



</SearchValueProvider>


    </AuthProvider>
    </>
  );
}

export default App;
