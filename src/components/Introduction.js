import React from 'react';
import './Introduction/style/style.css'
import IntroductionNavBar from './Introduction/jsx/IntroductionNavBar';
import IntroductionBody from './Introduction/jsx/IntroductionBody';

const Introduction = () => {
  return (
    <div className='body'>
      <div className='oval'>
      </div>
      <IntroductionNavBar />
      <IntroductionBody />
    </div>
  )
}

export default Introduction