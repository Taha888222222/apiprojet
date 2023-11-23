import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Usercard from './Usercard'

const UserList = () => {
    const [users, setUsers] = useState([])
    useEffect(() =>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=> setUsers(res.data))
        .catch ((err => console.log(err)))
    },[])
  return (
    <div className='list'>      
        {
            users.map((el) => (<Usercard user={el} key={el.id} />))
        }
    </div>
  )
}

export default UserList