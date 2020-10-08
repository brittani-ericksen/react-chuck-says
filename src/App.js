import React, { Component } from 'react';
import Quotes from "./components/Quotes";
import './App.css';

class App extends Component {
  state = {
    quoteData: []
  }

  loadData = async () => {
    const response = await fetch("https://api.chucknorris.io/jokes/random");
    const data = await response.json();
    return data;
  };

  handleClick = async () => {
    const quoteData = await this.loadData();
    this.setState({
      quoteData: quoteData,
    });
  }

  async componentDidMount() {
    const quoteData = await this.loadData();
    this.setState({
      quoteData: quoteData,
    });
  }

  render() {
    const { quoteData } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1>Chuck Says AGAIN</h1>
        </header>
        <div>
            {this.state.quoteData ? (
              <Quotes quoteData={quoteData.value} />
            ) : (
              <p>No Quote :(</p>
              )}
          </div>
          <button onClick={this.handleClick}>Show Another Quote</button>
      </div>
    );
  }
}

export default App;
