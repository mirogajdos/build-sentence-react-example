import { combineReducers, createStore, Action } from 'redux'
import { SentenceState, sentenceReducer } from './sentence.reducer'
import { composeWithDevTools } from 'redux-devtools-extension'

export interface State {
  sentence: SentenceState
}

export const reducer = combineReducers<State>({
  sentence: sentenceReducer,
})

export const store = createStore<State, Action, {}, {}>(
  reducer,
  composeWithDevTools()
)
