import Head from 'next/head'
import Nav from '../components/Nav'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title >Next and MDX Blog</title>

      </Head>

      <div className="container">
      <Nav />
        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </>
  )
}

export default MyApp
