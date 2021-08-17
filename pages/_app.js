import { useEffect, useState } from 'react'
import '../assets/app.scss'
import UserContext from '../context/UserContext'

function myApp({ Component, pageProps }) {
  const[user,setUser] = useState(null);
  const[token,setToken] = useState(null);
  useEffect(()=>{
    setUser(localStorage.getItem('user'));
    setToken(localStorage.getItem('token'));
  },[])
  return (
    <UserContext.Provider value={{
      user,
      setUser,
      token,
      setToken
    }}>
      <Component {...pageProps} />
    </UserContext.Provider>
  )
}

export default myApp