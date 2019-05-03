import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

import './index.css'

const AcademicResult = ({ 
  aboutSchool, 
  accomodation, 
  course, 
  name, 
  price 
}) => (
  <article className='resultList'>
    
    <div className='resultList__informations details'>
      <h2>{name} - {course}</h2>

      <div className='resultList__informations info'>
        <p className='school'>
          {aboutSchool}
        </p>
        <p className='accomodation'>
          <span>Tipo de acomodação: {accomodation.type}</span>
          <span>
            Endereço: {accomodation.adress}, N°: {accomodation.number}
          </span>
          <span>Anfitrião: {accomodation.host}</span>
        </p>
      </div>

    </div>
    <div className='resultList__informations financial'>
      <h2>Preço Final</h2>
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
  accomodation: PropTypes.shape({
    adress: PropTypes.string.isRequired,
    host: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
  }).isRequired,
  course: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired
}

export default AcademicResult;