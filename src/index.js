import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App1 name='test1'/>, document.getElementById('app'));

function App1() {
    return (
      <div>
        <App name="Sara" />
        <App name="Cahal" />
        <App name="Edite" />
      </div>
    );
  }