import { Reducer } from 'redux'
import { WizardActionTypes, WizardActions } from './wizard.actions'

export interface WizardState {
  show: boolean
  step: number
}

const initialState: WizardState = {
  show: false,
  step: 1,
}

export const wizardReducer: Reducer<WizardState, WizardActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case WizardActionTypes.START: {
      return {
        show: true,
        step: 1,
      }
    }
    case WizardActionTypes.NEXT_STEP: {
      return {
        ...state,
        step: state.step + 1,
      }
    }
    case WizardActionTypes.FINISH: {
      return {
        ...state,
        show: false,
      }
    }
    default: {
      return { ...state }
    }
  }
}
