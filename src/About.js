import React from 'react'
import Herosection from './components/Herosection'

const About = () => {

  const myName = {
    value : "About Our Trade"
  }

  return (
    <>
     <Herosection myData={myName}/>
    </>
  )
}

export default About