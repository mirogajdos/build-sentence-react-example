import { Reducer } from 'redux'
import { SentenceActions, SentenceActionTypes } from './sentence.actions'

export interface SentenceState {
  who: string
  what: string
  when: string
  where: string
}

const initialState: SentenceState = {
  who: '',
  what: '',
  when: '',
  where: '',
}

export const sentenceReducer: Reducer<SentenceState, SentenceActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case SentenceActionTypes.UPDATE_WHAT: {
      return {
        ...state,
        what: action.payload.value,
      }
    }
    case SentenceActionTypes.UPDATE_WHEN: {
      return {
        ...state,
        when: action.payload.value,
      }
    }
    case SentenceActionTypes.UPDATE_WHO: {
      return {
        ...state,
        who: action.payload.value,
      }
    }
    case SentenceActionTypes.UPDATE_WHERE: {
      return {
        ...state,
        where: action.payload.value,
      }
    }
    case SentenceActionTypes.RESET: {
      return {
        ...initialState,
      }
    }
    default: {
      return { ...state }
    }
  }
}
