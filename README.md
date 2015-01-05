reactTutorial
=============

An intro tutorial on ReactJS, focused on building a Tic Tac Toe game.

### Getting Started:

1. Clone the repository.
1. If you don't have nodeJS installed on your computer, you can install it here:
<a href='http://nodejs.org/'>nodeJS</a>
1. From the main directory, install the necessary npm packages:
```
npm install
```
1. After install has finished, from the main directory, run gulp:
```
gulp
```
1. Open index.html in your browser of choice.

1. Follow the steps below to build Tic Tac Toe in the file 'src/app.jsx'

1. Your changes to app.jsx will auto rebuild your application.

1. Reload your browser to see changes.


### Steps:

Note: If you get stuck, you can look to the 'steps' directory to see solutions! Or look at the docs here:
<a href='http://facebook.github.io/react/docs/getting-started.html'> ReactJS Documentation </a>

1. Build a react component called Box, render that component to the page.

1. Give Box a property that dictates what text it renders, render an 'X'.

1. Give Box some style! Make it a button with height 100px and width 100px.
1. Have Box render text based on its state.

1. Have Box's state change every 300ms, alternating between 'X' and 'O'.
  1. Where should this be written?
  1. This is a good moment to learn about the component cycle!
  1. Make sure to clear your interval!

1. Have Box's state change based on clicks. Set initial state to '-'.
  1. How do we set up an event handler for React components?
  1. Make Box alternate between 'X' and 'O' on clicks.

1. Let's make a new component called Row that renders 3 Box components.

1. Pull the state out of each Box and into the higher level Row component.
  1. Don't forget to pass each child Box a key property.

1. Rig up the event handling so that clicks on a Box component change the 
  state on their parent Row component.

1. Now create a Board component that renders three Row components.

1. Pull the state out of the Row components and into the Board component.

1. Rig up event handling so clicks on Box's bubble up to the Board itself.


###Todos:

1. Clean up gulpfile so that it reports informative errors.
  1. This may require using browserify with gulp-shell instead of with gulp-react.
1. Add comments to solution code, so user can understand why choices were made.
1. Add more steps with fluxJS
