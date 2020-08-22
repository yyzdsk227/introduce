import learns from '../Const_etc/learns';
import { LRN_PLUS, LRN_MINUS } from '../action';

const initialState = {
  title: learns[0].title, //수정
  about: learns[0].isAbout, //
  num: 0,
  Img_mark: learns[0].Img_mark, //
};

export function LrnReducer(state = initialState, action) {
  switch (action.type) {
    case LRN_PLUS:
      return {
        ...state,
        num: state.num >= 3 ? 0 : state.num + 1,
      };

    case LRN_MINUS:
      return {
        ...state,
        num: state.num <= 0 ? 3 : state.num - 1,
      };
    default:
      return state;
  }
}
