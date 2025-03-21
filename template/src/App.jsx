import './App.css'

// HERO OPTIONS:
import { Hero } from './components/Hero/Hero'
import { HeroGym } from './components/Hero/HeroGym'
import { HeroApp } from './components/Hero/HeroApp'
import { HeroDelivery } from './components/Hero/HeroDelivery'

//FEATURE:
import { Feature } from './components/Feature/Feature'
import { Products } from './components/Feature/Product'


function App() {

  return (
    <>     
      {/* <Hero headline='Headline to grab attention'  ctaBtn='Offer Service'/>
      <HeroGym headline='Fitness kits that help you keep fit.' ctaBtn='Start Today'/>
      <HeroApp/> */}
      <HeroDelivery headline={['Get Goods','Delivered']}  ctaBtn='Offer Service'/>
      <Feature sectionName='Our Services'/>
      <Products/>
    </>
  )
}

export default App
