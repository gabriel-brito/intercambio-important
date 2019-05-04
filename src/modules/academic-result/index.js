import React, { Component } from 'react';
import { observer } from 'mobx-react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import appState from '../../AppState';

import './index.css'

class AcademicResult extends Component {
	handleSelecionarClick = schoolName => {
		appState.setSearchParameter('school', schoolName);
		window.location.href = '/#/mapa';
	};

	render() {
		const {
			aboutSchool,
			address,
			course,
			location,
			name,
			price
		} = this.props;

		return (
			<article className='resultList'>
				<div className='resultList__informations details'>
					<h2>{name} - {course} - {location}</h2>

					<div className='resultList__informations info'>
						<p className='school'>
							{aboutSchool}
						</p>
						<p>
							Endereço: <i>{address}</i>
						</p>
					</div>

				</div>
				<div className='resultList__informations financial'>

					<span className='amount'>
						<h2>Preço:</h2>  {`R$ ${price}`}
					</span>
					<Button variant="contained" onClick={() => this.handleSelecionarClick(name)} >
						Selecionar
					</Button>
				</div>
  		</article>
		);
	}
}

AcademicResult.propTypes = {
  aboutSchool: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  course: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired
}

observer(AcademicResult);

export default AcademicResult;