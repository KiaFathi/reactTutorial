reactTutorial
=============

An Intro Tutorial on ReactJS, focused on building a Tic Tac Toe game.

### Getting Started:

1. Clone the repository
1. From the main directory, install the necessary npm packages:
```
npm install
```
1. After install has finished, from the main directory, run gulp:
```
gulp
```
1. Open up localhost:8080 in your browser of choice.

1. Follow the steps below to build Tic Tac Toe!

1. Your changes to app.jsx will auto reload your browser.

1. If auto-reload stops, check your gulp task in your terminal to see what is causing an error.


### Steps:

1. Build a react component called Box, render that component to the page

1. Give Box a property that dictates what text it renders, render an 'X'

1. Give Box some style! Make it a div with 

1. Have Box render text based on its state.

1. Have Box's state change every 300ms, alternating between 'X' and 'O'.
  1. Where should this be written?
  1. This is a good moment to learn about the component cycle!
  1. Make sure to clear your interval!

1. Have Box's state change based on clicks. Set inital state to '-'.
  1. How do we set up an event handler for React components?
  1. Make Box alternate between 'X' and 'O' on clicks.

1. Let's make a new component called Row that renders 3 Box components.

1. Pull the state out of each Box and into the higher level Row component.
  1. Don't forget to pass each child Box a key property.

1. Rig up the event handling so that clicks on a Box component change the 
  state on their parent Row component.

