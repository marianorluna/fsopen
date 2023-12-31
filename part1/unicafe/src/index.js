import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'

const Title = props => <h1>{props.name}</h1>

const Statistic = ({ text, value }) => {
    if (text === 'positive') {
        return (
            <tr><td>{text} {value}%</td></tr>
        )
    }
    else {
        return (
            <tr><td>{text} {value}</td></tr>
        )
    }
}

const Statistics = ({ clicks }) => {
    const all = clicks.good + clicks.neutral + clicks.bad;
    const average = (clicks.good * 1 + clicks.bad * -1) / all;
    const positive = clicks.good / all * 100;

    if (all === 0) {
        return (
            <>
                No feedback given
            </>
        )
    }
    else {
        return (
            <>
                <table>
                    <tbody>
                        <Statistic text='good' value={clicks.good} />
                        <Statistic text='neutral' value={clicks.neutral} />
                        <Statistic text='bad' value={clicks.bad} />
                        <Statistic text='all' value={all} />
                        <Statistic text='average' value={average} />
                        <Statistic text='positive' value={positive} />
                    </tbody>
                </table>
            </>
        )
    }
}

const Button = ({ onClick, text }) => {
    return (
        <button onClick={onClick}>
            {text}
        </button>
    )    
}

const App = () => {
    // save clicks of each button to its own state
    const [clicks, setClicks] = useState({
        good:0, neutral:0, bad:0
    })

    const handleGoodClick = () => setClicks({...clicks, good: clicks.good + 1})
    const handleNeutralClick = () => setClicks({...clicks, neutral: clicks.neutral + 1})
    const handleBadClick = () => setClicks({...clicks, bad: clicks.bad + 1})

    return (
        <div>
            <Title name='Customer feedback' />
            <Button onClick={handleGoodClick} text='good' />
            <Button onClick={handleNeutralClick} text='neutral' />
            <Button onClick={handleBadClick} text='bad' />
            <Title name='Statistics' />
            <Statistics clicks={clicks} />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);