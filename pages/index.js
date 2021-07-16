import Head from 'next/head'

import Hero1 from '../components/Heros/Hero1/Hero1'
import Hero2 from '../components/Heros/Hero2/Hero2'
import MainLayout from '../components/layouts/MainLayout'
import Collection1 from '../components/Collections/Collection1/Collection1'
import Collection2 from '../components/Collections/Collection2/Collection2'
import Collection3 from '../components/Collections/Collection3/Collection3'
import ImgLeft from '../components/ImgWithText/ImgLeft'

export default function Home() {
  return (
    <MainLayout>
      <Head>
        <title>MMG Themes</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Hero1 />
      <ImgLeft />
      <Collection1 />
      <Collection2 />
      <Collection3 />
    </MainLayout>
  )
}
