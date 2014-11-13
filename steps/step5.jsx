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
  componentWillMount: function(){
    var _this = this;
    this.timer = setInterval(function(){
      var oldValue = _this.state.value;
      var newValue = oldValue === 'X' ? 'O': 'X';
      _this.setState({
        value: newValue
      });
    }, 300);
  },
  componentWillUnmount: function(){
    clearInterval(this.timer);
  },
  render: function(){
    return (
      <button style={this.props.style}>{this.state.value}</button>
    )
  }
});


React.render(<Box style={boxStyle}/>, document.body);