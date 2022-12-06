import React from 'react'
import Header from '../Header'

export default function Layout({ children, ...pageProps}) {
  return (
    <>
    <Header/>
    <main>{children}</main>

    </>
  )
}
