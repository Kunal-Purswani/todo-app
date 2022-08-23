import type { NextPage } from 'next'
import Header from '../components/Header'
import Head from 'next/head'
import Image from 'next/image'
import Input from './../components/Input';
import Todos from './../components/Todos';

export default function Home() {
  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide" >
      <Head>
        <title>To-Do App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Input />
      <Todos />
    </div>
  )
}
