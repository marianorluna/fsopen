import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'

const Title = ({ name }) => <h2>{name}</h2>

const Anecdote = ({ text, votesCount }) => {
  return (
    <>
      <p>{text}</p>
      <p>has {votesCount} votes</p>
    </>
  )
}

const Winner = ({ anecdotes, allVotes }) => {
  const highestVoteCount = Math.max(...allVotes)
  const winnerIndex = allVotes.indexOf(highestVoteCount)
  const winner = anecdotes[winnerIndex]
  if (highestVoteCount === 0) {
    return (
      <p>No votes yet</p>
    )
  }
  else {
    return (
      <>
        <p>{winner}</p>
        <p>has {highestVoteCount} votes</p>
      </>
    )
  }
}

const Button = ({ onClick, text }) => {
  return (
    <>
      <button onClick={onClick}>{text}</button>
    </>
  )
}

const App = ({ anecdotes }) => {
  const [selected, setSelected] = useState(0)
  const [allVotes, setAllVotes] = useState(Array(anecdotes.length).fill(0))
  
  const handleVoteClick = () => {
    const newAllVotes = [...allVotes]
    newAllVotes[selected] += 1
    setAllVotes(newAllVotes)
  }

  const handleNextAnecdote = () => {
    const arrayIndex =Math.floor(Math.random() * anecdotes.length)
    setSelected(arrayIndex)
  }

  return (
    <div>
      <Title name='Anecdote of the day' />
      <Anecdote text={anecdotes[selected]} votesCount={allVotes[selected]} />
      <Button onClick={handleVoteClick} text='Vote' />
      <Button onClick={handleNextAnecdote} text='Next Anecdote' />
      <Title name='Anecdote with most votes:' />
      <Winner anecdotes={anecdotes} allVotes={allVotes} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App anecdotes={anecdotes}/>
    </React.StrictMode>
);