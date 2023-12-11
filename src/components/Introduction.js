import { Link } from 'react-router-dom';
import React from 'react';

const Introduction = () => {
  return (
    <>
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