import { Reducer } from 'redux'
import { SentenceActions, SentenceActionTypes } from './sentence.actions'

export interface WizardState {
  show: boolean
  step: number
}

const initialState: WizardState = {
  show: false,
  step: 1,
}

export const wizardReducer: Reducer<WizardState, SentenceActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    default: {
      return { ...state }
    }
  }
}
