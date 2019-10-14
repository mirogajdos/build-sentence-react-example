import { combineReducers, createStore, Action } from 'redux'
import { SentenceState, sentenceReducer } from './sentence.reducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import { WizardState, wizardReducer } from './wizart.reducer'

export interface State {
  sentence: SentenceState
  wizard: WizardState
}

export const reducer = combineReducers<State>({
  sentence: sentenceReducer,
  wizard: wizardReducer,
})

export const store = createStore<State, Action, {}, {}>(
  reducer,
  composeWithDevTools()
)
