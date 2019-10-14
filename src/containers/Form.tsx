import React, { useCallback, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { State } from '../store'
import { Input, Button } from '@material-ui/core'
import {
  updateWho,
  updateWhat,
  updateWhen,
  updateWhere,
} from '../store/sentence.actions'
import { nextStep, finish } from '../store/wizard.actions'

const Form: React.FC = () => {
  const dispatch = useDispatch()
  const [value, setValue] = useState<string>('')

  const show = useSelector<State, boolean>(state => state.wizard.show)
  const step = useSelector<State, number>(state => state.wizard.step)

  const next = useCallback(() => {
    if (step === 1) {
      dispatch(updateWho(value))
      dispatch(nextStep())
    }
    if (step === 2) {
      dispatch(updateWhat(value))
      dispatch(nextStep())
    }
    if (step === 3) {
      dispatch(updateWhen(value))
      dispatch(nextStep())
    }
    if (step === 4) {
      dispatch(updateWhere(value))
      dispatch(finish())
    }
    setValue('')
  }, [step, value, setValue])

  if (!show) {
    return <></>
  }

  return (
    <div className="wizard">
      <div style={{ margin: '0 1rem' }}>
        {step === 1 && 'Who?'}
        {step === 2 && 'What?'}
        {step === 3 && 'When?'}
        {step === 4 && 'Where?'}
      </div>
      <div>
        <Input
          style={{ color: 'white' }}
          value={value}
          onChange={e => {
            setValue(e.target.value)
          }}
        ></Input>
      </div>
      <div style={{ color: '#09d3ac', margin: '0 1rem' }}>
        <Button color="inherit" variant="outlined" onClick={next}>
          {step === 4 ? 'Finish' : 'Next'}
        </Button>
      </div>
    </div>
  )
}

export default Form
