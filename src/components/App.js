import React, { Component } from 'react';
import Header from './Header';
import HeadersForm from './HeadersForm';
import FormURLAndMethods from './FormURL';
import Results from './Results';
import hitApi from '../services/hitApi';

export default class App extends Component {

  state = {
    URL: '',
    Method:'get',
    loading: true,
    resultJSON: [],
  }

    fetch = () => {
      const {URL, Method} = this.state;
      console.log('Q!Q',URL)
      fetch(URL)
      .then(res => {
        console.log(res.json())
        this.setState({resultJSON : [JSON.stringify(res.json())]})
      })
    }

    URLHandler = event => {
      event.preventDefault();
      let URL = this.state.URL;
      console.log(URL)
      this.fetch();
    }
    methodHandler= (event) => {
      event.preventDefault()
      let value = event.target.value;
      this.setState(state => ({Method: value}))
    }
    sendTextToState = (event) => {
      let value = event.target.value;
      this.setState(state => ({URL : value}))
      console.log(this.state.URL)
    }
    render()
    {
    return <>
    <Header />
    <FormURLAndMethods URLHandler={this.URLHandler} methodHandler={this.methodHandler} sendTextToState={this.sendTextToState}/>
    <HeadersForm />
    <Results someJson={this.state.resultJSON}/>
    </>
    }
}
  