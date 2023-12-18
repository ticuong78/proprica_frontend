import { Link } from 'react-router-dom';
import React from 'react';
import './Introduction/style/style.css'
import IntroductionNavBar from './Introduction/jsx/IntroductionNavBar';

const Introduction = () => {
  return (
    <div className='body'>
      <NavBar/>
    </div>
  )
}

const NavBar = () => {
  return (
    <>
      <div className='oval'>
      </div>
      <IntroductionNavBar/>
      <div>Introduction</div>
      <button>
        <Link to={"/production"}>
          Production
        </Link>
      </button>
    </>
  )
}

export default Introduction