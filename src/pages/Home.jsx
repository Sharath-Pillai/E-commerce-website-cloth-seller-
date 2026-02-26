import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/latestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/ourPolicy'
import NewsletterBox from '../components/NewsletterBox'
import Footer from '../components/Footer'
const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection/>
      <BestSeller/>
      <OurPolicy/>
      <NewsletterBox/>
      <Footer/>
    </div>
  )
}

export default Home