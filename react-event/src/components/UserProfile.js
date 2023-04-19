import React from 'react'
import { users } from '../Users'
import '../style/profile.css'

const UserProfile = () => {
    const userDetails = users.map((user, index) => {

        return (
        
        <div className='container'>
          <div className='profile-box'>
            <li key={user.id}>
      
              <img src={user.picture} alt="display"/>
              <p>{user.id} {user.title}.{user.firstName} {user.lastName}</p>
            </li>
          </div>
          </div>
      
          
          
          
        )
      })
      
      return(
        <div>
          
            {userDetails}
          
        </div>
      )
      
      }
    
  


export default UserProfile