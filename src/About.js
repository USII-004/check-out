import './About.css';
import {FaAngleLeft} from 'react-icons/fa6'


function About() {
  return (
    <div className='about__container'>
      <div className='about__section1'>
        <div className='back__icon'>
          <FaAngleLeft />
        </div>
        <div className='step__number'>
          <h3>Step 5 of 5</h3>
        </div>
      </div>
      <h1 className='about__title'>Check out</h1>
      <h2 className='about__subtitle'>Why is it paid?</h2>
      <p className='about__description'>
        Magic avaters consumes tremendous computation power to create
        amazing avaters for you. It's expensive, but we made it as affordable
        as possible.  
      </p>
    </div>
  )
}

export default About