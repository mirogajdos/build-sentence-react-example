import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { State } from '../store'
import { reset } from '../store/sentence.actions'
import { start } from '../store/wizard.actions'

const Sentence = () => {
  const sentence = useSelector<State, string>(state => {
    const { who, what, when, where } = state.sentence
    const sentence = `${who} ${what} ${where} ${when}`
    return sentence.trim()
  })

  const isWizardOn = useSelector<State, boolean>(state => state.wizard.show)

  const dispatch = useDispatch()

  const startWizard = useCallback(() => {
    dispatch(reset())
    dispatch(start())
  }, [dispatch])

  if (!isWizardOn) {
    return (
      <div onClick={startWizard} className="App-link">
        Start buliding your sentence
      </div>
    )
  }

  return (
    <div>
      <div onClick={startWizard} className="App-link">
        Start again
      </div>
      <div>{sentence}</div>
    </div>
  )
}

export default Sentence
