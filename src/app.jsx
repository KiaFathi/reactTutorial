'use strict';

/* Goal: Build a tic tac toe game!
  
  Note: If at any point you get stuck, look to steps directory for guidance

  Steps:
    1. Build a react component called Box, render that component to the page.

    2. Give Box a property that dictates what text it renders, render an 'X'

    3. Give Box some style! Make it a div with 

    4. Have Box render text based on its state.

    5. Have Box's state change every 300ms, alternating between 'X' and 'O'.
      a. Where should this be written?
      a. This is a good moment to learn about the component cycle!
      a. Make sure to clear you interval!

    6. Have Box's state change based on clicks. Set inital state to '-'.
      a. How do we set up an event handler for React components?
      a. Make Box alternate between 'X' and 'O' on clicks.
    
    7. Let's make a new component called Row that renders 3 Box components.
    
    8. Pull the state out of each Box and into the higher level Row component.
      a. Don't forget to pass each child Box a key property.
    
    9. Rig up the event handling so that clicks on a Box component change the 
      state on their parent Row component.


*/

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