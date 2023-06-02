import './App.css';//import css
import React, { Component } from 'react'//import react
import Person from './Person'; //import person 
//change function to class function
export default class App extends Component {
  render() {
    return (
      <div>
        <Person/>
      </div>
    )
  }
}


