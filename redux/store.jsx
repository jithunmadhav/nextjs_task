import { createStore } from 'redux';

const initialState = {
  signup: { data: null },
  personal: { data: null },
  financial: { data: null }, 
  page:'signup',
  refresh: true,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'signup':
      return { ...state, signup: action.payload };
    case 'personal':
      return { ...state, personal: action.payload };
    case 'financial':
      return { ...state, financial: action.payload };
    case 'page':
      return { ...state, page: action.payload };
    case 'refresh':
      return { ...state, refresh: !state.refresh };
    default:
      return state;
  }
}

let store;

if (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__) {
  store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
} else {
  store = createStore(reducer);
}

export default store;
