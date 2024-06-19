import React from 'react'
import Header from '../../components/Header'
import Intro from './Intro'
import About from './About'
import Experiences from './Experiences'
import Projects from './Projects'
import Courses from './Courses'
import Contact from './Contact'
import Footer from './Footer'
import Leftslider from './Leftslider'
import { useSelector } from 'react-redux'

function Home() {
  const { myapiData } = useSelector(state => state.root);
  return (
    <div >
      <Header />
      {myapiData && (
        <div className='bg-primary px-40 sm:px-5'>
          <Intro />
          <About />
          <Experiences />
          <Projects />
          <Courses />
          <Contact />
          <Footer />
          <Leftslider />
        </div>
      )}

    </div>
  );
}

export default Home