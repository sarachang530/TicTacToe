import React, { Component } from 'react';
import { render } from 'react-dom';
import { timesSeries } from 'async';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Tic Tac Toe</h1>
        <Board />
      </div>
    );
  }
}

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: ['-', '-', '-', '-', '-', '-', '-', '-', '-']
    };
    this.handleClick = this.handleClick.bind(this);
  };

  handleClick() {
    this.setState({
      value: this.state.value === 'X' ? 'O' : 'X'
    });
  };

  render() {
    let row = [];
    for(let i = 0; i < 3; i++){
      row.push(<Row value={this.state.value} handleClick={this.handleClick} />)
    }
    return(
      <div>
        {row}
      </div>
    )
  };
};


class Row extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    let box = [];
    for(let i = 0; i < 3; i++){
      box.push(<Box value={this.props.value} handleClick={this.props.handleClick} />)
    }
    return (
      <div>
        {box}
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
  };
};

render(<App />, document.querySelector('#root'));
