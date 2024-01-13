import { useToast } from '@chakra-ui/react'
import React from 'react'

const LogoutButton = () => {
    const toast = useToast()
    const handleLogOut = async () => {
        try {
            const res = await fetch("/api/users/logout",{
                method: 'POST',
                headers: {
                    "Content-Type":"application/json"
                }
            })
                console.log(res)

            if (res.ok) {
                toast({
                  title: "Log out",
                  description: "Good Bye!",
                  status: "success",
                  duration: 9000,
                  isClosable: true,
                });
              } else {
                toast({
                  title: "Please try again",
                  status: "error",
                  duration: 9000,
                  isClosable: true,
                });
              }
              if(res.ok){
                window.location.href = "/auth"; // Login section
              }

        } catch (error) {
            console.log(error)
        }
    }


  return (
    <div>
    <button 
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
    onClick={handleLogOut}>
    Logout
    </button>
    </div>
  )
}

export default LogoutButton
