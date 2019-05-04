import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import green from '@material-ui/core/colors/green';
import grey from '@material-ui/core/colors/grey';

import cursoIdioma from '../../assets/images/curso-de-idioma.jpg'
import programaFerias from '../../assets/images/programa-de-ferias.jpg'
import highSchool from '../../assets/images/high-school.jpg'
import programaUniversitario from '../../assets/images/programa-universitario.jpg'
import formacaoProfissional from '../../assets/images/formacao-profissional.jpg'

const styles = {
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        flexGrow: '1',
        width: '100%',
        maxWidth: '500',
    },
    card: {
        minHeight: 430,
    },
    media: {
        height: 200,
        objectFit: 'cover',
    },
};

const courses = [
    {
        id: '01',
        title:'CURSO DE IDIOMA',
        description:'Oportunidade única de desenvolver habilidades do idioma no país onde ele é falado, com professores especializados e apoio de material didático e ótimas instalações. Todas as escolas são de excelente qualidade e escolhidas criteriosamente por nossa equipe de experts.',
        imageUrl: cursoIdioma,
    },
    {
        id: '02',
        title: 'PROGRAMA DE FÉRIAS',
        description: 'Programas feitos para você ter uma experiência que vai além do turismo. Os roteiros incluem curso, atividades esportivas, recreativas, viagens e inúmeros passeios, sempre com apoio de locais. A acomodação pode ser em residência estudantil ou casa de família cuidadosamente selecionadas.',
        imageUrl: programaFerias,
    },
    {
        id: '03',
        title: 'HIGH SCHOOL',
        description: 'Programa para você que deseja cursar o Ensino Médio no exterior, vivenciar o dia-a-dia como cidadão do país escolhido, fazer novos amigos, participar de atividades sociais, culturais e desportivas e enfrentar o mundo de forma mais autônoma e independente. Opções de escolas públicas e particulares.',
        imageUrl: highSchool,
    },
    {
        id: '04',
        title: 'PROGRAMA UNIVERSITÁRIO',
        description: 'Os Programas Universitários são a melhor alternativa para jovens e adultos que desejam viver uma experiência universitária em outro país para desenvolver uma carreira sólida e próspera, todos os cursos oferecidos são recomendados e farão a diferença no seu futuro',
        imageUrl: programaUniversitario,
    },
    // {
    //     id: '05',
    //     title:'FORMAÇÃO PROFISSIONAL',
    //     description: 'Estudar no exterior vai muito além de fazer cursos de idiomas. Não importa se você está iniciando sua vida profissional, pretende fazer uma mudança de rumos ou ambiciona alavancar sua carreira, em qualquer uma dessas condições, os Programas de Extensão Universitária e os Programas Profissionalizantes são recomendados e farão a diferença no seu futuro.',
    //     imageUrl: formacaoProfissional,
    // }

]
const StepTwo = () => {
    return (
        <div style={styles.root}>
        <Grid container spacing={24}>
        <Grid item xs={12}>
            <Typography className="titles" variant="h3">
                O SEU OBJETIVO É ESTUDAR NO EXTERIOR?
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
                Saiba mais sobre nossos programas e descubra tudo o que a Experimento pode oferecer:
            </Typography>
        </Grid>
        {courses.map( course => (
            <Grid item xs={3}>
                <Card style={styles.card}>
                    <CardActionArea>
                        <CardMedia
                        style={styles.media}
                        image={course.imageUrl}
                        title={course.title}
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2" style={{color: green[900]}}>
                            {course.title}
                        </Typography>
                        <Typography component="p">
                            {course.description}
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="large" style={{
                            backgroundColor: green[600],
                            color: grey[50],
                        }}>
                        Selecionar
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        ))}
        </Grid>
        </div>
      )
}
export default StepTwo