import { action, ActionType } from 'typesafe-actions'

export enum SentenceActionTypes {
  UPDATE_WHO = 'Sentence: Update WHO Value',
  UPDATE_WHAT = 'Sentence: Update WHAT Value',
  UPDATE_WHEN = 'Sentence: Update WHEN Value',
  UPDATE_WHERE = 'Sentence: Update WHERE Value',
  RESET = 'Sentence: Reset all values',
}

export const updateWho = (value: string) =>
  action(SentenceActionTypes.UPDATE_WHO, { value })

export const updateWhat = (value: string) =>
  action(SentenceActionTypes.UPDATE_WHAT, { value })

export const updateWhen = (value: string) =>
  action(SentenceActionTypes.UPDATE_WHEN, { value })

export const updateWhere = (value: string) =>
  action(SentenceActionTypes.UPDATE_WHERE, { value })

export const reset = () => action(SentenceActionTypes.RESET)

export type SentenceActions = ActionType<
  | typeof updateWho
  | typeof updateWhat
  | typeof updateWhen
  | typeof updateWhere
  | typeof reset
>
