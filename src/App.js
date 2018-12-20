import React from 'react';
import { Welcome } from "./Welcome";
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      names: ["Juan", "Pedro", "Germán"]
    };
  }
  
  render() {
    return (
      <div>
        {this.state.names.map((name) =>
          <Welcome name={name} />
        )}
      </div>
    );
  }
}

export default App;
