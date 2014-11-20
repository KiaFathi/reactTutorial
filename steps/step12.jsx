var React = require('react');

var boxStyle = {
  height: '100px',
  width: '100px'
};

var Box = React.createClass({
  handleClick: function(){
    this.props.handleClick(this.props.rowIndex);
  },
  render: function(){
    return (
      <button 
        style={boxStyle}
        onClick={this.handleClick}
      >
        {this.props.value}
      </button>
    );
  }
});

var Row = React.createClass({
  handleClick: function(rowIndex){
    this.props.handleClick(this.props.boardIndex, rowIndex);
  },
  render: function(){
    var boxes = this.props.rowValues.map(function(value, index){
      return (
        <Box value={value} key={index} rowIndex={index} handleClick={this.handleClick}/>
      );
    }.bind(this));
    return (
      <div>
        {boxes}
      </div>
    );
  }
});

var Board = React.createClass({
  getInitialState: function(){
    return {
      clicks: 0,
      boardValues: [
        ['-', '-', '-'],
        ['-', '-', '-'],
        ['-', '-', '-']
      ]
    };
  },
  handleClick: function(boardIndex, rowIndex){
    var boardValues = this.state.boardValues;
    var newValue = 'X';
    if(this.state.clicks % 2 === 0){
      newValue = 'O';
    }
    boardValues[boardIndex][rowIndex] = newValue;
    this.setState({
      clicks: this.state.clicks + 1,
      boardValues: this.state.boardValues
    });
  },
  render: function(){
    var rows = this.state.boardValues.map(function(row, index){
      return (
        <Row key={index} rowValues={row} boardIndex={index} handleClick={this.handleClick}/>
      )
    }.bind(this));
    return (
      <div>
        {rows}
      </div>
    );
  }
});


React.render(<Board/>, document.body);