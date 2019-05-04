import React from 'react';
import appState from '../../AppState';
import { observer } from 'mobx-react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import pink from '@material-ui/core/colors/pink';
import green from '@material-ui/core/colors/green';
import grey from '@material-ui/core/colors/grey';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import estudar from '../../assets/images/btn-estudar.jpg';
import trabalhar from '../../assets/images/bg-trabalho.jpg';

import './index.css';

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    flexGrow: '1',
    width: '100%',
    maxWidth: '500'
  },
  btn: {
    display: 'flex',
    justifyContent: 'center'
  },
  card: {
    maxWidth: 200
  },
  media: {
    objectFit: 'cover'
  }
};

const StepOne = () => (
  <div style={styles.root}>
    <Grid container spacing={24}>
      <Grid item xs={12}>
        <Typography className="titles" variant="h3">
          Escolha seu intercâmbio
        </Typography>
      </Grid>
      <Grid item style={styles.btn} xs={6}>
        <Card>
          <CardActionArea>
            <CardMedia
              component="img"
              style={styles.media}
              height="220"
              image={estudar}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                style={{ color: green[900] }}
              >
                Estude no exterior
              </Typography>
              <Typography component="p">
                Estudar no exterior vai muito além de fazer cursos de
                idiomas. Não importa se você está iniciando sua vida
                profissional, <br />
                pretende fazer uma mudança de rumos ou ambiciona alavancar
                sua carreira.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              onClick={() => {
								appState.setSearchParameter('travelReason', 'estudar');
              }}
              size="large"
              style={{
                backgroundColor: green[600],
                color: grey[50]
              }}
            >
              Continuar
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item className="btn" xs={6}>
        <Card>
          <CardActionArea>
            <CardMedia
              component="img"
              style={styles.media}
              height="220"
              image={trabalhar}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                style={{ color: pink[700] }}
              >
                Trabalhe no exterior
              </Typography>
              <Typography component="p">
                Que tal aprimorar o idioma com uma experiência de trabalho
                no exterior? <br />
                Já pensou em receber um salário em dólar ou euro e custear
                uma parte das despesas durante o seu intercâmbio no exterior
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              size="large"
              style={{
                backgroundColor: pink[700],
                color: grey[50]
              }}
            >
              Continuar
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  </div>
);

observer(StepOne);

export default StepOne;
