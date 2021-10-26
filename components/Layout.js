import Link from 'next/link'
import Nav from "./NavBar"
import Head from "next/head";
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Head>
        <title>More Noor</title>
        <meta name="keywords" content="cats"></meta>
        <link rel="icon" href="/logo.png" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@clayui/css/lib/css/atlas.css"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;700&display=swap" rel="stylesheet" />
      </Head>
      <header>
        <Link href="/">
          <a>
            <h1>
              <span>Just Add</span>
              <span>Marmite</span>
            </h1>
            <h2>Spread The Joy</h2>
          </a>
        </Link>
      </header>
      <Nav />
      <div className="page-content">
        { children }
      </div>

      <Footer />
    </div>
  )
}