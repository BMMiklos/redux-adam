import React from 'react';
import { hot } from 'react-hot-loader';
import "./App.css";

import TodoList from './Todos/TodoList';

const App = () => (
        <div className="App">
          Hello World
          <TodoList></TodoList>  
        </div>
);

export default hot(module)(App);
