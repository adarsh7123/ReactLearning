import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
   const {user} = useContext(UserContext)

   if(!user)return <h1>Please Login</h1>

  return <div>
      Welcome {user.username}
    </div>
  
}

export default Profile
