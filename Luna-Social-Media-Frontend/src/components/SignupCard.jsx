import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setState } from '../features/actions/isSignuporLogin'
import { useToast } from '@chakra-ui/react'
import LoginCard from './LoginCard'



const SignupCard = () => {
  const dispatch = useDispatch();
  const handleToggleClick = () => {
    dispatch(setState());
  };

const [input, setinput] = useState({
  name: "",
  username: "",
  email: "",
  password: "",
})
const toast = useToast()

const handleSignUp = async () => {
  try {
    const res = await fetch("/api/users/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(input),
    });

    if (res.ok) {
      toast({
        title: "Account created.",
        description: "We've created your account for you.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Please try again and make sure that you fill up the whole sections",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
    if(res.ok){
      window.location.href = "/auth"; // Login section
    }
  } catch (error) {
    console.log(error);
  }
};

  return (
    <div>
      <section className="bg-inherit" >
  <div className="flex flex-col items-center  px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
        
        Luna Media
      </a>
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Create and account
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input 
                      type="email" 
                      name="email" 
                      id="email" 
                      className="
                      bg-gray-50 border 
                      border-gray-300
                      text-gray-900 
                      sm:text-sm rounded-lg 
                      focus:ring-primary-600 
                      focus:border-primary-600 
                      block w-full p-2.5 
                      dark:bg-gray-700 
                      dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                      placeholder="name@company.com" 
                      required=""
                      onChange={(e) => setinput({...input, email:e.target.value})}
                      value={input.email}/>
                  </div>
                  <div>
                      <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                      <input 
                      type="text" 
                      name="name" 
                      id="name" 
                      className="
                      bg-gray-50 border 
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
                      placeholder="name@company.com"
                      required=""
                      onChange={(e) => setinput({...input, name:e.target.value})}
                      value={input.name}/>
                  </div>
                  <div>
                      <label htmlFor="texy" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                      <input
                      type="text"
                      name="username"
                      id="username"
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
                      placeholder="name@company.com"
                      required=""
                      onChange={(e) => setinput({...input, username:e.target.value})}  
                      value= {input.username}/>
                 </div>
                  <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input
                      type="password"
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
                      required=""
                      onChange={(e) => setinput({...input, password:e.target.value})}
                      value={input.password}/>
                 </div>

                  <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                        id="terms"
                        aria-describedby="terms"
                        type="checkbox"
                        className="
                        w-4
                        h-4
                        border
                        border-gray-300
                        rounded
                      bg-gray-50
                        focus:ring-3
                        focus:ring-primary-300
                        dark:bg-gray-700
                        dark:border-gray-600
                        dark:focus:ring-primary-600
                      dark:ring-offset-gray-800"
                        required={true}/> 
                       </div>
                       <div className="ml-3 text-sm">
                        <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                      </div>
                  </div>
                  <button type="button" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" onClick={handleSignUp}>Create an account</button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    
                      Already have an account? <a href="#" 
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500" 
                      onClick={handleToggleClick} >Login here</a>
                  </p>
                  
              </form>
          </div>
      </div>
  </div>
</section>

    </div>
  )
}

export default SignupCard
