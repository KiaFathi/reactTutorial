var React = require('react');

var boxStyle = {
  height: '100px',
  width: '100px'
};

var Box = React.createClass({
  getInitialState: function(){
    return {
      value: 'X'
    }
  },
  handleClick: function(){
    var oldValue = this.state.value;
    var newValue = oldValue === 'X' ? 'O': 'X';
    this.setState({
      value: newValue
    });
  },
  render: function(){
    return (
      <button style={boxStyle} onClick={this.handleClick}>
        {this.state.value}
      </button>
    );
  }
});

var Row = React.createClass({
  render: function(){
    return (
      <div>
        <Box/>
        <Box/>
        <Box/>
      </div>
    );
  }
});


React.render(<Row/>, document.body);