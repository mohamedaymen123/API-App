import { useEffect, useState } from 'react'

import './App.css'
import UserList from './components/UserList'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Info from './components/Info'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  const [list, setList] = useState(null)
  const [loading, setLoading] = useState(true)
  // console.log(list)
// useEffect(() => {
// const getUsers=()=>{
//   fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(data=>setList(data)).catch(err=>console.log(err))
// }
// getUsers()
// }, [])


const getUsers=async()=>{
  try {
   const res=await axios.get("https://jsonplaceholder.typicode.com/users") 
  //  console.log(res)
   setList(res.data)
   setLoading(false)
  } catch (error) {
    console.log(error)
    alert("get error")
  }
}
useEffect(() => {
  getUsers()

}, [])

  return (
    <>
    <Router>
      <Routes>
        <Route path='/'   element={
  <UserList users={list} loading={loading}  />

        } />
        <Route  path="/info/:id" element={<Info  users={list} loading={loading} />} />
      </Routes>
    </Router>
    </>
  )
}

export default App