import './App.css';
import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Blurb from './components/Blurb';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';

class App extends Component {
  render() {

  return (
    <div className="container">
      <Header/>
      <Nav/>
      <Blurb/>
      <About/>
      <Experience/>
      <Contact/>
      <Footer/>
    </div>
  );
  }
}

export default App;
