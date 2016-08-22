'use strict';
var React = require('react');

var Box = React.createClass({
  render: function(){
    return (
      <button>X</button>
    )
  }
});


React.render(<Box/>, document.body);