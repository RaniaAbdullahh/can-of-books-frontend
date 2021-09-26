import React from 'react'
import { withAuth0 ,useAuth0 } from '@auth0/auth0-react'

function Profile() {
  const { user, isAuthenticated } = useAuth0()

  return (
    <>{ isAuthenticated &&
         <div>
        <img src={user.picture} alt={user.name} />
        <h2>Hello {user.name}</h2>
        <p>{user.name}</p>
      </div>
    }
    </>
  )
}

export default withAuth0(Profile) ;
