import {createStore} from 'redux';

  import rootReducer from './reducers/multipleReducer.js'

  let store = createStore(rootReducer);
  export default store;
 