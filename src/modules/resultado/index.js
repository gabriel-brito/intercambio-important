import React, { Component } from 'react';
import AcademicResult from '../academic-result';
import appState from '../../AppState';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import indigo from '@material-ui/core/colors/indigo';
import Paper from '@material-ui/core/Paper';

const styles = {
    paper: {
        padding: '1rem',
    },
    divider: {
        marginBottom: '1rem',
    }

}

const accomodation = {
  address: 'Alexander Street',
  host: 'Paralelepipido',
  number: '666',
  type: 'Casa'
}

const accomodation2 = {
  address: 'Pipipi popopo Street',
  host: 'Zéca Urubu',
  number: '333',
  type: 'Casa'
}

const accomodation3 = {
  address: 'Chavão dichavador Street',
  host: 'Kiko',
  number: '564654',
  type: 'Apartamento'
}

class Resultado extends Component {
    constructor() {
      super()

      this.state = {
        data: ''
      }

      this.gettingData = async () => {
        let data;
        const URL = 
        'http://intercambio-env.syupiu5fcm.us-east-2.elasticbeanstalk.com/instituicoes';

        try {
          data = await fetch(URL)
            .then(data => data.json());
        } catch (e) {
          console.log(e.message);
        }

        return data;
      }
    }

    async componentDidMount() {
      let data = await this.gettingData();
      this.setState({ data });
    }

    render() {
      return (
        <Grid container spacing={24}>
          <Grid item xs={12}>
              <Typography variant="h2" style={{color:indigo[900]}}>
                  Conheça as escolas e escolha a sua!
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                  Oportunidade única de desenvolver habilidades do idioma no país onde ele é falado, com professores especializados e apoio de material didático e ótimas instalações. Todas as escolas são de excelente qualidade e escolhidas criteriosamente por nossa equipe de experts.
              </Typography>
          </Grid>
          <Grid item xs={12}>
            { !this.state.data 
              ? <h2>Carregando...</h2> 
              : this.state.data.map((item, index) => {
                return (<AcademicResult
                  key={index} 
                  aboutSchool={item.dsInfo}
                  address={item.dsLogradouro}
                  name={item.nmInstituicao}
                  location={`${item.dsCidade}, ${item.dsPais}`}
                  price='13.356,99'
                />)
              })
            }              
          </Grid>
      </Grid>
      );
    }
};

export default Resultado;
