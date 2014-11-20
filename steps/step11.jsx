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
    //next step!
  },
  render: function(){
    var boxes = this.props.rowValues.map(function(value, index){
      return (
        <Box value={value} key={index} rowIndex={index}/>
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
  render: function(){
    var rows = this.state.boardValues.map(function(row, index){
      return (
        <Row key={index} rowValues={row} boardIndex={index}/>
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