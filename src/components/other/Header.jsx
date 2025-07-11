import React, {useState} from 'react'
import { setLocalStorage } from '../../utils/localStorage'

const Header = (props) => {

  // const [username, setUsername] = useState()
  const logOutUser=()=>{
    localStorage.setItem('loggedInUser','')
    // this below line will change user on clicking log out and will redirect to login page
    props.changeUser('')  
    // console.log(props.changeUser);
    
    // window.location.reload()
  }
  return (
    <div className='flex items-end justify-between '>
      <h1 className='text-2xl font-medium'>Hello <br /><span className='text-3xl font-semibold'>{props?.firstName}👋</span></h1>
      <button onClick={logOutUser} className='bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-sm cursor-pointer'>Log Out</button>
    </div>
  )
}

export default Header
