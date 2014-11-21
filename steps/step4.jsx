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
  render: function(){
    return (
      <button style={boxStyle}>{this.state.value}</button>
    )
  }
});

React.render(<Box/>, document.body);
