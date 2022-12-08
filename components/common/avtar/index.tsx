
import React, { useState } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Card from './card'
export default function avtar() {

	const { data: Session } = useSession()
	const [setSignOut, setSetSignOut] = useState(false)
	return (
        <>
                {Session && Session.user ?
                    <div className="relative inline-block text-left">
                        <div onClick={() => setSetSignOut(!setSignOut)} className="overflow-hidden cursor-pointer relative w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600">
                                   <svg className="absolute -left-1 w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>

                        </div>    
                                       
                                           
                            {setSignOut && <Card/>}
                    </div>
                    :
                    // <button onClick={() => signIn("google")}>Sign in with </button>
                    <button onClick={() => signIn()} type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Sign in with</button>
                    
                }
        </>
)}

