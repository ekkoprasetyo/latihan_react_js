import React, { Component } from 'react';
import HelloWorld from './HelloWorld';

class App extends Component {
  render() {
    return (
      <div>
        <HelloWorld nama="dilan"/>
        <HelloWorld nama="asu"/>
        <HelloWorld nama="ahay"/>
        <HelloWorld nama="coba"/>
      </div>
    );
  }
}
export default App;
