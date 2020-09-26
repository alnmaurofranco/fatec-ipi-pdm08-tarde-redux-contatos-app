import React from 'react';
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";
import ContatoNavigator from './navigation/ContatoNavigator';
import contatosReducer from './store/contatos.reducer';

const rootReducer = combineReducers({
  contatos: contatosReducer
});

const store = createStore(rootReducer, applyMiddleware(reduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <ContatoNavigator />
    </Provider>
  );
}