import React, { Component } from 'react';
import { observer } from 'mobx-react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import appState from '../../AppState';
import Typography from '@material-ui/core/Typography';
import indigo from '@material-ui/core/colors/indigo';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import green from '@material-ui/core/colors/green';
import grey from '@material-ui/core/colors/grey';

import './index.css'

const styles = {
    card: {
        marginBottom: '1rem',
    },
    cardLeft: {
        width: '70%',
        float: 'left',
    },
    cardRight: {
        display: 'flex',
        alignItens: 'flex-end',
        justifyContent: 'flex-end',
    },
    cardButton: {
        display: 'flex',
        alignItens: 'flex-end',
        justifyContent: 'flex-end',
    }
}
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
    <Card style={styles.card}>
    <CardContent>
        <Grid container spacing={24}>
            <Grid item xs={9}>
                <Typography variant="h5" style={{color:indigo[900]}}>
                    {name} - {course} - {location}
                </Typography>
                <Typography variant="p" gutterBottom>
                    {aboutSchool}
                </Typography>
                <Typography variant="p" gutterBottom>
                    Endereço: <i>{address}</i>
                </Typography>
            </Grid>
            <Grid item xs={3} style={styles.cardRight}>
                <Typography variant="h4" style={{color:indigo[900]}}>
                    {`R$ ${price}`}
                </Typography>
            </Grid>
        </Grid>
        </CardContent>
        <CardActions style={styles.cardButton}>
            <Button
                size="large"
                style={{
                    backgroundColor: green[600],
                    color: grey[50]
                }}
                onClick={() => window.location.href = '/#/mapa'} >
                Selecionar
            </Button>
        </CardActions>
    </Card>


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
