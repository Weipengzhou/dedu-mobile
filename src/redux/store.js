import {applyMiddleware,createStore,compose} from 'redux';
import  reducers from './reducers';
import thunk from 'redux-thunk';

export default function configureStore(init){
  const store = createStore(reducers,init,applyMiddleware(thunk));
  return store;
}
