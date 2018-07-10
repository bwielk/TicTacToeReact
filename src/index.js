import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
//import registerServiceWorker from './registerServiceWorker';

class Square extends React.Component {
  
  constructor(props) {
  	super(props);
  	this.state = {
  		value: 1
  	};
  }
  render() {
    return (
      <button className="square" onClick={()=> {
      		let value = this.state.value;
      		value += 1;
     		this.setState({value: value});
     		console.log("You have clicked the tile " + this.props.value + " " + this.state.value + " times");
      	}
  	}>
  		{this.props.value}
      </button>
    );
  }
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square value={i}/>;
  }

  render() {
    const status = 'Next player: X';
    return (
      <div>
        <div className="status">
        </div>
        <div className="board-row">
          {this.renderSquare("A")}
          {this.renderSquare("B")}
          {this.renderSquare("C")}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Game />,
  document.getElementById('app')
);