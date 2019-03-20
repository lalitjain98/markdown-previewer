import React, { Component } from 'react';
import './App.css';
import Main from './components/MainComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Header from './components/HeaderComponent';
import {Container} from "reactstrap";

class App extends Component {
  render() {
    return (
      <Container fluid className="main-container">
				<Header/>
				<Main />
      </Container>
    );
  }
}

export default App;
