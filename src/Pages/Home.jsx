import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Section1 from '../Components/HomePageComponents/Section1/Section1'
import Section2 from '../Components/HomePageComponents/Section2/Section2'
import Section3 from '../Components/HomePageComponents/Section3/Section3'
import Section4 from '../Components/HomePageComponents/Section4/Section4'
import Section5 from '../Components/HomePageComponents/Section5/Section5'
import Section6 from '../Components/HomePageComponents/Section6/Section6'
import Section7 from '../Components/HomePageComponents/Section7/Section7'

const Home = () => {
  return (
  <div className='w-full'>
    <Navbar/>
    <Section1/>
    <Section2/>
    <Section3/>
    <Section4/>
    <Section5/>
    <Section6/>
    <Section7/>
  </div>
  )
}

export default Home