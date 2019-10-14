import { action, ActionType } from 'typesafe-actions'

export enum WizardActionTypes {
  START = 'Wizard: Start new',
  NEXT_STEP = 'Wizard: Next Step',
  FINISH = 'Wizard: Finish',
}

export const start = () => action(WizardActionTypes.START)

export const nextStep = () => action(WizardActionTypes.NEXT_STEP)

export const finish = () => action(WizardActionTypes.FINISH)

export type WizardActions = ActionType<
  typeof start | typeof nextStep | typeof finish
>
