import React, { Component } from 'react';
import HelloWorld from './HelloWorld';

class App extends Component {
  render() {
    return (
      <div>
        <HelloWorld namaDepan="dilan" namaBelakang="asoy"/>
        <HelloWorld namaDepan="asu" namaBelakang="asoy"/>
        <HelloWorld namaDepan="ahay" namaBelakang="asoy"/>
        <HelloWorld namaDepan="coba" namaBelakang="asoy"/>
      </div>
    );
  }
}
export default App;
