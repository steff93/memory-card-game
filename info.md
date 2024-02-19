## App Architecture

The Architecture of the app is simple with little component hierarchy.
The data flow is unidirectional, passed down from the main parent component to the children via props.

The state data is updated via callbacks from children components.
For tracking the game score, a useReducer custom hook is used.

## Known Limitations

The most obvious limitation is the UI Design. The right approach here would be to sit down with an UI designer and come up with an attractive design that will keep an user engaged.

## Next Steps

In order to 'productionize' the app, besides improving the UI design, we can think about creating a multi-player online game with a built-in live-chat feature, possibility to choose how many cards to have, an all time score-board and a mobile app.
