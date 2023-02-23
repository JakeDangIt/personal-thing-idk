import React from 'react'

import { Footer, Blog, Possibility, Features, WhatCeleste, Header } from './containers'
import { CTA, Brand, Navbar } from './components'
import './App.css'

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      <div>
      <Brand />
      <WhatCeleste />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
      </div>
      </div>
    </div>
  )
}

export default App
