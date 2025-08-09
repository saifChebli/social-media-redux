import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { fetchUsersList } from '../redux/actions'
import { useEffect } from 'react'

const FriendsList = () => {
  const dispatch = useDispatch()
  const {users, loading, error} = useSelector(state => state)


  useEffect(()=>{
    dispatch(fetchUsersList())
  },[])

  if(loading) return <p>Loading...</p>
  if (error) return <p>{error}</p>
  
  return (
    <div>
      <h1>FRIENDS LIST</h1>
      {users.map(user => (
        <p>{user.name}</p>
      ))}
    </div>
  )
}

export default FriendsList