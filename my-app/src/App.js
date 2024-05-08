import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import RegistrationForm from './features/RegistrationForm';

function App() {
  return (
      <Provider store={store}>
        <div className="App">
          <RegistrationForm />
        </div>
      </Provider>
  );
}

export default App;

