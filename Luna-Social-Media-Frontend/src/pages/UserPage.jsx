import React from 'react'
import UserHeader from '../components/UserHeader'
import UserPost from '../components/UserPost'
import { Provider } from 'react-redux'
import { store } from '../app/store'



const UserPage = () => {
  console.log("Userpage is created")
  return (
    <>
    <UserHeader />
    <UserPost/>
    </>
  )
}

export default UserPage
