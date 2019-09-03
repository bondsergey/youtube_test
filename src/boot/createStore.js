import api from '../service';
import reducer from '../reducer';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'

export default function () {
  const store = createStore(
    reducer,
    applyMiddleware(thunk.withExtraArgument(api))
  );

  return store;
}
