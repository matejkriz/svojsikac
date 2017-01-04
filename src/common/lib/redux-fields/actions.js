/* @flow weak */
export const FIELDS_RESET_FIELDS = 'FIELDS_RESET_FIELDS';
export const FIELDS_SET_FIELD = 'FIELDS_SET_FIELD';

export const resetFields = path => ({
  payload: { path },
  type: FIELDS_RESET_FIELDS,
});

export const setField = (path, value) => ({
  payload: { path, value },
  type: FIELDS_SET_FIELD,
});
