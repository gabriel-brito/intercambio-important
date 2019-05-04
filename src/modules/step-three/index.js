import React from 'react';
import Grid from '@material-ui/core/Grid';

import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import grey from '@material-ui/core/colors/grey';
import Chip from '@material-ui/core/Chip';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


import bannerIdiomas from '../../assets/images/banner-curso-de-idiomas.png'

const styles = {
    root: {
        display: 'flex',
        width: '100%',
        maxWidth: 500,
    },
    x12: {
        flexBasis: '96%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    banner: {
        marginTop: 13,
        height: 110,
        backgroundPosition: 'center',
        backgroundImage: `url(${bannerIdiomas})`,
        backgroundSize: 'cover',
        color: '#fff',
    },
    textBaner: {
        display: 'flex',
        lineHeight: 1.2,
        color: grey[50],
    },
    textPaper: {
        padding: '2rem',
    },
    listRoot: {
        width: '100%',
        backgroundColor: '#fff',
    },
    column: {
        flexBasis: '33.33%',
    },
}

const idiomas = [
    {
        name: 'Inglês',
        paises: [
            {
                name:'Canadá'
            },
            {
                name:'Estados Unidos'
            },
            {
                name:'Irlanda'
            },
            {
                name:'Inglaterra'
            },
            {
                name:'Escócia'
            },
            {
                name:'Espanha'
            },
            {
                name:'Malta'
            },
            {
                name:'Emirados Árabes'
            },
            {
                name:'Índia'
            },
            {
                name:'África do Sul'
            },
            {
                name:'Austália'
            },
            {
                name:'Nova Zelandia'
            }
        ]
    },
    {
        name: 'Alemão',
        paises: [
            {name:'Alemanha'}
        ]
    },
    {
        name: 'Espanhol',
        paises: [
            {
                name:'Espanha'
            },
            {
                name: 'México'
            },
            {
                name: 'Cuba'
            },
            {
                name:'Costa Rica'
            },
            {
                name:'Chile'
            },
            {
                name:'Argentina'
            }
        ]
    },
    {
        name: 'Francês',
        paises: [
            {
                name:'França'
            },
            {
                name:'Canadá'
            }
        ]
    },
    {
        name: 'Mandarim',
        paises: [
            {
                name:'China'
            }
        ]
    },
    {
        name: 'Italiano',
        paises: [
            {
            name:'Itália'
        }
        ]
    },
    {
        name: 'Japonês',
        paises: [
            {
                name:'Japão'
            }
        ]
    },
];

function handleClick() {
    alert('You clicked the Chip.'); // eslint-disable-line no-alert
  }

const StepThree = () => {
    return (
        <div style={styles.banner}>
        <Grid container spacing={24}>
            <Grid item xs={12}>
                <Typography variant="h2" gutterBottom style={styles.textBaner}>
                    CURSO DE IDIOMAS
                </Typography>
            </Grid>
            <Grid item xs={8}>
                <Typography variant="h4">
                    ESCOLHA AGORA UM IDIOMA E PAÍS PARA O SEU INTERCÂMBIO!
                </Typography>
                <Typography variant="subtitle1" >
                    Oportunidade única de desenvolver habilidades do idioma no país onde ele é falado, com professores especializados e apoio de material didático e ótimas instalações. Todas as escolas são de excelente qualidade e escolhidas criteriosamente por nossa equipe de experts.
                </Typography>

                {idiomas.map(idioma => (
                    <ExpansionPanel>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <div style={styles.column}>
                            <Typography style={styles.heading}>{idioma.name}</Typography>
                        </div>
                        <div style={styles.column}>
                            <Typography style={styles.secondaryHeading}>Clique para selecionar o pais desejado</Typography>
                        </div>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails style={styles.details}>
                            {idioma.paises.map(pais => (
                                <Chip
                                    clickable
                                    onClick={handleClick}
                                    key={pais.name}
                                    label={pais.name}
                                    variant="outlined"
                            />
                            ))}
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                ))}
            </Grid>
        </Grid>
        </div>
    );
}
export default StepThree
