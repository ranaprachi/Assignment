import React, { Component } from 'react';
import '../styles/Index.scss';
import Header from "../components/Header";
import "../styles/App.scss";

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Header/>
        <div className="app-content-container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
