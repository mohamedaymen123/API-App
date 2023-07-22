import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom'

const Info = ({users}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
console.log(user)
    // console.log(users)
    const {id}=useParams();
    console.log(id)
    
    useEffect(() => {
    const getUser=async()=>{
        const res= await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        setUser(res.data)
        setLoading(false)
    }
    getUser()
    
    }, [id])
    
  return (
    <div>
        {    loading?
        <>
            
      <Spinner animation="border" variant="primary" />
      <Spinner animation="border" variant="secondary" />
      <Spinner animation="border" variant="success" />
      <Spinner animation="border" variant="danger" />
      <Spinner animation="border" variant="warning" />
      <Spinner animation="border" variant="info" />
      <Spinner animation="border" variant="light" />
      <Spinner animation="border" variant="dark" />
      <Spinner animation="grow" variant="primary" />
      <Spinner animation="grow" variant="secondary" />
      <Spinner animation="grow" variant="success" />
      <Spinner animation="grow" variant="danger" />
      <Spinner animation="grow" variant="warning" />
      <Spinner animation="grow" variant="info" />
      <Spinner animation="grow" variant="light" />
      <Spinner animation="grow" variant="dark" />
      <h1>Loading ...</h1>
    </>
        :user&&
            <>
            <h1>{user.name}</h1>
        {user.email}
            </>
        }
    </div>
  )
}

export default Info