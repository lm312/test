import React from 'react';

class App extends React.Component {
  render () {
    return (
      <div>
        Hello React!{this.props.name}
      </div>
    );
  }
}

export default App;
