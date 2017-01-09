// @flow
import type { Action } from '../types';

export const setCurrentLocale = (locale: string): Action => ({
  payload: { locale },
  type: 'SET_CURRENT_LOCALE',
});
