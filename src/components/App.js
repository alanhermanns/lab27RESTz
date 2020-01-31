import React, { Component } from 'react';
import Header from './Header';
import HeadersForm from './HeadersForm';
import FormURLAndMethods from './FormURL';
import Results from './Results';
import hitApi from '../services/hitApi';
import History from './History';

export default class App extends Component {

  state = {
    URL: '',
    Method:'get',
    loading: true,
    pastRequests: [],
    resultJSON: []
  }

    fetch = () => {
      const {URL, Method, BODY} = this.state;
      if(!this.state.BODY){
        fetch(URL, {
          'method': Method
        })
        .then(res => {
          return res.json()
        })
        .then(response => {
          this.setState({resultJSON : [JSON.stringify(response)]})
        })
      }
      else fetch(URL, {
        'method': Method,
        'body': JSON.stringify(BODY)
      })
      .then(res => {
        return res.json()
      })
      .then(response => {
        this.setState({resultJSON : [JSON.stringify(response)]})
      })
    }

    URLHandler = event => {
      event.preventDefault();
      let URL = this.state.URL;
      this.setState(state => ({pastRequests: [...state.pastRequests, URL]}))
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
    sendBodyToState = (event) => {
      let value = event.target.value;
      this.setState(state => ({BODY : value}))
    }

    render()
    {
    return <>
    <Header />
    <FormURLAndMethods URLHandler={this.URLHandler} methodHandler={this.methodHandler} sendTextToState={this.sendTextToState} sendBodyToState={this.sendBodyToState}/>
    <HeadersForm />
    <History history={this.state.pastRequests}/>
    <Results someJson={this.state.resultJSON}/>
    </>
    }
}
  