import React from 'react'
import phoneImg from './images/phone.svg'
import { useGlobalContext } from './context'

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();
  

  return <section className="hero" onMouseOver={closeSubmenu}>
    <div className="hero-center">
      <article className="hero-info">
        <h1>Payment infrastructure for the internet</h1>
        <p>Millions of companies of all sizes fro start-ups to Fortune 500s- use Stripe's software and APIs to accept payments, send paouts ad mange their business online</p>
      <button className="btn">Start Now</button>
      </article>
      <article className="hero-images">
         <img src={phoneImg} className='phone-img' alt='phone' />
      </article>
    </div>
  </section>
}

export default Hero
