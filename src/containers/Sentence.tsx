import React from 'react'
import { useSelector } from 'react-redux'
import { State } from '../store'

const Sentence = () => {
  const sentence = useSelector<State, string>(state => {
    const { who, what, when, where } = state.sentence
    const sentence = `${who} ${what} ${where} ${when}`
    return sentence.trim()
  })

  if (!sentence) {
    return <div className="App-link">Start buliding your sentence</div>
  }

  return (
    <div>
      <div className="App-link">Start again</div>
      <div>{sentence}</div>
    </div>
  )
}

export default Sentence
