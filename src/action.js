export const LRN_PLUS = 'LRN_PLUS';
export const LRN_MINUS = 'LRN_MINUS';
export const NAL_LOADING = 'NAL_LOADING';
export const NAL_SUCCESS = 'NAL_SUCCESS';

export function learningPlus() {
  return {
    type: LRN_PLUS,
  };
}

export function learningMinus() {
  return {
    type: LRN_MINUS,
  };
}

export function nalssiLoading() {
  return {
    type: NAL_LOADING,
  };
}

export function nalssiSuccess(temperature, name) {
  return {
    type: NAL_SUCCESS,
    temperature,
    name,
  };
}
