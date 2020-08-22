import { NAL_LOADING, NAL_SUCCESS } from '../action';

const initialState = {
  temperature: 'loading',
  name: '......',
  isloading: '',
};

export function NalReducer(state = initialState, action) {
  switch (action.type) {
    case NAL_LOADING:
      return {
        ...initialState,
        isloading: true,
        temperature: state.temperature,
      };

    case NAL_SUCCESS:
      return {
        isloading: false,
        temperature: action.temperature,
        name: action.name,
      };

    default:
      return state;
  }
}
