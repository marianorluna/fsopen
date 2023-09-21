import React from 'react';
import ReactDOM from 'react-dom/client';

// Desestructuramos el objeto, extrayendo las propiedades
// Comentamos la forma normal, para ver la diferencia
// const Title = (props) => {
//  return <h1>{props.course}</h1>
// }
const Title = ({ course }) => {
  // const {course} = props // esto directamente lo ponemos arriba
  // const course = props.course // son equivalentes
  return <h1>{course}</h1>
}
// Incluso lo podríamos dejar en una sola línea
// const Title = ({ course }) => <h1>{course}</h1>

const Part = ({ part, exercises }) => {
  return (
    <div>
      <p>
        {part} {exercises}
      </p>
    </div>
  )
}

const Content = ({ parts }) => {
  return (
    <div>
      <Part part={parts[0].name} exercises={parts[0].exercises}/>
      <Part part={parts[1].name} exercises={parts[1].exercises}/>
      <Part part={parts[2].name} exercises={parts[2].exercises}/>
    </div>
  )
}

const Total = ({ parts })=> {
  return (
    <div>
      <p>
        Number of exercises {
        parts[0].exercises + parts[1].exercises + parts[2].exercises
        }
      </p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
  {
    name: 'Fundamentals of React',
    exercises: 10
  },
  {
    name: 'Using props to pass data',
    exercises: 7
  },
  {
    name: 'State of a component',
    exercises: 14
  }
  ]

  return (
    <div>
      <Title course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);