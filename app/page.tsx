import Head from 'next/head'
import Header from './components/Header'
import Hero from './components/Hero'
import Menu from './components/Menu'
import HottestDish from './components/HottestDish'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>GoodFood - Order Your Best Food Anytime</title>
        <meta name="description" content="Order your favorite dishes from the best chefs around the world!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Hero />
      <Menu />
      <HottestDish />
      <Footer />
    </div>
  )
}
