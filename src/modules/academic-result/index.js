import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

import './index.css'

const AcademicResult = ({ 
  aboutSchool, 
  course, 
  location,
  name, 
  price 
}) => (
  <article className='resultList'>
    
    <div className='resultList__informations details'>
      <h2>{name} - {course} - {location}</h2>

      <div className='resultList__informations info'>
        <p className='school'>
          {aboutSchool}
        </p>
      </div>

    </div>
    <div className='resultList__informations financial'>
      <h2>Preço da instituição:</h2>
      <span className='amount'>
        {`R$ ${price}`}
      </span>
      <Button variant="contained">
        Selectionar
      </Button>
    </div>

  </article>
);

AcademicResult.propTypes = {
  aboutSchool: PropTypes.string.isRequired,
  course: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired
}

export default AcademicResult;