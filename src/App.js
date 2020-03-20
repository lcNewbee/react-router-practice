import React from 'react';
import { Provider } from 'react-redux';
import store from './store'
import './App.css';
// import ChildrenRoutePage from './pages/ChildrenRoutePage'
import RoutePage from './pages/RoutePage'

function App() {
  return (
    <Provider store={store}>
      <RoutePage />
    </Provider>
    // <ChildrenRoutePage />
  );
}

export default App;
