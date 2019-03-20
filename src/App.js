import React, { Component } from 'react';
import './App.css';
import Main from './components/MainComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';

import {Container} from "reactstrap";

class App extends Component {
  render() {
    return (
    	<React.Fragment>
				<Container fluid className="main-container">
					<Header/>
					<Main />
				</Container>
				<Container fluid>
					<Footer/>
				</Container>
				</React.Fragment>
    );
  }
}

export default App;
