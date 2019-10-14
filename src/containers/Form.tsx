import React from 'react'
import { useSelector } from 'react-redux'
import { State } from '../store'

const Form: React.FC = () => {
  const show = useSelector<State, boolean>(state => {
    return state.wizard.show
  })

  if (!show) {
    return <div></div>
  }

  return <div>Form</div>
}

export default Form
