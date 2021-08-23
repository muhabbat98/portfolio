import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/header'
const Home: NextPage = () => {
  return (
    <>
		<Head>
			<title>My Portfolio</title>
			<meta name="Portfolio" content="Pulatova Muhabbat" />
		</Head>
		<Header></Header>
     
    </>
  )
}

export default Home
