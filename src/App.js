import React, { useEffect, useState } from 'react';
import './styles/App.css';
import { BrowserRouter as Router} from "react-router-dom";
import Navbar from './components/UI/Navbar/Navbar';
import AppRouter from './components/AppRouter';
import { AuthContext } from './context';

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setLoading] = useState(true) //1

  useEffect(() => {
     if(localStorage.getItem('auth')) {
        setIsAuth(true)
     }
     setLoading(false)  //2
  }, [])

      return (
        <AuthContext.Provider value={{
           isAuth,
           setIsAuth,
           isLoading //3
        }}>
        <Router>
          <Navbar/>
             
          <AppRouter/>
        </Router>    
        </AuthContext.Provider>   
      )
 
}

export default App;
