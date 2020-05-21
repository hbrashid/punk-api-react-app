import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class Beer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLiked: false
    };
  }

  handleClick = () => {
    this.setState({
      isLiked: !this.state.isLiked
    });
  }

  render() {
  return (
    <div style={{margin: '0 auto 60px auto', width: '500px', border: '1px solid black', padding: '20px', borderRadius: '4px'}} >
    <img style={{ width: '30px' }} src={this.props.beer.image_url} />
    <button onClick={this.handleClick} >{this.state.isLiked ? 'Liked' : 'Like'}</button>
    <div>{this.props.beer.name}</div>
    <p>{this.props.beer.tagline}</p>
    <p>{this.props.beer.description}</p>
    </div>
  );
}
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: []
    };
  }

  componentDidMount () {
    fetch('https://api.punkapi.com/v2/beers')
    .then(json => json.json())
    .then(data => {
      this.setState({
        beers: data
      })
      console.log(data);
    })
  }

  

  render() {
  return (
    <div className="App">
      {this.state.beers.map((beerData, index) => (
      <Beer key={index} beer={beerData} />
      ))}
    </div>
  );
  }
}

export default App;
