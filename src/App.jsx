import { useState } from 'react'
import UserContextProvider from './UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

import './App.css'

function App() {
 

  return (
    <UserContextProvider>
      <h1>Welcome</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
