import {
  LOADING_LIST,
  FAILED_LIST,
  SUCCESS_LIST,
  SUCCESS_DELETE,
  FAILED_DELETE,
  SUCCESS_ADD,
  FAILED_ADD
} from "./constant";

const initialState = {
  error: null,
  isLoading: false,
  payload: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOADING_LIST: {
      return {...state, error: null, isLoading: true};
    }
    case FAILED_LIST: {
      return {...state, payload: null, error: action.payload, isLoading: false};
    }
    case SUCCESS_LIST: {
      return {...state, payload: action.payload, error: null, isLoading: false};
    }
    case SUCCESS_DELETE: {
      const newPaylaod = state.payload.filter(({id}) => !action.payload.includes(id))
      return {...state, payload: newPaylaod, error: null, isLoading: false};
    }
    case FAILED_DELETE: {
      return {...state, error: action.payload, isLoading: false};
    }
    case SUCCESS_ADD: {
      return {
        ...state,
        payload: [...state.payload, {...action.payload, id: Math.floor(Math.random() * 10000)}],
        error: null,
        isLoading: false
      };
    }
    case FAILED_ADD: {
      return {...state, error: action.payload, isLoading: false};
    }
    default:
      return state
  }
}
