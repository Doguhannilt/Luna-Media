import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setState } from '../features/actions/isSignuporLogin'
import { useToast } from '@chakra-ui/react'
import { Navigate } from 'react-router-dom'


const LoginCard = () => {

  const dispatch = useDispatch();
  const handleToggleClick = () => {
    dispatch(setState());
    
  };

const [input, setinput] = useState({
  username: "",
  password: ""
})
const toast = useToast()
const logged = async () => {
  
  try {
    const res = await fetch("/api/users/login", {
      method:'POST',
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify(input)
    })
    const responseData = await res.json();

    if (res.ok) {
      toast({
        title: "Welcome to Luna Media!",
        description: "Loading",
        status: "success",
        duration: 9000,
        isClosable: true,
      },
      window.location.href = "/")// Update this route as needed);

      // Redirect to the appropriate route for a successful login
      
      
    
    } else {
      toast({
        title: "Please try again and make sure that you fill up the whole sections",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  } catch (error) {
    console.log(error)
  }
}

  return (
    <div>
      <section className="bg-inherit ">
  <div className="flex flex-col items-center md:h-screen mx-auto lg:py-0 pl-10">
      <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
        
        Luna Media
      </a>
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Your account should be...
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Username</label>
                      <input 
                      type="text"
                      name="email"
                      id="email"
                      className="bg-gray-50
                      border
                      border-gray-300
                      text-gray-900
                      sm:text-sm
                      rounded-lg
                      focus:ring-primary-600
                      focus:border-primary-600
                      block
                      w-full
                      p-2.5
                      dark:bg-gray-700
                      dark:border-gray-600
                      dark:placeholder-gray-400
                      dark:text-white
                      dark:focus:ring-blue-500
                      dark:focus:border-blue-500"
                      placeholder="doguhan"
                      required={true}
                      value =  {input.username}
                      onChange= {(e) => setinput((input) => ({...input, username:e.target.value}))}/>
                  </div>
                  <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className="bg-gray-50
                      border
                      border-gray-300
                      text-gray-900
                      sm:text-sm
                      rounded-lg
                      focus:ring-primary-600
                      focus:border-primary-600
                      block
                      w-full
                      p-2.5
                      dark:bg-gray-700
                      dark:border-gray-600
                      dark:placeholder-gray-400
                      dark:text-white
                      dark:focus:ring-blue-500
                      dark:focus:border-blue-500"
                      required={true}
                      value =  {input.password}
                      onChange= {(e) => setinput((input) => ({...input, password:e.target.value}))}/>
                 </div>
                  <button type="button" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" onClick={logged}>Log in</button>
                  Don't you have any account <a href='#' className = "font-medium text-primary-600 hover:underline dark:text-primary-500 pl-2" onClick={handleToggleClick}>Sign Up</a>


              </form>
          </div>
      </div>
  </div>
</section>
    </div>
  )
}

export default LoginCard
