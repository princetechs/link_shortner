import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"

export default function card() {
  return (
<>
  <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" >
    <div className="py-1">
        <button type="submit" onClick={() =>signOut()} className="text-gray-700 block w-full px-4 py-2 text-left text-sm" >Sign out</button>
    </div>
  </div>
</>

  )
}
