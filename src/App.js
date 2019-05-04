import React from 'react';
import AcademicResult from './modules/academic-result';
import './App.css';

const App = () => (
  <section className='App'>
    <AcademicResult 
      aboutSchool='Na OHC, achamos que aprender e estudar inglês deve ser fácil, divertido e recompensador! Nossos alunos parecem concordar conosco desde que começamos a ensinar em 1974 e têm crescido desde então!'
      name='OHC Toronto' 
      course='Intensivo'
      location='Toronto, Canada' 
      price='12.259,51'
    />
    <AcademicResult
      aboutSchool='A ILSC Language Schools tem oferecido programas de treinamento de idiomas para estudantes internacionais de mais de 100 países desde 1991, e é a maior e mais antiga divisão do ILSC Education Group, que também inclui Faculdades, Formação de Professores, Treinamento de Idiomas para Negócios e Educação Continuada.'
      name='LSI Toronto' 
      course='Intensivo'
      location='Toronto, Canada' 
      price='27.327,35'
    />
    <AcademicResult
      aboutSchool='A ILAC possui instalações modernas em estilo boutique em Toronto e Vancouver, duas das melhores cidades para se viver no mundo, de acordo com a UNESCO.'
      name='ILAC' 
      course='Intensivo'
      location='Toronto, Canada' 
      price='9.125,35'
    />
    <AcademicResult
      aboutSchool='EF provides life-changing education for global citizens. For over 50 years, our mission has been to give confidence and freedom to people of all ages, nationalities and backgrounds. With the desire to define your own path in life, and a little courage, EF opens up a world of possibilities.'
      name='EF Language School' 
      course='Intensivo'
      location='Toronto, Canada' 
      price='9.125,35'
    />
  </section>
);

export default App;
