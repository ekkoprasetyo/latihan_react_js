import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class HelloWorld extends Component {
    render() {
        return (
            <div className="warna">Hello {this.props.nama} !</div>
        );
    }
}

export default HelloWorld;