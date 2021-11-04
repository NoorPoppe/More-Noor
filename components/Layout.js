import Link from 'next/link'
import Nav from "./NavBar"
import Head from "next/head";
import Footer from './Footer'
import Image from 'next/image'


export default function Layout({ children }) {
  return (
    <div className="layout">
      <Head>
        <title>More Noor</title>
        <meta name="keywords" content="projects"></meta>
        <link rel="icon" href="/logo-noor.svg" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@clayui/css/lib/css/atlas.css"
        />
      </Head>
      <Nav />
      <div className="page-content">
        { children }
      </div>

      <Footer />
    </div>
  )
}