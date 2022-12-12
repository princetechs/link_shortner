import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/router'

export default function card() {
  const { data: Session } = useSession()
  let router = useRouter()
  function redirect_to_profile() {
    router.push('/profile')
  }
  return (
    <>
      <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" >
        <div className="p-1">
          <button type="submit" onClick={() => redirect_to_profile()} className="text-gray-700 block w-full px-4 py-2 text-left text-sm hover:bg-slate-200 rounded" >
            {Session?.user?.email}
          </button>
          <button type="submit" onClick={() => signOut()} className="text-gray-700 block w-full px-4 py-2 text-left text-sm hover:bg-slate-200 rounded" >
            Sign out
          </button>
        </div>
      </div>
    </>

  )
}
