import '../styles/styles.scss'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />

        <title>MMG Themes</title>
      </Head>

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
