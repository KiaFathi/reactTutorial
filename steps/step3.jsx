var React = require('react');

var boxStyle = {
  height: '100px',
  width: '100px'
};

var Box = React.createClass({
  render: function(){
    return (
      <button style={boxStyle}>{this.props.value}</button>
    )
  }
});


React.render(<Box value='X'/>, document.body);