import React from 'react';
import AcademicResult from '../academic-result';
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
  adress: 'Alexander Street',
  host: 'Paralelepipido',
  number: '666',
  type: 'Casa'
}

const accomodation2 = {
  adress: 'Pipipi popopo Street',
  host: 'Zéca Urubu',
  number: '333',
  type: 'Casa'
}

const accomodation3 = {
  adress: 'Chavão dichavador Street',
  host: 'Kiko',
  number: '564654',
  type: 'Apartamento'
}

const Resultado = () => (
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
            <AcademicResult
            aboutSchool='Na OHC, achamos que aprender e estudar inglês deve ser fácil, divertido e recompensador! Nossos alunos parecem concordar conosco desde que começamos a ensinar em 1974 e têm crescido desde então!'
            accomodation={accomodation}
            name='OHC Toronto'
            course='Semi-intensivo'
            price='12.259,51'
            />

            <AcademicResult
            aboutSchool='A ILSC Language Schools tem oferecido programas de treinamento de idiomas para estudantes internacionais de mais de 100 países desde 1991, e é a maior e mais antiga divisão do ILSC Education Group, que também inclui Faculdades, Formação de Professores, Treinamento de Idiomas para Negócios e Educação Continuada.'
            accomodation={accomodation2}
            name='LSI Toronto'
            course='Intensivo'
            price='27.327,35'
            />

            <AcademicResult
            aboutSchool='A ILAC possui instalações modernas em estilo boutique em Toronto e Vancouver, duas das melhores cidades para se viver no mundo, de acordo com a UNESCO.'
            accomodation={accomodation3}
            name='ILAC'
            course='Curso Regular'
            price='9.125,35'
            />

            <AcademicResult
            aboutSchool='A ILAC possui instalações modernas em estilo boutique em Toronto e Vancouver, duas das melhores cidades para se viver no mundo, de acordo com a UNESCO.'
            accomodation={accomodation3}
            name='ILAC'
            course='Curso Regular'
            price='9.125,35'
            />
        </Grid>
    </Grid>
);

export default Resultado;