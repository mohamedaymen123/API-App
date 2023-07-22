import React from 'react'
import { Link } from 'react-router-dom'

const UserCard = ({user,loading}) => {
  return (
    <div>
        {
            loading?<h1>Loading ...</h1>:
            <>
            <h1>{user.name}</h1>
        <h3>{user.email}</h3>
        <h5>{user.id}</h5>

<Link to={`/info/${user.id}`}>
<button>Info</button>
</Link>
        <hr />
            </>
        }
    </div>
  )
}

export default UserCard