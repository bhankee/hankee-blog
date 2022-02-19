import Head from 'next/head'
import Nav from '../components/Nav'
import { ThemeProvider } from "next-themes";

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="light" attribute="class">
      <Head>
        <title >Next and MDX Blog</title>

      </Head>

      <div className="container">
      <Nav />
        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </ThemeProvider>
  )
}

export default MyApp
