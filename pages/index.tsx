import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import SafeList from './components/SafeList'
import { NetworkErrorBoundary } from 'rest-hooks';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>safe-viewer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>safe-viewer</h1>
        {/* TODO: do something better here to handle errors and loading once next.js 12.3 is released */}
        <NetworkErrorBoundary fallbackComponent={SafeList}>
          <SafeList />
        </NetworkErrorBoundary>
      </main>
    </div>
  )
}

export default Home
