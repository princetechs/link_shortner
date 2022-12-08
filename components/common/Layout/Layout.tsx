import React from 'react'
import Header from '../Header'

import HeaderNav from '../HeaderNav'

export default function Layout(  {children}:{children:React.ReactElement}) {
  return (
    <>
    {/* <HeaderNav/> */}
    <Header/>
    <main>{children}</main>

    </>
  )
}
