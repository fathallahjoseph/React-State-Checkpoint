import './App.css'//import css
import Photo from './joseph.png'//import Photo de state imgsrc
import React, { Component } from 'react'//import react

export default class Person extends Component {
  //declarer my state profile informations
  state = {
    Person: {
      fullName : "Youssef Fathallah",
      bio : "A new life a new opportunity new aspirations and God willing I will fulfill all my dreams I am back",
      imgSrc : Photo,
      profession : "Web Develloper"
    },
    show: true,
    counter:0
  };

 //function calcul secondes open site
  componentDidMount(prevProps, prevState) {
    setInterval(() => {
      this.setState({counter:this.state.counter+1})
    }, 1000);
  }
  //function to return different show value true or false
  handleShowPerson = () => {
    this.setState({
      show: !this.state.show
    });
  };
//all return in div
  render() {
    return (
      <div className='Personel'>
        <>
        {this.state.show && (
          <>
            <h1>{this.state.Person.fullName}</h1>
            <h1>{this.state.Person.bio}</h1>
            <img src={this.state.Person.imgSrc} alt="jojo"/>
            <h1>{this.state.Person.profession}</h1>
            <h1 style={{marginLeft:"20px"}}>{this.state.counter}</h1>
            <br></br>
          </>
        )}
        <button className='button-71' onClick={this.handleShowPerson}>Show Person</button>
      </>
      </div>
    )
  }
}




