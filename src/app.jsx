import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Tic Tac Toe</h1>
        <Row />
      </div>
    );
  }
}


class Row extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '-'
    };
  this.handleClick = this.handleClick.bind(this);
  };

  handleClick(e) {
    this.setState({
      value: this.state.value === 'X' ? 'O' : 'X'
    });
  };

  render() {
    return (
      <div>
        <Box value={this.state.value} handleClick={this.handleClick} />
        <Box value={this.state.value} handleClick={this.handleClick} />
        <Box value={this.state.value} handleClick={this.handleClick} />
      </div>
    )
  };
};

class Box extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <button className='button' style={{height: 100, width: 100}} onClick={this.props.handleClick}>
        {this.props.value}
      </button>
    )
  }
}

render(<App />, document.querySelector('#root'));
