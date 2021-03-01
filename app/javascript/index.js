import { isMoment } from "moment";
import React from "react";
import Container  from "./components/Container.jsx";
import { createStore,applyMiddleware } from 'redux';
import reducers from './reducers'
import { Provider } from "react-redux";
import devToolsEnhancer from 'remote-redux-devtools';
import thunk from 'redux-thunk'


const store = createStore(reducers, applyMiddleware(thunk))
const App = () => {
  return (
    <Provider store={store}>
    <Container />
    </Provider>
  );
};

export default App;
