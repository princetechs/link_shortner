import Head from 'next/head'
import '../styles/globals.css'
import { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"
import Head_meta from '../components/common/document/Head/Head'
type Cprops={
  children: React.ReactElement
}
const Noop = ({ children }:Cprops) => <>{children}</>
export default function MyApp({ Component, pageProps: { session, pageProps },  }: AppProps) {
  const Layout = (Component as any).Layout || Noop
  return (
    <>
    <Head_meta/>
    <SessionProvider session={session}>
      <Layout>
      <Component {...pageProps} />
      </Layout>
    </SessionProvider>
    </>

  )
}
