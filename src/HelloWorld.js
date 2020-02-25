import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class HelloWorld extends Component {
    constructor(props) {
        super(props);
        this.state = {salam: 'Helo ' };
    }

    salamkan = () => {
        this.setState({ salam: 'Salam Untukmu ' })
    }

    render() {
        return (
            <div className="warna">
                {this.state.salam}
                {this.props.namaDepan} {this.props.namaBelakang}
                <br />
                <button onClick={this.salamkan}> Salam ! </button>
            </div>
        );
    }
}

export default HelloWorld;