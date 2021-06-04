import React, { Component } from 'react';//like require express but it's react--don't need for new react. {Component} 
import './App.css';
import Header from './Header'; //remember capital letters when importing. All components are capitalized.
import SectionMain from './SectionMain';
import Aside from './Aside';
import Footer from './Footer';

class App extends Component { //component is the module we destructured out in the first line. 

  render() {
    return (
          /* declare a new class called app Notes can't go on the same line in JSX*/
      <div className="App"> 
        <Header backColor="green" width="50%"></Header> 
        {/* passing in props--put global props in App.js */}
        {/* Not self-enclosing components */}
        <SectionMain></SectionMain>
        <Aside></Aside>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;//exporting App out to index.js (or wherever you want to send it to)

