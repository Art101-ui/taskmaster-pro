import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import TodosContext from './context/TodosContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TodosContext><App /></TodosContext>
  </React.StrictMode>
);



